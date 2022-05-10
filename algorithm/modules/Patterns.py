from modules.Links import Links, Segment

class Pattern:
    def __init__(self, js_obj=None):
        if (js_obj):
            self.horiz = {}
            for str_ax in js_obj['horiz']:
                seg_ax = []
                pos = 0
                for seg_state in js_obj['horiz'][str_ax]:
                    seg_ax.append(Segment(int(seg_state), str_ax, pos))
                    pos += 1
                self.horiz[str_ax] = seg_ax
            self.vert = {}
            for str_ax in js_obj['vert']:
                seg_ax = []
                pos = 0
                for seg_state in js_obj['vert'][str_ax]:
                    seg_ax.append(Segment(int(seg_state), str_ax, pos))
                    pos += 1
                self.vert[str_ax] = seg_ax
            self.h_size = len(self.horiz)
            self.v_size = len(self.vert)
            self.padding = js_obj['padding']
        else:
            self.vert = {}
            self.horiz = {}
            self.h_size = 0
            self.v_size = 0
            self.padding = {'top': 1, 'right': 1, 'bottom': 1, 'left': 1}

    def visualizate(self):
        line_c = 0
        print('  ', end='')
        for n in self.vert.keys():
            print('   '+n, end='')
        print('\n  ', end='')
        for i in self.horiz.keys():
            for j in self.vert.values():
                print('   ' + ('┃' if j[line_c].state else '┆'), end='')
            line_c += 1
            print('\n '+i, end='')
            for k in self.horiz[i]:
                print('───+' if k.state else '┅┅┅+', end='')
            print('\n  ', end='')
        for j in self.vert.values():
            print('   ' + ('┃' if j[line_c].state else '┆'), end='')
        print('')

    def prnt(self):
        print('horiz:', self.horiz, '\nVert: ',
              self.vert, '\npaddings: ', self.padding)


class TargetPattern(Pattern):
    def __init__(self, h_size, v_size):
        Pattern.__init__(self)
        self.links = Links()
        self.h_size = h_size
        self.v_size = v_size
        self.valid_axis_vert = []
        self.valid_axis_horiz = []
        self.square = (v_size + -1)*(h_size - 1) + (self.padding['left'])*(h_size-1) + (self.padding['right'])*(
            h_size-1) + (self.padding['top'])*(v_size-1) + (self.padding['bottom'])*(v_size-1)
        for i in range(0, self.h_size):
            h_ax = []
            self.valid_axis_horiz.append(chr(i+65))
            for j in range(0, self.v_size+1):
                h_ax.append(Segment(0, chr(i+65), j))
            self.horiz[chr(i+65)] = h_ax
        for i in range(self.h_size, self.h_size+self.v_size):
            v_ax = []
            self.valid_axis_vert.append(chr(i+65))
            for j in range(0, self.h_size+1):
                v_ax.append(Segment(0, chr(i+65), j))
            self.vert[chr(i+65)] = v_ax

    def setPaddings(self, top, right, bottom, left):
        self.padding['top'] = top
        self.padding['right'] = right
        self.padding['bottom'] = bottom
        self.padding['left'] = left
        self.__updateSquare()

    def markAsFold(self, ax):
        if ax in self.vert:
            for seg in self.vert[ax]:
                self.links.markAsFold(seg)
                seg.markAsFold()
        elif ax in self.horiz:
            for seg in self.horiz[ax]:
                self.links.markAsFold(seg)
                seg.markAsFold()
        else:
            raise Exception('template does not have such an axis')

    def isAxisInEndHalf(self, ax):
        if ax in self.valid_axis_vert:
            return (((ord(max(self.valid_axis_vert))-ord(min(self.valid_axis_vert)))/2
                    + ord(min(self.valid_axis_vert)) - ord(ax)) <= 0)
        elif ax in self.valid_axis_horiz:
            return (((ord(max(self.valid_axis_horiz))-ord(min(self.valid_axis_horiz)))/2
                    + ord(min(self.valid_axis_horiz)) - ord(ax)) <= 0)

    def __getAxNumber(self, ax):
        count = 0
        if ax in self.vert:
            for i in self.vert:
                if i == ax:
                    return count
                count += 1
        else:
            for i in self.horiz:
                if i == ax:
                    return count
                count += 1

    def __getAxNumberInValid(self, ax):
        count = 0
        if ax in self.valid_axis_vert:
            for i in self.valid_axis_vert:
                if i == ax:
                    return count
                count += 1
        else:
            for i in self.valid_axis_horiz:
                if i == ax:
                    return count
                count += 1

    def __updatePaddings(self, ax):
        if ax in self.horiz:
            direct = ('top' if not self.isAxisInEndHalf(ax) else 'bottom')
        else:
            direct = ('left' if not self.isAxisInEndHalf(ax) else 'right')
        self.padding[direct] = 1

    def __updateSquare(self):
        v_size = len(self.valid_axis_vert)
        h_size = len(self.valid_axis_horiz)
        self.square = (v_size - 1)*(h_size - 1) + (self.padding['left'])*(h_size-1) + (self.padding['right'])*(
            h_size-1) + (self.padding['top'])*(v_size-1) + (self.padding['bottom'])*(v_size-1) + (
            self.padding['right'] + self.padding['left'])*(self.padding['top']+self.padding['bottom'])

    def __getLinkedAxis(self, ax):
        res = []
        if ax in self.vert:
            ax = self.vert[ax]
        elif ax in self.horiz:
            ax = self.horiz[ax]
        for seg in ax:
            res = list(set(res) | set(self.links.getLinkedAxis(seg)))
        return res

    def foldByAx(self, ax):
        self.__updatePaddings(ax)
        if ax in self.vert:
            if ax in self.valid_axis_vert:
                self.foldByVertAx(ax)
            elif not self.vert[ax][0].isFold:
                lAxis = self.__getLinkedAxis(ax)
                for lax in lAxis:   
                    if lax in self.valid_axis_vert:
                        self.foldByVertAx(lax)
                        break
        elif ax in self.horiz:
            if ax in self.valid_axis_horiz:
                self.foldByHorizAx(ax)
            elif not self.horiz[ax][0].isFold:
                lAxis = self.__getLinkedAxis(ax)
                for lax in lAxis:   
                    if lax in self.valid_axis_horiz:
                        self.foldByHorizAx(lax)
                        break
        self.__updateSquare()

    def foldByVertAx(self, ax):
        direct = (1 if self.isAxisInEndHalf(ax) else -1)
        # set links for vert axis
        depend_ax = chr(ord(ax)+direct)
        target_ax = chr(ord(ax)-direct)
        while depend_ax in self.valid_axis_vert:
            for i in range(len(self.vert[depend_ax])):
                self.links.setLink(
                    self.vert[depend_ax][i], self.vert[target_ax][i])
            depend_ax = chr(ord(depend_ax) + direct)
            target_ax = chr(ord(target_ax) - direct)
        # set links for horiz axis
        depend_segN = self.__getAxNumber(ax) + (1 if direct == 1 else 0)
        target_segN = self.__getAxNumber(ax) + (1 if direct == -1 else 0)
        diff = self.__getAxNumber(ax)-self.__getAxNumberInValid(ax)
        while depend_segN <= diff+len(self.valid_axis_vert) and depend_segN >= diff:
            for hAx in self.valid_axis_horiz:
                self.links.setLink(
                    self.horiz[hAx][depend_segN], self.horiz[hAx][target_segN])
            depend_segN += direct
            target_segN -= direct
        # remove depend from valid_axis +
        depend_ax = chr(ord(ax))
        while depend_ax in self.valid_axis_vert:
            self.valid_axis_vert.remove(depend_ax)
            depend_ax = chr(ord(depend_ax) + direct)
        self.markAsFold(ax)

    def foldByHorizAx(self, ax):
        direct = (1 if self.isAxisInEndHalf(ax) else -1)
        # set links for horiz axis
        depend_ax = chr(ord(ax)+direct)
        target_ax = chr(ord(ax)-direct)
        while depend_ax in self.valid_axis_horiz:
            for i in range(len(self.horiz[depend_ax])):
                self.links.setLink(
                    self.horiz[depend_ax][i], self.horiz[target_ax][i])
            depend_ax = chr(ord(depend_ax) + direct)
            target_ax = chr(ord(target_ax) - direct)
        # set links for vert axis
        depend_segN = self.__getAxNumber(ax) + (1 if direct == 1 else 0)
        target_segN = self.__getAxNumber(ax) + (1 if direct == -1 else 0)
        diff = self.__getAxNumber(ax)-self.__getAxNumberInValid(ax)
        while depend_segN <= diff+len(self.valid_axis_horiz) and depend_segN >= diff:
            for hAx in self.valid_axis_vert:
                self.links.setLink(
                    self.vert[hAx][depend_segN], self.vert[hAx][target_segN])
            depend_segN += direct
            target_segN -= direct
        # remove depend from valid_axis +
        depend_ax = chr(ord(ax))
        while depend_ax in self.valid_axis_horiz:
            self.valid_axis_horiz.remove(depend_ax)
            depend_ax = chr(ord(depend_ax) + direct)
        self.markAsFold(ax)

    def visualizate(self):
        line_c = 0
        print('  ', end='')
        for n in self.vert.keys():
            print('   '+n, end='')
        print('\n  ', end='')
        for i in self.horiz.keys():
            for j in self.vert.values():
                if j[line_c].isFold:
                    line = '\\'
                elif j[line_c].state:
                    line = '┃'
                else:
                    line = '┆'
                print('   ' + line, end='')
            line_c += 1
            print('\n '+i, end='')
            for k in self.horiz[i]:
                if k.isFold:
                    line = '\\\\\+'
                elif k.state:
                    line = '───+'
                else:
                    line = '┅┅┅+'
                print(line, end='')
            print('\n  ', end='')
        for j in self.vert.values():
            if j[line_c].isFold:
                line = '\\'
            elif j[line_c].state:
                line = '┃'
            else:
                line = '┆'
            print('   ' + line, end='')
        print('\n')

    def getInvertedAx(self, ax):
        result = []
        for s in ax:
            result.append(Segment(not s.state, s.axis, s.pos))
        return result

    def findSimilarAx(self, pt):
        result = []
        for v in self.vert:
            if self.vert[v][0].isFold:
                continue
            if self.vert[v] == pt.vert[v] or pt.vert[v] == self.getInvertedAx(self.vert[v]):
                result.append(v)
        for h in self.horiz:
            if self.horiz[h][0].isFold:
                continue
            if self.horiz[h] == pt.horiz[h] or pt.horiz[h] == self.getInvertedAx(self.horiz[h]):
                result.append(h)
        return result

    def prnt(self):
        super().prnt()

    def __eq__(self, rp):
        result = True
        if self.padding != rp.padding:
            return False
        if self.horiz != rp.horiz or self.vert != rp.vert:
            return False
        # if self.links != rp.links:
        #     return False
        if self.valid_axis_horiz != rp.valid_axis_horiz or \
            self.valid_axis_vert != rp.valid_axis_vert:
            return False
        return True
