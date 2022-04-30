
from regex import P


class Pattern:
    def __init__(self, js_obj=None):
        if (js_obj):
            self.horiz = js_obj['horiz']
            self.vert = js_obj['vert']
            self.h_size = len(self.horiz)
            self.v_size = len(self.vert)
            self.padding = js_obj['padding']
        else:
            self.vert = {}
            self.horiz = {}
            self.h_size = 0
            self.v_size = 0
            self.padding = {"top": 1, "right": 1, "bottom": 1, "left": 1}

    def visualizate(self):
        line_c = 0
        print('  ', end='')
        for n in self.vert.keys():
            print("   "+n, end='')
        print('\n  ', end='')
        for i in self.horiz.keys():
            for j in self.vert.values():
                print("   " + ('┃' if int(j[line_c]) else '┆'), end='')
            line_c += 1
            print('\n '+i, end='')
            for k in self.horiz[i]:
                print('───+' if int(k) else '┅┅┅+', end='')
            print('\n  ', end='')
        for j in self.vert.values():
            print("   " + ('┃' if int(j[line_c]) else '┆'), end='')
        print('')

    def inputPattern(self):
        Pattern.h_size = int(input("h_size = "))
        tmp_ax = 0
        for i in range(Pattern.h_size):
            tmp_ax = input(chr(i+65) + " ax = ")
            self.horiz[chr(i+65)] = tmp_ax
        self.v_size = int(input("v_size = "))
        for i in range(self.h_size, self.h_size+self.v_size):
            tmp_ax = input(chr(i+65) + " ax = ")
            self.vert[chr(i+65)] = tmp_ax
        self.padding["top"] = int(input("margins 0-1 values\ntop = "))
        self.padding["right"] = int(input("right = "))
        self.padding["bottom"] = int(input("bottom = "))
        self.padding["left"] = int(input("left = "))

    def test_init(self):
        test_d = ['1010101', '0011100', '0101010', '0011',
                  '1111', '1100', '1100', '1111', '0011']
        self.h_size = 3
        tmp_ax = 0
        for i in range(self.h_size):
            tmp_ax = test_d[i]
            self.horiz[chr(i+65)] = tmp_ax
        self.v_size = 6
        for i in range(self.h_size, self.h_size+self.v_size):
            tmp_ax = test_d[i]
            self.vert[chr(i+65)] = tmp_ax
        self.padding = {"top": 0, "right": 0.5, "bottom": 0.5, "left": 0}

    def prnt(self):
        print("horiz:", self.horiz, "\nVert: ",
              self.vert, "\npaddings: ", self.padding)

    def findWholeAx(self):
        ans = []
        for k in self.vert.keys():
            if self.vert[k] == '1'*(self.h_size+1) or self.vert[k] == '0'*(self.h_size+1):
                ans.append(k)
        return ans




class TargetPattern(Pattern):
    def __init__(self, h_size, v_size):
        Pattern.__init__(self)
        self.linked_axis = []
        self.h_size = h_size
        self.v_size = v_size
        self.square = (v_size + self.padding["top"] + self.padding["bottom"])*(
            h_size + self.padding["right"] + self.padding["left"])
        for i in range(self.h_size):
            self.horiz[chr(i+65)] = '0'*(v_size+1)
        for i in range(self.h_size, self.h_size+self.v_size):
            self.vert[chr(i+65)] = '0'*(h_size+1)

    def setLink(self, ax1, ax2):
        for i in range(0, len(self.linked_axis)):
            if ax1 in self.linked_axis[i]:
                self.linked_axis[i].append(ax2)
                return
            elif ax2 in self.linked_axis[i]:
                self.linked_axis[i].append(ax1)
                return
        else:
            self.linked_axis.append([ax1, ax2])

    def setLinks(self, ax):
        if ax in self.vert:
            i = 1
            while chr(ord(ax)-i) in self.vert and chr(ord(ax)+i) in self.vert:
                self.setLink(chr(ord(ax)-i), chr(ord(ax)+i))
                i += 1
        elif ax in self.horiz:
            i = 1
            while chr(ord(ax)-i) in self.horiz and chr(ord(ax)+i) in self.horiz:
                self.setLink(chr(ord(ax)-i), chr(ord(ax)+i))
                i += 1

    def axisInEndHalf(self, ax):
        if ax in self.vert:
            return (((ord(max(self.vert))-ord(min(self.vert)))/2 + ord(min(self.vert)) - ord(ax)) <= 0)
        elif ax in self.horiz:
            return (((ord(max(self.horiz))-ord(min(self.horiz)))/2 + ord(min(self.horiz))- ord(ax)) <= 0)
    
    def get_inverted_ax(self, ax):
        res = ""
        if ax in self.vert:
            if self.vert[ax][0] == '-':
                return self.vert[ax]
            for i in self.vert[ax]:
                res += "0" if (i == "1") else "1"
        elif ax in self.horiz:
            if self.horiz[ax][0] == '-':
                return self.vert[ax]
            for i in self.horiz[ax]:
                res += "0" if (i == "1") else "1"
        return res
    
    def getSplittedAxisBy(self, ax, sep_ax):
        def countAxNumber(ax):
            count = 0
            if ax in self.vert:
                for i in self.vert.keys():
                    if i == ax:
                        return count
                    count += 1
            if ax in self.horiz:
                for i in self.horiz.keys():
                    if i == ax:
                        return count
                    count += 1
            return -1

        direct = (1 if self.axisInEndHalf(sep_ax) else -1)
        if ax in self.vert:
            if self.vert[ax][0] == '-':
                return self.vert[ax]
            n = countAxNumber(sep_ax) + (1 if direct == -1 else 0)
            i = 1
            res = [i for i in self.vert[ax]]
            while n+i*direct < len(self.vert[ax]) and n+i*direct >= 0:
                res[n+i*direct] = '0' if res[n-i*direct] == '1' else '1'
                i+=1
        if ax in self.horiz:
            if self.horiz[ax][0] == '-':
                return self.horiz[ax]
            n = countAxNumber(sep_ax) + (1 if direct == -1 else 0)
            i = 1
            res = [i for i in self.horiz[ax]]
            while n+i*direct < len(self.horiz[ax]) and n+i*direct >= 0:
                res[n+i*direct] = '0' if res[n-i*direct] == '1' else '1'
                i+=1
        return ''.join(res)



    def invertLinked(self, inv_ax, trgt):
        for i in self.linked_axis:
            if inv_ax in i:
                for j in range(0,len(i)):
                    if i[j] in self.vert:
                        self.vert[i[j]] = self.get_inverted_ax(trgt) if j % 2 == 0 else self.vert[trgt]
                    elif i[j] in self.horiz:
                        self.horiz[i[j]] = self.get_inverted_ax(trgt) if j % 2 == 0 else self.vert[trgt]

    def isFold(self, ax):
        if ax in self.vert:
            return self.vert[ax][0] == '-'
        elif ax in self.horiz:
            return self.horiz[ax][0] == '-'
        raise Exception("template does not have such an axis")
        

    def markAsFold(self,ax):
        if ax in self.vert:
            self.vert[ax] = '-'*(self.h_size+1)
            for links in self.linked_axis:
                if ax in links:
                    for l in links:
                        self.vert[l] = '-'*(self.h_size+1)
        elif ax in self.horiz:
            self.horiz[ax] = '-'*(self.v_size+1)
            for links in self.linked_axis:
                if ax in links:
                    for l in links:
                        self.horiz[l] = '-'*(self.v_size+1)
        raise Exception("template does not have such an axis")

    def foldByAx(self, ax):
        if ax in self.vert:
            direct = (1 if self.axisInEndHalf(ax) else -1)
            i = 1
            while chr(ord(ax)+i*direct) in self.vert:
                inv_ax = chr(ord(ax)+i*direct)
                trgt_ax = chr(ord(ax)-i*direct)
                if not self.isFold(inv_ax):
                    self.vert[inv_ax] = self.get_inverted_ax(trgt_ax)
                    self.invertLinked(inv_ax, trgt_ax)

                i+=1
            for j in self.horiz.keys():
                self.horiz[j] = self.getSplittedAxisBy(j, ax)
        elif ax in self.horiz:
            direct = (1 if self.axisInEndHalf(ax) else -1)
            i = 1
            while chr(ord(ax)+i*direct) in self.horiz:
                inv_ax = chr(ord(ax)+i*direct)
                trgt_ax = chr(ord(ax)-i*direct)
                if not self.isFold(inv_ax):
                    self.horiz[inv_ax] = self.get_inverted_ax(trgt_ax)
                    self.invertLinked(inv_ax, trgt_ax)

                i+=1
            for j in self.vert.keys():
                self.vert[j] = self.getSplittedAxisBy(j, ax)

        self.setLinks(ax)
        self.markAsFold(ax)

    def visualizate(self):
        line_c = 0
        print('  ', end='')
        for n in self.vert.keys():
            print("   "+n, end='')
        print('\n  ', end='')
        for i in self.horiz.keys():
            for j in self.vert.values():
                if j[line_c] == '1':
                    symb = '┃'
                elif j[line_c] == '0':
                    symb = '┆'
                else:
                    symb = '\\'
                print("   " + symb, end='')
            line_c += 1
            print('\n '+i, end='')
            for k in self.horiz[i]:
                if k == '1':
                    symb = '───+'
                elif k == '0':
                    symb = '┅┅┅+'
                else:
                    symb = '\\\\\+'
                print(symb, end='')
            print('\n  ', end='')
        for j in self.vert.values():
            if j[line_c] == '1':
                symb = '┃'
            elif j[line_c] == '0':
                symb = '┆'
            else:
                symb = '\\'
            print("   " + symb, end='')
        print('\n')

    def prnt(self):
        super().prnt()
        print('linked axis: ', self.linked_axis)
