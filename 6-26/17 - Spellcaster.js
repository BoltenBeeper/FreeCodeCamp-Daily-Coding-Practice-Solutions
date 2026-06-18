let availableSpells = new Map([
  ["f", {spell: "Fire", catagory: "Destruction", bS: 3}],
  ["l", {spell: "Lightning", catagory: "Destruction", bS: 3}],
  ["i", {spell: "Ice", catagory: "Control", bS: 2}],
  ["w", {spell: "Wind", catagory: "Control", bS: 2}],
  ["h", {spell: "Heal", catagory: "Restoration", bS: 1}],
  ["s", {spell: "Shield", catagory: "Restoration", bS: 1}],
])

// Function to get the value of a given key from a map object.
function valueFromKey(given, map) {
  for (let [key, value] of map) {
    if (key == given) {
      return value
    }
  }
}

function cast(spells) {
  // Redefine spells as an array.
  spells = [...spells]
  // Default multiplier catagory to the first catagory in the array and initialize the multipleier at 1.
  let multiplierCat = valueFromKey(spells[0], availableSpells).catagory
  let multiplier = 1

  let totalScore = spells.reduce((total, char) => {
    // Find the spell's base score my matching the given character with it's unique character in the map object.
    const spell = valueFromKey(char, availableSpells)
    let score = spell.bS

    // Reset multiplier if spell catagory is the same as the last. Increment it if not.
    if (multiplierCat === spell.catagory) {
      multiplier = 1
    } else if (spell.catagory !== undefined) {
      multiplierCat = spell.catagory
      multiplier++
    }

    // Add the score multiplied by the multiplier to the total.
    return total + (score * multiplier)
  }, 0)

  console.log(totalScore)
  return totalScore;
}

cast("fihwl")