# Given a string, return the letter from the string that appears last in the alphabet.
# - If two or more letters tie for the last in the alphabet, return the first one.
# - Ignore all non-letter characters.

### I want to add that this solution was made DAYS after I had already initially completed the proplem the first time. Somehow the first time I think was way less convoluted and somehow it still passed all the tests. Idk why it was harder for me the second time but at least I know this covers all scenarios with all the checks I do lmao.

def get_last_letter(s):
    sorted_arr = sorted(s)
    print(f"sorted_arr: {sorted_arr}")
    initial_last = sorted_arr[-1]

    no_lowers = []
    for i in sorted_arr:
        if i == i.upper():
            no_lowers.append(i)
        else:
            break
    print(f"no_lowers: {no_lowers}")
    if no_lowers == []:
        return initial_last

    # for i in sorted_arr:
    #     if initial_last == i.lower():
    #         print(i)
    #         return i

    # all_lowered = sorted(list(map(str.lower, sorted_arr)))
    # print(all_lowered)
    if initial_last == no_lowers[-1].lower():
        print(no_lowers[-1])
        return no_lowers[-1]
    else:
        final_check = sorted([initial_last, no_lowers[-1].lower()])
        if initial_last == final_check[-1]:
            print(initial_last)
            return initial_last
        else: 
            print(final_check[-1].upper())
            return final_check[-1].upper()

get_last_letter("world")
print()
get_last_letter("Hello World")
print()
get_last_letter("HeLl0")
