const cityOffsets = {
  "Los Angeles": -8,
  "New York": -5,
  "London": 0,
  "Istanbul": 3,
  "Dubai": 4,
  "Hong Kong": 8,
  "Tokyo": 9
}

const directionMultipliers = {
  "east": 1.5,
  "west": 1
}

function getJetLagHours(departureCity, arrivalCity, flightDuration, direction) {

  // Find timezone difference by subtracting departure and arrival city's UTC offsets.
  const timezoneDifference = Math.abs(cityOffsets[departureCity] - cityOffsets[arrivalCity])

  // Find the direction multiplier based on chart above.
  const directionMultiplier = directionMultipliers[direction]

  // Use given formula to find the missing jet lag hours.
  const jetLageHours = timezoneDifference + (flightDuration * 0.1) * directionMultiplier

  console.log("FINAL ANSWER:", jetLageHours)
  return jetLageHours;
}

getJetLagHours("Istanbul", "Hong Kong", 10, "east")