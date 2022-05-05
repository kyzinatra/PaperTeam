from modules.Patterns import Pattern, TargetPattern
import json
import copy
from treelib import Tree
from math import inf


class DesTree(Tree):
    def __init__(self, pattern, tree=None, deep=False, node_class=None, identifier=None):
        super().__init__(tree, deep, node_class, identifier)
        self.ptrn = pattern
        self.tp = TargetPattern(pattern.h_size, pattern.v_size)

    def __super_alg(self, parent='root'):
        if parent == 'root' and not self.contains('root'):
            self.create_node(identifier=parent, data=self.tp.square)
        eq_axes = self.tp.findSimilarAx(self.ptrn)
        saveTp = copy.deepcopy(self.tp)
        for ax in eq_axes:
            self.tp.foldByAx(ax)
            self.create_node(identifier=parent+ax,
                             parent=parent, data=self.tp.square)
            self.__super_alg(parent+ax)
            self.tp = copy.deepcopy(saveTp)

    def get_best_paths(self):
        self.__super_alg()
        leaves = self.leaves()
        result = []
        best_square = inf
        if len(leaves) == 1:
            return []
        for n in leaves:
            if n.data < best_square:
                best_square = n.data
        for n in leaves:
            if n.data == best_square:
                result.append(n.identifier.replace('root', ''))
        return result


if __name__ == '__main__':
    with open("json_files/test_init.json") as inp:
        ptrn = Pattern(json.load(inp))
    
    DTree = DesTree(ptrn)
    bestPaths = DTree.get_best_paths()
    print(bestPaths, sep = '\n')

    with open("json_files/test_init_res.json", 'w') as out:
        json.dump(bestPaths, out)
