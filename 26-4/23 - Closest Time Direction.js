// Given two times, determine whether you can get from the first to the second faster by moving forward or backward.
// - Times are given in 24-hour format ("HH:MM")
// - The clock wraps around (23:59 goes to 00:00 when moving forward, and 00:00 goes to 23:59 when moving backwards)
// Return:
// - "forward" if moving forward is shorter
// - "backward" if moving backward is shorter
// - "equal" if both directions take the same amount of time

// Split times into easily mathable number values.
function splitTime(time) {
  time = time.split(":")
  let timeNum = Number(time[0] + time[1])
  return timeNum
}

// Find the difference in times, adjusting for looping numbers. (Anything under 0 loops back to hour: 24)
function timeDifference(time1, time2) {
  let newTime = time1 - time2
  while (newTime < 0) {
    newTime += 2400
  }
  console.log(`Time difference: ${newTime}`)
  return newTime
}

function getDirection(time1, time2) {
  // Split time format into a list of two values.
  time1 = splitTime(time1)
  time2 = splitTime(time2)

  // Find difference of times using previously defined function
  let forwardTime = timeDifference(time1, time2)
  let backwardTime = timeDifference(time2, time1)

  // Compare time differences, and return one of three values. ("forward", "backward", or "equal"))
  if (forwardTime > backwardTime) {
    console.log("forward")
    return "forward"
  } else if (forwardTime < backwardTime) {
    console.log("backward")
    return "backward"
  } else {
    console.log("equal")
    return "equal"
  }
}

getDirection("10:00", "12:00")
getDirection("11:00", "05:00")
getDirection("00:00", "12:00")