// Get all evenly divisable numbers of a passed number.
function evenlyDivisableNums(num) {
  let denoms = []

  for (let i = 1; i <= (num / 2); i++) {
    if (num % i == 0) {
      denoms.push(i)
    }
  }
  denoms.push(num)

  return denoms
}

// Find the greatest denominator between the width and hieght with the evenlyDivisableNums() function made above.
function greatestDenominatorOf(num1, num2) {
  let num1Denoms = evenlyDivisableNums(+num1)
  let num2Denoms = evenlyDivisableNums(+num2)

  let greatestDenom
  for (const item of num1Denoms.reverse()) {
    if (num2Denoms.includes(item)) {
      greatestDenom = item
      break
    }
  }

  return greatestDenom || 1 // Default to 1 to avoid errors.
}

// Find the larger ratio then return a formatted version of it in the smallest ratio representation possible.
function getWiderAspectRatio(a, b) {
  // Split strings into separate numbers. (Still strings at this point, just separated.)
  const aNums = a.split("x")
  const bNums = b.split("x")

  let largestRatio = ""
  let greatestDenom = 1 // Default to 1 to avoid errors.
  if (+aNums[0] > +bNums[0]) {
    greatestDenom = greatestDenominatorOf(aNums[0], aNums[1])
    largestRatio = (aNums[0] / greatestDenom + ':' + aNums[1] / greatestDenom)
  } else {
    greatestDenom = greatestDenominatorOf(bNums[0], bNums[1])
    largestRatio = (bNums[0] / greatestDenom + ':' + bNums[1] / greatestDenom)
  }

  console.log(largestRatio)
  return largestRatio;
}

getWiderAspectRatio("1080x1350", "2048x1536")