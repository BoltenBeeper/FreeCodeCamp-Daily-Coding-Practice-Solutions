// function findOffender(arr) {
//   let index = -1
//   arr.reduce((prev, num, i) => {
//     // console.log(prev, num, i)
//     if (index == -1) {
//       if (num < prev) {
//         // console.log("check ONE")
//         index = i
//       }
//     } else {
//       if (num > prev && index == i - 1) {
//         // console.log("check TWO")
//         --index
//       }
//     }
//     prev = num
//     console.log(prev)
//     return prev
    
//   }, -Infinity)

//   console.log("Answer:" , index)
//   return index
// }

// function findOffender(arr) {
//   let sorted = [...arr].sort((a, b) => a - b)
//   let index
//   console.log(arr)
//   console.log(sorted)
//   for (const i in arr) {
//     // console.log(i)
//     if (arr[i] !== sorted[i]) {
//       console.log(`FOUND: arr[${i}] = ${arr[i]},  sorted[${i}] = ${sorted[i]}`)
//       console.log("TEST:", arr[arr.indexOf(sorted[i]) - 1])
//       if (arr[arr.indexOf(sorted[i]) - 1] == sorted[i - 1]) {
//         index = i
//         console.log("true WINNDER:", index)
//       } else {
//         index = arr.indexOf(arr[i])
//         console.log("false WINNDER:", index)
//       }
//       break
//     }
//   }

//   return index
// }

function findOffender(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return arr[i + 1] < arr[i - 1]
      ? i + 1
      : i
    }
  }
  
  return -1
}

findOffender([1, 6, 2, 3, 4, 5])
console.log("GOAL: 1")
console.log("")
findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91])
console.log("GOAL: 6")

console.log(findOffender([1, 2]) == 0)