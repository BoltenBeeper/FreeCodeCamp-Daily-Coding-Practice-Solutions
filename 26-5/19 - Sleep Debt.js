function sleepDebt(hoursSlept, targetHours) {
  // Define neededHours as a single number based on how many hours away from the target each number in the array is plus the target.
  let neededHours = hoursSlept.reduce((acc, cur) => {
    return acc + (targetHours - cur)
  }, targetHours)

  // If a positive number of hours is needed, return that number otherwise default to 0.
  console.log(neededHours)
  return neededHours >= 0
  ? neededHours
  : 0
}

sleepDebt([6, 6, 6, 6, 6, 6], 8)