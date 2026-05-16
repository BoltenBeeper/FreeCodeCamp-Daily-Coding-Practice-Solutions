// Given an array of numbers and a target number, return the first subset of two or more numbers that adds up to the target.
// - The "first" subset is the one whose elements have the lowest possible indices, prioritizing the earliest index first.
// - Each number in the array may only be used once.
// - If no valid subset exists, return "Sum not found".
// Return the matching numbers as an array in the order they appear in the original array.

// HAD TO WATCH A VIDEO ABOUT THE SOLUTION
// vvv CHART I WAS MAKING TO FOLLOW THE STEPS OF THE PROCESS TO UNDERSTAND IT vvv

// found = findFirstSubset(   arr,   target, current)
// found = findFirstSubset([3, 5, 7],  5,      [1]  )
//   |
//   v
// found = findFirstSubset( arr,  target, current) --> return findFirstSubset(arr, target, current)  ^
// found = findFirstSubset([5, 7],  2,    [1, 3] ) --> return findFirstSubset([7],    5,    [1] ) null --> arr.length() == 0
//   |
//   v
// found = findFirstSubset(arr, target, current ) --> return findFirstSubset(arr, target, current)  ^
// found = findFirstSubset([7],   -3,  [1, 3, 5]) --> return findFirstSubset([],    2,    [1, 3] ) null --> arr.length() == 0
//   |
//   v
// found = findFirstSubset(arr, target,   current  )  ^
// found = findFirstSubset([],   -10,  [1, 3, 5, 7]) null --> arr.length() == 0



// Solution is someone else's from this video: https://www.youtube.com/watch?v=w1oG62LDXmg&t=25s
// I recreated it from scratch and from memory after watching it once and researching everything I was missing as well as building that chart

function findFirstSubset(arr, target, current = []) {
  if (target === 0 && current.length >= 2) return current
  if (arr.length === 0) return null

  const found = findFirstSubset(
    arr.slice(1),
    target - arr[0],
    [...current, arr[0]]
    )
    if (found) return found

    return findFirstSubset(
      arr.slice(1),
      target,
      current
    )
}

function findSum(arr, target) {
  const subset = findFirstSubset(arr, target)

  console.log(subset ?? "Sum not found")
  return subset ?? "Sum not found";
}

findSum([1, 3, 5, 7], 6)