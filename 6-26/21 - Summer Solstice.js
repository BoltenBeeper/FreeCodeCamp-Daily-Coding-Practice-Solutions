// Round number to nearest even number.
function roundToNearestEven(num) {
  const remainder = num % 2
  if (remainder >= 1) {
    return num + (2 - remainder)
  } else {
    return num - remainder
  }
}

function getDaytimeHours(latitude) {
  let hoursInEmoji = []
  let totalHours = 24

  // Use given formula to find how many hours of daytime there will be. Then, round to nearest whole number.
  let dayHours = 12 + (latitude / 90) * 12
  dayHours = roundToNearestEven(dayHours)

  // Add as many sun emojis to the array as there are days.
  for (let i = 1; i <= dayHours; i++) {
    hoursInEmoji.push("☀️")
    totalHours--
  }
  // Pad corners with moon emojis for remaining hours.
  for (let i = 0; i < totalHours / 2; i++) {
    hoursInEmoji.push("🌑")
    hoursInEmoji = ["🌑", ...hoursInEmoji]
  }

  return hoursInEmoji.join("");
}

getDaytimeHours(0)