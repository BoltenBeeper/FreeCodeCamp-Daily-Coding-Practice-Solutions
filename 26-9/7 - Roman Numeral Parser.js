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

// Convert roman numeral to a number valueform by searching list for the highest number that can be subtracted and adding that to a string.

function parseRomanNumeral(numeral) {

  // Tried being smart and using the reducer function... Turns out that's actually dumb and I wasted so much time trying to make it work.
  // let offset = 0
  // let number = numeral.split("").reduce((acc, cur, i) => {
  //   console.log("new", acc, (cur + numeral[i + 1]), valueFromKey(cur, allNumerals))

  //   if (numeral[i + 1] === undefined || valueFromKey((cur + numeral[i + 1]), allNumerals) === undefined) {
  //     return acc + valueFromKey(cur, allNumerals)

  //   } else {
  //     if (valueFromKey(cur, allNumerals) < valueFromKey(numeral[i + 1], allNumerals)) {
  //       console.log("TEST", valueFromKey((cur + numeral[i + 1]), allNumerals))
  //       return acc + valueFromKey((cur + numeral[i + 1]), allNumerals)
  //     }
  //   }

  //   return "KILL"
  // }, 0)

  let total = 0

  for (let i = 0; i < numeral.length; i++) {

    if (numeral[i + 1] === undefined || valueFromKey((numeral[i] + numeral[i + 1]), allNumerals) === undefined) {
      total += valueFromKey(numeral[i], allNumerals)

    } else {
      if (valueFromKey(numeral[i], allNumerals) < valueFromKey(numeral[i + 1], allNumerals)) {
        total += valueFromKey((numeral[i] + numeral[i + 1]), allNumerals)
        i++
      }
    }
    
  }

  return total
}

console.log(parseRomanNumeral("XCIX"))