import pytest
from Calculator5 import add, subtract, multiply, divide, square, power

addParams = [(1, 2, 3), (4, 5, 9), (10, 11, 21)]
addParams2 = [(1, 2, 4), (5, 6, 7), (8, 9, 10)]

subtractParams = [(9, 8, 1), (7, 1, 6), (4, 2, 2)]
subtractParams2 = [(1, 2, 3), (4, 5, 6), (7, 8, 9)]

multiplyParams = [(1, 2, 2), (3, 4, 12), (5, 6, 30)]
multiplyParams2 = [(1, 2, 3), (4, 5, 6), (7, 8, 9)]

divideParams = [(9, 3, 3), (8, 4, 2), (6, 3, 2)]
divideParams2 = [(1, 2, 3), (4, 5, 6), (7, 8, 9)]

squareParams = [(4, 2), (9, 3), (16, 4)]
squareParams2 = [(2, 2), (3, 3), (4, 4)]

powerParams = [(1, 2, 1), (3, 4, 81), (5, 6, 15625)]
powerParams2 = [(2, 3, 4), (5, 6, 7), (8, 9, 10)]


@classmethod
def setup_class(cls):
    print('\n-start add-')


@classmethod
def teardown_class(cls):
    print('\n-end add-')


class TestAdd:


    @pytest.mark.parametrize("a, b, c", addParams)
    def test_addingTestEqual(a, b, c):
        assert add(a, b) == c


    @pytest.mark.parametrize("a, b, c", addParams2)
    def test_addingTestNotEqual(a, b, c):
        assert add(a, b) != c


@classmethod
def setup_class(cls):
    print('\n-start subtract-')


@classmethod
def teardown_class(cls):
    print('\n-end subtract-')


class TestSubtract:


    @pytest.mark.parametrize("a, b, c", subtractParams)
    def test_subtractingTestEqual(a, b, c):
        assert subtract(a, b) == c


    @pytest.mark.parametrize("a, b, c", subtractParams2)
    def test_subtractingTestNotEqual(a, b, c):
        assert subtract(a, b) != c


@classmethod
def setup_class(cls):
    print('\n-start multiply-')


@classmethod
def teardown_class(cls):
    print('\n-end multiply-')


class TestMultiply:


    @pytest.mark.parametrize("a, b, c", multiplyParams)
    def test_multiplyingTestEqual(a, b, c):
        assert multiply(a, b) == c


    @pytest.mark.parametrize("a, b, c", multiplyParams2)
    def test_multiplyingTestNotEqual(a, b, c):
        assert multiply(a, b) != c


@classmethod
def setup_class(cls):
    print('\n-start divide-')


@classmethod
def teardown_class(cls):
    print('\n-end divide-')


class TestDivide:


    @pytest.mark.parametrize("a, b, c", divideParams)
    def test_divideingTestEqual(a, b, c):
        assert divide(a, b) == c


    @pytest.mark.parametrize("a, b, c", divideParams2)
    def test_divideingTestNotEqual(a, b, c):
        assert divide(a, b) != c


@classmethod
def setup_class(cls):
    print('\n-start square-')


@classmethod
def teardown_class(cls):
    print('\n-end square-')


class TestSquare:


    @pytest.mark.parametrize("a, b", squareParams)
    def test_squareingTestEqual(a, b):
        assert square(a) == b


    @pytest.mark.parametrize("a, b", squareParams2)
    def test_squareingTestNotEqual(a, b):
        assert square(a) != b


@classmethod
def setup_class(cls):
    print('\n-start power-')


@classmethod
def teardown_class(cls):
    print('\n-end power-')


class TestPower:


    @pytest.mark.parametrize("a, b, c", powerParams)
    def test_poweringTestEqual(a, b, c):
        assert power(a, b) == c


    @pytest.mark.parametrize("a, b, c", powerParams2)
    def test_poweringTestNotEqual(a, b, c):
        assert power(a, b) != c
