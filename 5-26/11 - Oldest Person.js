function getOldest(people) {
  // Find oldest age in data set.
  let oldestAge = people.reduce((biggest, person) => {
    return person.age > biggest ? person.age : biggest
  }, 0)
  console.log("Oldest age is", oldestAge)

  // Make a new list of all new people with the same age as the oldest in the list.
  let oldestPeople = []
  people.forEach((person) => {
    if (person.age == oldestAge) {
      oldestPeople.push(person.name)
    }
  })
  
  console.log(oldestPeople)
  return oldestPeople;
}

getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }])