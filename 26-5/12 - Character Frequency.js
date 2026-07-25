function getFrequency(str) {
  let letterCount = {}

  // Convert the string to an array, then check every character for the amount of times it appears in the string.
  str.split("").forEach((char) => {
    if (!(char in letterCount)) { // Ensure the object doesnt already have a key for the current letter.
      letterCount[char] = str.split(`${char}`).length - 1 // Count the occurences of the character by making an array without the characters and returning the length of what's in between the removed letters minus one.
    }
  })

  console.log(letterCount)
  return letterCount;
}

getFrequency("hello world")