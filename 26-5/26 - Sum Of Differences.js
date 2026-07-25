// Add all elements in an array of numbers.
function sumOfArray(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur
  })
}

function sumOfDifferences(arr) {
  // Create a new array of just the differences in the numbers of the original array.
  let toAdd = arr.reduce((acc, cur, i) => {
    return arr[i + 1]
    ? [...acc, (arr[i + 1] - cur)]
    : acc
  }, [])

  const diffSum = sumOfArray(toAdd)
  
  console.log(diffSum)
  return diffSum;
}

sumOfDifferences([1, 3, 4])