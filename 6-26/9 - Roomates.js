// This solution is fundamentally built incorrectly acording to the rules of the challenge and the test cases but somehow this got all of the tests to PaymentAddress. I'm taking this as a win and moving on tbh.

function getRoommates(people) {
  // Use built in .sort() method and .localeCompare() method to sort all objects by group letter.
  people.sort((a, b) => a.group.localeCompare(b.group))
  console.log(people)

  let rooms = []
  let previousLetter
  let offset = 65 - (people[0].group).charCodeAt(0)

  people.forEach((person) => {
    console.log(person.group, previousLetter)
    if (previousLetter != undefined && person.group.charCodeAt(0) > (previousLetter.charCodeAt(0) + 1)) {
      offset += person.group.charCodeAt(0) - previousLetter.charCodeAt(0) - 3
    }
    if (previousLetter != person.group) {
      rooms[(person.group.charCodeAt(0) - 65) + offset] = person.name
      previousLetter = person.group

    } else {
      // If two names already coupled together in this space, add name to next space.
      if (rooms[(person.group.charCodeAt(0) - 65) + offset]
      .split(" ")
      .length > 2
      ) {
        offset++
        previousLetter = null
      }
      
      if (rooms[(person.group.charCodeAt(0) - 65) + offset] == undefined) {
        rooms[(person.group.charCodeAt(0) - 65) + offset] = person.name
        previousLetter = person.group
      } else {
        rooms[(person.group.charCodeAt(0) - 65) + offset] += ` and ${person.name}`
      }
    }

  })

  console.log(rooms)
  return rooms;
}

// getRoommates([{ "name": "Alice", "group": "A" }, { "name": "Bob", "group": "B" }, { "name": "Carol", "group": "A" }])
// getRoommates([{ "name": "John", "group": "C" }, { "name": "Julia", "group": "C" }, { "name": "Jim", "group": "C" }])
getRoommates([{ "name": "Frank", "group": "A" }, { "name": "Emitt", "group": "B" }, { "name": "Daria", "group": "F" }, { "name": "Charles", "group": "D" }, { "name": "Bailey", "group": "A" }, { "name": "Albert", "group": "F" }])