# Given an integer, return the number of steps it takes to turn the word "fizzbuzz" into a string with at least the given number of "z"'s using the following rules:
# - Start with the string "fizzbuzz".
# - Each step, apply the standard FizzBuzz rules using the letter position in the string (the first "f" is position 1).
#   - If the letter position is divisible by 3, replace the letter with "fizz"
#   - If it's divisible by 5, replace the letter with "buzz"
#   - If it's divisible by 3 and 5, replace the letter with "fizzbuzz"
# So after 1 step, "fizzbuzz" turns into "fifizzzbuzzfizzzz", which has 9 "z"'s.

# Recurring function.
# Start by checking if there are enough "z"s in the fizzbuzz string.
# If so, perform a step with the specified rules, then call itself again to repeat.
def apply_step(arr, target_z_count): # Arr is expected as string
    global step_count
    verified, arr = verify_z_count(arr, target_z_count)

    if verified:
        return step_count
    
    arr = list(arr)

    for i in range(len(arr)):
        if ((i + 1) % 3 == 0):
            arr[i] = "fizz"
        if ((i + 1) % 5 == 0):
            arr[i] = "buzz"
        if (((i + 1) % 3 == 0) and ((i + 1) % 5 == 0)):
            arr[i] = "fizzbuzz"

    step_count += 1
    apply_step(arr, target_z_count)

# Convert list to a stsring so that each index is a single character rather than possibly a workd.
# Count 'z's in fizzbuzz string and return true if there are enough.
def verify_z_count(arr, target_z_count): # Arr is expected as list
    arr = "".join(arr)

    z_count = 0
    for i in arr:
        if i == "z":
            z_count += 1

    if (z_count >= target_z_count):
        print(f"'Z' count reached: {z_count}/{target_z_count}")
        return True, arr
    else:
        print(f"More 'z's needed: {z_count}/{target_z_count}")
        return False, arr

# Start the counter for steps at 0, initialize the first fizzbuzz string, and start apply_step chain until it returns something.
def explode_fizzbuzz(target_z_count):
    global step_count
    step_count = 0
    arr = "fizzbuzz"
    
    apply_step(arr, target_z_count)
    print(step_count)
    return step_count

explode_fizzbuzz(54482)