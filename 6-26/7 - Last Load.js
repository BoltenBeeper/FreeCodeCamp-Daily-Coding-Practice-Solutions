function findAverage(array) {
  const total = array.reduce((acc, cur) => {
    return acc + cur
  })

  const average = total / array.length

  return average
  
}

function lastLoadDate(scoops, usage) {
  const averageUsage = (findAverage(usage))
  const remainingDays = Math.floor(scoops / averageUsage)
  return remainingDays;
}

lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2])