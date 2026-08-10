function determineSize(isLargeText) {
  return isLargeText
  ? [ // Normal Text
  [3.0, "Fail"], [4.5, "AA"], [Infinity, "AAA"]
]
  : [ // Large Text
  [4.5, "Fail"], [7.0, "AA"], [Infinity, "AAA"]
]
}

function getContrastRating(ratio, isLargeText) {
  let chart = determineSize(isLargeText)
  console.log("Chart found:", chart)
  
  for (let maxSize of chart) {
    if (ratio < maxSize[0]) {
      console.log(maxSize[1])
      return maxSize[1];
    }
  }

  console.log("Fail")
  return "Fail";
}

getContrastRating("4.2", false)