let vowels = ["a", "e", "i", "o", "u"]

function multiplyCharacter(char, count) { // Returns any character repeated a specified amount of times.
  for (let i = 1; i < count; i++) {
    char += char[0].toLowerCase()
  }
  return char
}

function repeatVowels(str) {
  let count = 1
  let workingStr = str.split("") // Work with an array instead of original string to alter index values as well as not have to worry about changing index when adding characters.

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(workingStr[i].toLowerCase())) { // Find any lower case letter.
      workingStr[i] = multiplyCharacter(workingStr[i], count)
      count++
    }
  }

  return workingStr.join("")
}

console.log(repeatVowels("I like eating ice cream in Iceland"))