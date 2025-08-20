def find_outlier(integers):
    even_count = 0
    odd_count = 0

    for i in integers[:3]:
        if i % 2 == 0:
            even_count += 1
        else:
            odd_count += 1

    if even_count > odd_count:
        for i in integers:
            if i % 2 != 0:
                return i
    else:
        for i in integers:
            if i % 2 == 0:
                return i

# Codewars - Find the Parity Outlier
# Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/python