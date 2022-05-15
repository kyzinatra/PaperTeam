from modules.Patterns import Pattern
from modules.SolutionTree import SolutionTree
import json
import sys
import timeit

# "json_files/test_init.json"


if __name__ == "__main__":
    if sys.argv[1] == "-j":
        ptrn = Pattern(json.loads(sys.argv[2]))

        DTree = SolutionTree(ptrn)
        bestPaths = DTree.get_best_paths()

    else:
        with open(sys.argv[1]) as inp:
            ptrn = Pattern(json.load(inp))
        DTree = SolutionTree(ptrn)
        bestPaths = DTree.get_best_paths(1)

    print(json.dumps(bestPaths), sep="\n")