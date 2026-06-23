// Use a map dataset to iterate through it.
let leetVariants = new Map([
  ["a", 4],
  ["e", 3],
  ["g", 9],
  ["i", 1],
  ["l", 1],
  ["o", 0],
  ["s", 5],
  ["t", 7],
])

function makeLeet(str) {
  // Iterate through the map dictionary of all letter varients and replace letters with their counterparts.
  let translatedSentence = str
  for (let [letter, number] of leetVariants) {
    translatedSentence = translatedSentence.replaceAll(letter, number)
  }

  console.log(translatedSentence)
  return translatedSentence
}

makeLeet("cool")