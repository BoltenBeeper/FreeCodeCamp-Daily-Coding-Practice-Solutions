# Knowing that we only need to translate numbers from 0 to 99, create two arrays of all possible strings to appear in any combnination. (Ignoring "-" because that can be easily concatenated.)
one_teens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", ]

def get_number_words(n):
    # If the given number is under 20, directly pull the translated version from the "one_teens" list.
    if (n < 20):
        print(one_teens[n])
        return one_teens[n]
    else:
        n = str(n) # Redefine n as a string to search arrays using indevidual indexes.
    # If the given number (n) ends in 0, just return it's index in the "tens" array. (Minus 2 because the array starts at "twenty" not "zeroty".)
        if (int(n[1]) == 0):
            print(tens[int(n[0]) - 2])
            return tens[int(n[0]) - 2]
    # If other checks fail, return the first character's index in the "tens" array followed by the second character's index in the "oneTeens" array.
        print(f"{tens[int(n[0]) - 2]}-{one_teens[int(n[1])]}")
        return f"{tens[int(n[0]) - 2]}-{one_teens[int(n[1])]}"

get_number_words(67)