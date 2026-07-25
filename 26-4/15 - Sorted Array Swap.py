# Given an array of integers, return a new array using the following rules:
# 1. Sort the integers in ascending order
# 2. Then swap all values whose index is a multiple of 3 with the value before it.

Sort the integers in ascending order
Then swap all values whose index is a multiple of 3 with the value before it.

def sort_and_swap(arr):
     step_one = sorted(arr)
     print(step_one)

     previous_value = None
     counter = 0
     for i in step_one:
         if (counter % 3) == 0 and previous_value != None:
             print(previous_value)
             print(counter)
             step_one[counter - 1] = i
             step_one[counter] = previous_value

         previous_value = i
         counter += 1

     print(step_one)
     return step_one
