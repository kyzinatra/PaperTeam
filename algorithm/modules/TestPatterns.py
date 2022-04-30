import unittest
from Patterns import Pattern, TargetPattern

class testPattern(unittest.TestCase):
    def setUp(self):
        self.pattern = Pattern()
        self.pattern.test_init()
    
    def test_findWholeAx(self):
        self.assertEqual(self.pattern.findWholeAx(), ['E', 'H'])

class testTargetPattern(unittest.TestCase):
    def setUp(self):
        self.Tpattern = TargetPattern(3,6)
    
    def test_isFold(self):
        self.assertFalse(self.Tpattern.isFold('A'))
        self.Tpattern.markAsFold('A')
        self.assertTrue(self.Tpattern.isFold('A'))
        self.assertRaises(Exception, self.Tpattern.isFold, 'Y')

    def test_markAsFold(self):
        self.assertRaises(Exception, self.Tpattern.isFold, 'Y')
        

if __name__ == '__main__':
    unittest.main()
