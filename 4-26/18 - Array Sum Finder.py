# Given an array of numbers and a target number, return the first subset of two or more numbers that adds up to the target.
# - The "first" subset is the one whose elements have the lowest possible indices, prioritizing the earliest index first.
# - Each number in the array may only be used once.
# - If no valid subset exists, return "Sum not found".
# Return the matching numbers as an array in the order they appear in the original array.

# HAD TO WATCH A VIDEO ON THE SOLUTION
# vvv My first attempt at solving this problem (not finished of course because holy) vvv

# def arr_total(nums): # Takes a list of numbers of any size and adds them all.
#     total = 0
#     for i in nums:
#         total = total + int(i)
#     return(total)

# # print(arr_total([4, 5]))

# # def find_sum(arr, target):
# #     window = 2
# #     for i in range(window)
# #     return arr

# def find_sum(arr, target, *args):
#     # window_size = len(arr)
#     attempt_num = 1
#     if (args):
#         attempt_num = args[0]
#     starting_index = 0
#     if (args):
#         starting_index = args[1]
#     print(f"Attempt: {attempt_num} | Starting Index: {starting_index}")

#     working_arr = []
#     for i in range(attempt_num):
#         working_arr.append(arr[i + starting_index])
#     if arr_total(working_arr) == target: # Sanity check (Though this shouldn't be needed if code runs in correct order)
#         print(f"Final answer: {working_arr}")
#         return working_arr

#     counter = -1
#     for i in arr:
#         counter += 1
#         if counter >= (attempt_num + starting_index):
#             working_arr.append(i)
#             print(f"Testing: {working_arr}")
#             if arr_total(working_arr) == target:
#                 print(f"Final answer: {working_arr}")
#                 return working_arr
#             else:
#                 working_arr.pop()
#                 find_sum(arr, target, attempt_num + 1, starting_index)
#                 break
    
#     if len(working_arr) == len(arr):
#         print(f"Sum not found | Working Array: {working_arr}")
#         return "Sum not found"

# find_sum([3, 1, 4, 1, 5, 9, 2, 6], 10)