from modules.Patterns import Pattern
from modules.DesTree import DesTree
import json
import sys

# "json_files/test_init.json"

if __name__ == '__main__':
    with open(sys.argv[1]) as inp:
        ptrn = Pattern(json.load(inp))
    DTree = DesTree(ptrn)
    
    if len(sys.argv) > 2 and sys.argv[2] in ['u', 'U', '-u', '-U']:
        bestPaths = []  # Dtree.GetUFriendlyPath()
        print("user friendly solution output coming soon")
    else:
        bestPaths = DTree.get_best_paths()
    print(bestPaths, sep='\n')
