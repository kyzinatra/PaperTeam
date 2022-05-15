import copy
from modules.treelib import Tree, Node
from math import inf

from modules.Patterns import Pattern, TargetPattern


class SolutionTree(Tree):
    def __init__(self, pattern=0, tree=None, deep=False, node_class=None, identifier=None):
        super().__init__(tree, deep, node_class, identifier)
        if pattern:
            self.ptrn = pattern
            self.tp = TargetPattern(pattern.h_size, pattern.v_size)
        self.__doublesPaths = []
        self.__allN = []

    def __create_tree_alg1(self, parent='root'):
        if parent == 'root' and not self.contains('root'):
            self.create_node(identifier=parent,  data={
                             'square': self.tp.square,
                             'ptrn': copy.deepcopy(self.tp)})
        eq_axes = self.tp.findSimilarAx(self.ptrn)
        saveTp = copy.deepcopy(self.tp)
        for ax in eq_axes:
            self.tp.foldByAx(ax)
            self.create_node(identifier=parent+ax,
                             parent=parent, data={'square': self.tp.square,
                                                  'ptrn': copy.deepcopy(self.tp)})
            self.__allN.append(Node(identifier=parent+ax,
                                    data={'square': self.tp.square,
                                          'ptrn': copy.deepcopy(self.tp)}))
            already_has = False
            for n in self.__allN:
                if self.tp == n.data['ptrn'] and parent+ax != n.identifier:
                    already_has = True
                    self.__doublesPaths.append([parent+ax, n.identifier])
            if not already_has:
                self.__create_tree_alg1(parent+ax)
            self.tp = copy.deepcopy(saveTp)

    def __alg1_paste_doubles_to_tree(self):
        for i in range(len(self.__doublesPaths)):
            trgt = self.__doublesPaths[i][0]
            to_change = self.__doublesPaths[i][1]
            stree = copy.deepcopy(self.subtree(to_change))

            for id in stree.all_nodes():
                id = id.identifier
                stree.update_node(id, identifier=id.replace(
                    to_change, trgt), tag=id.replace(to_change, trgt))
            self.remove_node(trgt)
            self.paste(trgt[:-1], stree)
        pass

    def __create_tree_alg2(self, parent='root'):
        if parent == 'root' and not self.contains('root'):
            self.create_node(identifier=parent,  data={
                             'square': self.tp.square})
        eq_axes = self.tp.findSimilarAx(self.ptrn)
        saveTp = copy.deepcopy(self.tp)
        for ax in eq_axes:
            self.tp.foldByAx(ax)
            self.create_node(identifier=parent+ax,
                             parent=parent, data={'square': self.tp.square})
            self.__create_tree_alg2(parent+ax)
            self.tp = copy.deepcopy(saveTp)

    def get_best_paths(self, alg_type=1):
        """
        calls the algorithm for inserting data into the tree, forms 
        the resulting list of decisions (paths) based on the leaves from the tree
        """
        if alg_type == 1:
            self.__create_tree_alg1()
            self.__alg1_paste_doubles_to_tree()
        else:
            self.__create_tree_alg2()
        leaves = self.leaves()
        result = []
        best_square = inf
        for n in leaves:
            if n.data['square'] < best_square:
                best_square = n.data['square']
        for n in leaves:
            if n.data['square'] == best_square:
                result.append(n.identifier.replace('root', ''))
        return result
