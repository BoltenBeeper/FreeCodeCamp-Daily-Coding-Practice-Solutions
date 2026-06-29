function transpose(matrix) {
  console.log(matrix)
  let transposedMatrix = []
  // Given that each subarray in a matrix should always be the same length. repeat process for the length of the first subarray of the matrix.
  for (let i = 0; i < matrix[0].length; i++) {
    // Empty the row array every loop and add the nth element of the subarray for each iteration.
    let row = []
    // Each time the for loop repeats, the next element of each subarray in the forEach loop will be added.
    matrix.forEach((subArr) => {
      row.push(subArr[i])
    })
    transposedMatrix.push(row)
  }
  
  console.log(transposedMatrix)
  return transposedMatrix;
}

transpose(
  [
    [1, 2], 
    [3, 4], 
    [5, 6], 
    [7, 8]
  ]
)

// Expected Output:
// [
//   [1, 3, 5, 7],
//   [2, 4, 6, 8],
// ]