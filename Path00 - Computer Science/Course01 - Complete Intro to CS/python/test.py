import pytest
from sort_algorithms import *

@pytest.mark.parametrize("entrada, esperado", [
    ([19, 25, 0, 5, 3, 8, 6, 2, 1, -1, 10, -2, -6, -5, 13, -100], [-100, -6, -5, -2, -1, 0, 1, 2, 3, 5, 6, 8, 10, 13, 19, 25]),
    
    ([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
    
    ([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]),
    
    ([3, 1, 2, 3, 1], [1, 1, 2, 3, 3]),
    
    ([], []),

    ([1], [1]),
    
    ([7, 7, 7], [7, 7, 7])
])

def test_sort_varios_casos(entrada, esperado):

    #resultado = bubble_sort(entrada.copy())
    
    #resultado = insertion_sort(entrada.copy())

    #resultado = mergse_sort(entrada.copy())

    resultado = quick_sort(entrada.copy())

    assert resultado == esperado