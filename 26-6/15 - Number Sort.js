function sortNumbers(str) {
  const numsArr = str.split(",").map(Number)
  const sorted = numsArr.sort((a, b) => {
    return a - b
  })

  console.log(sorted)
  return sorted;
}