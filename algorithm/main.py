class Fold:
    vert = {}
    horiz = {}
    h_size = 0
    v_size = 0
    margin = {"top":1,"right":1, "bottom":1,"left":1}

    def visualizate(self):
        line_c = 0
        print('  ', end = '')
        for n in self.vert.keys():
            print("   "+n, end = '')
        print('\n  ', end = '')
        for i in self.horiz.keys():
            for j in self.vert.values():
                print("   "+ ('┃' if int(j[line_c]) else '┆'), end='')
            line_c+=1
            print('\n '+i, end = '')
            for k in self.horiz[i]:
                print('───+' if int(k) else '┄┄┄+', end = '')
            print('\n  ',end = '')
        for j in self.vert.values():
                print("   "+ ('┃' if int(j[line_c]) else '┆'), end='')
        print('')

    def inpt_fold(self):
        Fold.h_size = int(input("h_size = "))
        tmp_ax = 0
        for i in range(Fold.h_size):
            tmp_ax = input(chr(i+65) +" ax = ")
            f.horiz[chr(i+65)] = tmp_ax
        f.v_size = int(input("v_size = "))
        for i in range(f.h_size, f.h_size+f.v_size):
            tmp_ax =  input(chr(i+65) +" ax = ")
            f.vert[chr(i+65)] = tmp_ax
        self.margin["top"] = int(input("margins 0-1 values\ntop = "))
        self.margin["right"] = int(input("right = "))
        self.margin["bottom"] = int(input("bottom = "))
        self.margin["left"] = int(input("left = "))

    def test_init(self):
        test_d = ['1010101', '0011100', '0101010', '0011',
          '1111', '1100', '1100', '1111', '0011']
        Fold.h_size = 3
        tmp_ax = 0
        for i in range(Fold.h_size):
            tmp_ax = test_d[i]
            self.horiz[chr(i+65)] = tmp_ax
        f.v_size = 6
        for i in range(self.h_size, self.h_size+self.v_size):
            tmp_ax = test_d[i]
            self.vert[chr(i+65)] = tmp_ax
        self.margin = {"top":0,"right":0.5, "bottom":0.5,"left":0}

    def prnt(self):
        print(self.horiz, self.vert, self.margin)

    def find_whole_ax(self):
        ans = []
        for k in self.vert.keys():
            if self.vert[k] == '1'*(self.h_size+1) or self.vert[k] == '0'*(self.h_size+1):
                ans.append(k)
        return ans


class TargetFold(Fold):
    
    pass

f = Fold()

f.test_init()
#f.inpt_fold()
f.prnt()
f.visualizate()
print(f.find_whole_ax())






'''
3
1010101
0011100
0101010
6
0011
1111
1100
1100
1111
0011
'''
