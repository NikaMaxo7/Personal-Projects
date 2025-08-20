def flip(d, a):
    a.sort()
    
    if d == "L":
        lst = []
        for i in range(len(a) -1, -1, -1):
            lst.append(a[i])
        return lst
    else:
        return a
    

# Codewars - Gravity Flip
# Link: https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/python