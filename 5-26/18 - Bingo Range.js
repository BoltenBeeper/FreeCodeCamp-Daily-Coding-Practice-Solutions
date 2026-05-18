// Make an object that can be iterated through (a map) and assign all letters and their respective ranges.
const bingoRange = new Map([
["B", "1-15"],
["I", "16-30"],
["N", "31-45"],
["G", "46-60"],
["O", "61-75"]
])

function getBingoRange(letter) {
  // Iterate through the bingoRange map to find a letter that matches the one passed.
  for (const [option, nums] of bingoRange) {
    if (letter == option) {
      // If a matching letter is found in the map, split the rnumber range into separate numbers.
      const sepNums = nums.split("-")
      let range = sepNums[1] - (sepNums[0] - 1) // Find the range of nums (how many numbers in total between the first and second number)
      let rangeArr = []

      // Add a number starting from the first number in the nums range and count up until range is reached.
      for (let i = 0; i < range; i++) {
        rangeArr.push(i + +sepNums[0])
      }

      console.log(rangeArr)
      return rangeArr
    }
  }
  console.log("Not a valid BINGO letter.")
  return "Not a valid BINGO letter.";
}

getBingoRange("B")