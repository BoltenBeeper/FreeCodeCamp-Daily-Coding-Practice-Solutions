const chargeTable = {
  1: {bC: 4.99, lF: 3.99},
  3: {bC: 3.99, lF: 2.99},
  7: {bC: 2.99, lF: 0.99}
}

// Take two dates and compare them finding the days apart.
function comapreDates(date1, date2) { // Expects dates as strings in "YYYY-MM-DD" format.
  const dateArr1 = date1.split("-")
  let dayCount1 = +dateArr1[0] * 365
  dayCount1 += +dateArr1[1] * 30
  dayCount1 += +dateArr1[2]

  const dateArr2 = date2.split("-")
  let dayCount2 = +dateArr2[0] * 365
  dayCount2 += +dateArr2[1] * 30
  dayCount2 += +dateArr2[2]

  console.log("Days apart: " + Math.abs(dayCount1 - dayCount2))
  return Math.abs(dayCount1 - dayCount2)
}

function getRentalCost(rented, returned, tier) {
  const rentedDate = rented.split("T")[0]
  const returnedDate = returned.split("T")[0]

  let daysApart = comapreDates(rentedDate, returnedDate)
  // if (daysApart >= 1 && returned.split("T")[1].split(":")[0] > 12) daysApart++
  let totalMinutes = (daysApart * 1440)
  totalMinutes += +returned.split("T")[1].split(":")[0] * 60
  totalMinutes += +returned.split("T")[1].split(":")[1]
  console.log(totalMinutes)
  if (totalMinutes % 1440 > 720) {
    daysApart++
  }

  console.log(chargeTable[tier].lF)
  let totalCost = chargeTable[tier].bC
  while (daysApart > tier) {
    daysApart--
    totalCost += chargeTable[tier].lF
  }

  console.log(`$${totalCost.toFixed(2)}`)
  return `$${totalCost.toFixed(2)}`;
}

getRentalCost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7)