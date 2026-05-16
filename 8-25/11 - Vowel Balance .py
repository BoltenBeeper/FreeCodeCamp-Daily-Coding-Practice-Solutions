# Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
# - The string can contain any characters.
# - The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
# - If there's an odd number of characters in the string, ignore the center character.

import math

vowels = ["a", "e", "i", "o", "u"]

# Take a full string and read until reaching the half way point.
# Ignore the middle character and returning a string of all vowels found. 
def read_half(s):
    half_vowels = ""
    counter = 0
    for i in s:
        counter += 1
        if (counter <= (int(len(s))) / 2) and (i.lower() in vowels):
            half_vowels = half_vowels + i
    return half_vowels

# Feed a normal and reversed string into the read_hald function and compare the lengths of the strings they return.
def is_balanced(s):
    backward_s = s[::-1] # Select everything in the string (::) and iterate backwards on it (-1), resulting in a reversed string.

    first_s = read_half(s)
    last_s = read_half(backward_s)

    print(first_s)
    print(last_s)
    if len(first_s) == len(last_s):
        print(True)
        return True
    print(False)
    return False

is_balanced("abcdefghijklmnopqrstuvwxyz")
