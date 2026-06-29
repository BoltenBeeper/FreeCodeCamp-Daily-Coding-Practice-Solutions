# Given a word, return its score using a standard letter-value table:
# Letter	Value
# A	1
# B	2
# ...	...
# Z	26
#/ - Upper and lowercase letters have the same value.

# I didn't over think this solution, sometimes the tedious solution is the best. This is short, very readable, and very expandable and moddable with the score value of each number able to be indevidually changed.

# An object including every letter in the alpahabet with a corrisponding number to represent it's score value.
letters = {"a" : 1, "b" : 2, "c" : 3, "d" : 4, "e" : 5, "f" : 6, "g" : 7, "h" : 8, "i" : 9, "j" : 10, "k" : 11, "l" : 12, "m" : 13, "n" : 14, "o" : 15, "p" : 16, "q" : 17, "r" : 18, "s" : 19, "t" : 20, "u" : 21, "v" : 22, "w" : 23, "x" : 24, "y" : 25, "z" : 26}

# Start with a score of 0 then iterate through the given string and add each character's score value from the object above, also making every character lowercase because they have the same value.
def get_word_score(word):
    score = 0
    for char in word:
        print(f"{char} : {letters[char.lower()]}")
        score += letters[char.lower()]

    print(f"Total score: {score}")
    return score

get_word_score("freeCodeCamp")