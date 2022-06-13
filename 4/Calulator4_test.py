import unittest
from Calculator4 import add, subtract, multiply, divide, square, power

class TestAdd(unittest.TestCase):

    def test_addingTestEqual(self):
         self.assertEqual(add(1, 2), 3)

    def test_addingTestNotEqual(self):
         self.assertNotEqual(add(4, 5), 6)

class TestSubtract(unittest.TestCase):

    def test_subtractingTestEqual(self):
         self.assertEqual(subtract(3, 2), 1)

    def test_subtractingTestNotEqual(self):
         self.assertNotEqual(subtract(6, 5), 4)

class TestMultiply(unittest.TestCase):

    def test_multiplyingTestEqual(self):
         self.assertEqual(multiply(1, 2), 2)

    def test_multiplyingTestNotEqual(self):
         self.assertNotEqual(multiply(6, 5), 4)

class TestDivide(unittest.TestCase):

    def test_divideingTestEqual(self):
         self.assertEqual(divide(2, 2), 1)

    def test_divideingTestNotEqual(self):
         self.assertNotEqual(divide(6, 3), 4)

class TestSquare(unittest.TestCase):

    def test_squareingTestEqual(self):
         self.assertEqual(square(9), 3)

    def test_squareingTestNotEqual(self):
         self.assertNotEqual(square(9), 4)


class TestPower(unittest.TestCase):

    def test_poweringTestEqual(self):
         self.assertEqual(power(2, 2), 4)

    def test_poweringTestNotEqual(self):
         self.assertNotEqual(divide(6, 3), 4)