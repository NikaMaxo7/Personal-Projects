def comp(array1, array2):
    if array1 is None or array2 is None:
        return False
    
    squares = []
    for num in array1:
        squares.append(num * num)
    
    squares.sort()
    array2.sort()
    
    if squares == array2:
        return True
    else:
        return False
    
# Codewars - Are they the "same"?
# Link: https://www.codewars.com/kata/550498447451fbbd7600041c/train/python