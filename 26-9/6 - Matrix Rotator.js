function rotatedPoint(coords, gridSize, angle = 90) { // Translates a point on a 0 indexed matrix (array of arrays) by a specified rotation.
  let [x, y] = coords
  let center = (gridSize - 1) / 2
  let sinDeg = Math.round(Math.sin(angle))
  let cosDeg = Math.round(Math.cos(angle))

  // Old formula for only 90 degrees.
  // let newX = center - (y - center)
  // let newY = center + (x - center)

  let newX = center + ((x - center) * cosDeg) - ((y - center) * sinDeg)
  let newY = center + ((x - center) * sinDeg) + ((y - center) * cosDeg)

  return [newX, newY]
}

function rotate(matrix) {
  let y = -1 // -1 because the start of the loop makes the index 0.
  let x = -1
  let rotatedPoints = []
  let rotatedMatrix = matrix // Copy of original matrix just to keep same size and dimensions.

  for (let row in matrix) { // Whole row
    y++
    x = -1
    for (let value of matrix[row]) { // Value at given coordinate (current value of x and y).
      x++
      let [newX, newY] = rotatedPoint([x, y], matrix.length)
      rotatedPoints.push([newX, newY, value])
    }
  }

  // Replace all values at any given index in the rotatedPoints array with newly translated values.
  for (let [col, row, value] of rotatedPoints) {
    rotatedMatrix[row][col] = value
  }

  return rotatedMatrix;
}

console.log(rotate([[1, 2], [3, 4]]))

 // Old code for rotation formula.

  // let adjustment = Math.floor(gridSize / 2)
  // let a = x
  // let b = y
  // console.log(adjustment)

  // if ((x - adjustment) < 0) {
  //   if ((y - adjustment) < 0) {
  //     [a, b] = [x, gridSize - 1 - y]
  //   } else if ((y - adjustment) > 0) {
  //     [a, b] = [gridSize - 1 - x, y]
  //   }
  // }
  
  // else if ((x - adjustment) > 0) {
  //   if ((y - adjustment) < 0) {
  //     [a, b] = [x, gridSize - 1 - y]
  //   }
  //   else if ((y - adjustment) > 0) {
  //     [a, b] = [gridSize - 1 - x, y]
  //   }
  // }