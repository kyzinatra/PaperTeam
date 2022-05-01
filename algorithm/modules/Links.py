class Segment:
    def __init__(self, state=0, axis='', pos=0):
        self.state = bool(state)
        self.axis = axis
        self.pos = pos
        self.links = []
        self.isFold = False

    def markAsFold(self):
        self.isFold = True

    def changeState(self):
        self.state = not self.state

    def prnt(self):
        print(int(self.state), self.axis+str(self.pos), end='')

    def __repr__(self):
        return str(int(self.state)) + ' ' + self.axis+str(self.pos)


class Links:
    def __init__(self):
        self.__links = []

    def setLink(self, seg1, const_seg):
        for l in self.__links:
            if seg1 in l:
                if const_seg in l:
                    return
                if seg1.state == const_seg.state:
                    [l[i].changeState() for i in range(0, len(l))]
                for ll in range(0, len(self.__links)):
                    if const_seg in self.__links[ll]:
                        for i in self.__links[ll]:
                            if i != const_seg:
                                l.append(i)
                        self.__links.pop(ll)
                        break
                l.append(const_seg)
                break
            elif const_seg in l:
                for i in self.__links:
                    if seg1 in i:
                        if const_seg in i:
                            return
                        if seg1.state == const_seg.state:
                            [i[k].changeState() for k in range(0, len(i))]
                        [l.append(k) for k in i]
                        self.__links.remove(i)
                        break
                if seg1.state == const_seg.state:
                    seg1.changeState()
                    l.append(seg1)
                break
        else:
            if seg1.state == const_seg.state:
                seg1.changeState()
            self.__links.append([seg1, const_seg])

    def markAsFold(self, seg):
        for l_list in self.__links:
            if seg in l_list:
                for l in l_list:
                    l.markAsFold()


    def prnt(self):
        for i in self.__links:
            print('[', end='')
            for l in i:
                print('\'', end='')
                l.prnt()
                print('\', ', end='')
            print(']\n ', end='')
        print('\n', end='')
