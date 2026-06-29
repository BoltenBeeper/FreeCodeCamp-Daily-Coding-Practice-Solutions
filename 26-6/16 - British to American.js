// Use a map dataset to iterate through it.
let englishVarients = new Map([
  ["colour", "color"],
  ["flavour", "flavor"],
  ["honour", "honor"],
  ["neighbour", "neighbor"],
  ["labour", "labor"],
  ["humour", "humor"],
  ["centre", "center"],
  ["fibre", "fiber"],
  ["defence", "defense"],
  ["offence", "offense"],
  ["organise", "organize"],
  ["recognise", "recognize"],
  ["analyse", "analyze"],
])

function britishToAmerican(sentence) {

  // Iterate through the map dictionary of all word varients and replace british words with their counterparts.
  let translatedSentence = sentence
  for (let [british, american] of englishVarients) {
    translatedSentence = translatedSentence.replace(british, american)
  }

  console.log(translatedSentence)
  return translatedSentence;
;
}

britishToAmerican("I love the colour blue.")