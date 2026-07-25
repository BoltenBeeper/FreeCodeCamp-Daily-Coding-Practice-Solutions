# Given a string of words, return only the words with an odd number of letters.
# - Words in the given string will be separated by a single space.
# - Return the words separated by a single space.

def get_odd_words(s):
    word_list = s.split(" ")
    print(word_list)

    odd_words = ""
    for i in word_list:
        if (len(i) % 2) > 0:
            if len(odd_words) != 0:
                odd_words += " "
            odd_words += i
    print(f"|{odd_words}|")
    return odd_words

get_odd_words("This is a super good test")
