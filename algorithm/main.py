from modules.Patterns import Pattern, TargetPattern
import json
         

def resolve_example(ptrn):
    tp = TargetPattern(ptrn.h_size, ptrn.v_size)
    tp.setPaddings(1, 0.5, 1, 0.5)
    tp.visualizate()
    print(tp.square)
    tp.foldByAx('E')
    tp.visualizate()
    print(tp.square)
    tp.foldByAx('H')
    tp.visualizate()
    print(tp.square)
    tp.foldByAx('B')
    tp.visualizate()
    print(tp.square)

    tp.foldByAx('G')
    tp.visualizate()
    print(tp.square)
    tp.foldByAx('F')
    tp.visualizate()
    print(tp.square)
    tp.foldByAx('A')
    tp.visualizate()
    print(tp.square)

if __name__ == '__main__':
    f = open("test_init.json")
    ptrn = Pattern(json.load(f))
    resolve_example(ptrn)
