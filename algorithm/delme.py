from modules.SolutionTree import SolutionTree
import modules.Patterns as pts
import json

def getSol(path):
        with open(path) as inp:
                ptrn = pts.Pattern(json.load(inp))
        DTree1 = SolutionTree(ptrn)
        ptrn.visualizate()
        p = DTree1.get_best_paths(alg_type=2)
        DTree1.show()
        return p

l = getSol("d:/repos/PaperTeam/examples/difficulty_2/task7.json")
print(l)