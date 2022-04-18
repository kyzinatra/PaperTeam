class Fold:
    def __init__(self):
        self.vert = {}
        self.horiz = {}
        self.h_size = 0
        self.v_size = 0
        self.padding = {"top": 1, "right": 1, "bottom": 1, "left": 1}

    def __init__(self, js_obj):
        self.h_size = js_obj['h_size']
        self.v_size = js_obj['v_size']
        self.horiz = js_obj['horiz']
        self.vert = js_obj['vert']
        self.padding = js_obj['padding']

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

    def inpt_fold(self):
        Fold.h_size = int(input("h_size = "))
        tmp_ax = 0
        for i in range(Fold.h_size):
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

    def find_whole_ax(self):
        ans = []
        for k in self.vert.keys():
            if self.vert[k] == '1'*(self.h_size+1) or self.vert[k] == '0'*(self.h_size+1):
                ans.append(k)
        return ans


def invert_ax(ax):
    res = ""
    for i in ax:
        res += "0" if (i == "1") else "1"
    return res


class TargetFold(Fold):
    def __init__(self, h_size, v_size):
        Fold.__init__(self)
        self.linked_axis = {}
        self.h_size = h_size
        self.v_size = v_size
        for i in range(self.h_size):
            self.horiz[chr(i+65)] = '0'*(v_size+1)
        for i in range(self.h_size, self.h_size+self.v_size):
            self.vert[chr(i+65)] = '0'*(h_size+1)

    def findSimilarAx(self, f):
        res = []
        for k in f.vert.keys():
            if f.vert[k] == self.vert[k] or f.vert[k] == invert_ax(self.vert[k]):
                res.append(k)
        return res
