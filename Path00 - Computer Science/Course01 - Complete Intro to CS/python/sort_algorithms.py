def bubble_sort(array: list):
    n = len(array)
    cambios = True

    while(cambios):
        cambios = False
        for j in range(0, n-1):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
                cambios = True
        n -= 1 
    
    return array


def insertion_sort(array: list):
    n = len(array)

    for i in range(1, n):
        print(array)
        num = array[i]  # Almaceno el numero actual de la lista no-ordenada
        j = i - 1       # Almaceno posicion final de la lista ordenada
        
        # Recorrer la lista ordenada de derecha a izquierda, comparando con el numero actual
        # Condicion 1: j debe ser mayor o igual a 0, cuidando indices negativos
        # Condicion 2: El numero del bucle interno debe ser mayor al numero actual para que este vaya "bajando"
        while j >= 0 and array[j] > num:
            array[j + 1] = array[j]
            j -= 1
            print(array)
        
        # Cuando llegamos al final de la lista (numero menor que todos)
        # o encontramos un numero menor al numero actual, actualizamos la posicion del numero
        array[j + 1] = num

        print()
    
    return array

