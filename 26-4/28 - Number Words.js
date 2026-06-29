let oneTeens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", ]

function getNumberWords(n) {
  // If the given number is under 20, directly pull the translated version from the "oneTeens" list.
  if (n < 20) {
    console.log(oneTeens[n])
    return oneTeens[n];
  } else {
    n = String(n)
    if (n[1] == 0) {
      console.log(tens[n[0] - 2])
      return tens[n[0] - 2]
    }
    console.log(`${tens[n[0] - 2]}-${oneTeens[n[1]]}`)
    return `${tens[n[0] - 2]}-${oneTeens[n[1]]}`
  }
}

getNumberWords(67)