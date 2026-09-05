function isPangram(sentence, letters) {

  // Check if any characters from the sentence AREN'T in the letters string. If so return false early.
  let sentenceRegex = new RegExp(`[${sentence.toLowerCase()}]`, "g")
  let remainingChars = letters.toLowerCase().replace(sentenceRegex, "")
  if (remainingChars.length > 0) return false

  // Test what letters are left after using regex to remove all letters that appear in both strings.
  let lettersRegex = new RegExp(`[${letters}]`, "g")
  remainingChars = sentence.toLowerCase().replace(lettersRegex, "")
  return !(/\w/.test(remainingChars))
}

console.log(isPangram("Hello World!", "helowrd"))