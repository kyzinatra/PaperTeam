import unittest
from Patterns import Pattern, TargetPattern

class testPattern(unittest.TestCase):
    def setUp(self):
        self.pattern = Pattern()
    

class testTargetPattern(unittest.TestCase):
    def setUp(self):
        self.Tpattern = TargetPattern(3,6)
    
        

if __name__ == '__main__':
    unittest.main()
