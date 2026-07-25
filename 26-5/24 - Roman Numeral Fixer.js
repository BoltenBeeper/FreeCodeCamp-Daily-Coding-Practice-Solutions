// Make a map object with all possible roman numerals including subtracting pairs.
const allNumerals = new Map([
["M", 1000],
["CM", 900],
["D", 500],
["CD", 400],
["C", 100],
["XC", 90],
["L", 50],
["XL", 40],
["X", 10],
["IX", 9],
["V", 5],
["IV", 4],
["I", 1]
])

// Function to get the value of a given key from a map object.
function valueFromKey(given, map) {
  for (let [key, value] of map) {
    if (key == given) {
      return value
    }
  }
}

// Convert a number value to its roman numeral form by searching list for the highest number that can be subtracted and adding that to a string.
function toRomanNumerals(num) {
  let rNTranslation = ""
  for (let [numeral, value] of allNumerals) {
    while (num >= value) {
      num -= value
      rNTranslation += numeral
    }
  }

  return rNTranslation
}

// Match each string character to it's roman numeral counterpart and add it's respective ammount to a total.
function fixNumerals(str) {
  let addedTotal = str.split("").reduce((acc, cur) => {
    return acc + valueFromKey(cur, allNumerals)
  }, 0)
  
  console.log(toRomanNumerals(addedTotal))
  return toRomanNumerals(addedTotal);
}

fixNumerals("XIIIII")