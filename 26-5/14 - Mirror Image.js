const symmetricChars = ['W', 'T', 'Y', 'U', 'I', 'O', 'H', 'A', 'X', 'V', 'M', 'w', 'o', 'x', 'v', '0', '8', '=', '+', ':', '|', '-', '_', '*', '^', '!', '.', ' ', '[',']', '{','}', '<','>', 'b','d', 'p','q', '(',')']
const mirrorChars = [
['[',']'],
['{','}'],
['<','>'],
['b','d'],
['p','q'],
['(',')']
]

function isMirrorImage(str1, str2) {
  let allChars = [...new Set(str1 + str2)]
  console.log(allChars)

  // for (const char of allChars) {
  //   if (!(symmetricChars.includes(char))) {
  //     console.log("Test 1: FAIL")
  //     return false
  //   }
  // }

  let validChars = allChars.some((char) => { return symmetricChars.includes(char)})

  if (validChars) {
    
  }

  console.log("End:", false)
  return false;
}

isMirrorImage(
"a8", "")