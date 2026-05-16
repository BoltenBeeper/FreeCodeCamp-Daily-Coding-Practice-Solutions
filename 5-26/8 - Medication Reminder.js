// !!! STILL WORKING ON SOLUTION !!!

// let deployxitrinTimes = ["0800", "1600"]
// let debuggamanizole = ["0700", "1300", "2100"]

function toSimpleTime(simpleTime) {
  console.log(simpleTime.split(":")
    .at(0))
  return [simpleTime.split(":")
    .at(0), simpleTime.split(":")
    .at(1)]
}

let medSchedule = {"0700": "debuggamanizole", "0800": "deployxitrin", "1300": "debuggamanizole", "1600": "debuggamanizole", "2100": "deployxitrin"}

function findclosestTime(simpleTime, currentTime) {
    for (const i in medSchedule) {
      if (i > currentTime) {
      console.log(medSchedule[i])
      return medSchedule[i]
      } else {
        console.log(medSchedule[0])
        return medSchedule[0]
      }
    }
}

function medicationReminder(medications, currentTime) {
  let [currentHour, currentMinute] = toSimpleTime(currentTime)
  console.log(currentHour + currentMinute)
  // let closestTime = 0
  medications.forEach((arr) => {
    const lastTaken = arr
    const hour = lastTaken[1]
    .split(":")
    .at(0)
    const minute = lastTaken[1]
    .split(":")
    .at(1)
    const simpleTime = hour + minute
    findclosestTime(simpleTime, currentTime)
    // if ((simpleTime - currentTime) > 0 && simpleTime < closestTime) {
    //   closestTime = simpleTime
    // }

    // console.log(currentTime)
  })
  const medication = medications[0][0]
  // `${parseInt(hour)}h ${parseInt(minute)}m`
  // formattedTime(medications[0][1])
  // console.log(`${medication} in ${formattedTime(medications[0][1])}`)
  return medications;
}

medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "10:00"]], "11:00")

// SECOND ATTEMPT:

let fixedMedSchedule = [
  {name: "Debuggamanizole", time: "07:00"},
  {name: "Deployxitrin", time: "08:00"},
  {name: "Debuggamanizole", time: "13:00"},
  {name: "Deployxitrin", time: "16:00"},
  {name: "Debuggamanizole", time: "21:00"}
];

// Searches medicine schedule to find the next 
function findclosestTime(currentTime) {

    for (const [medicine, scheduledTime] of fixedMedSchedule) {

      console.log(parseInt(scheduledTime))
    }
}

function medicationReminder(medications, currentTime) {

  findclosestTime(currentTime)
  const medication = medications[0][0]
  return medications;
}

medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "10:00"]], "5:00")

    // if ((simpleTime - currentTime) > 0 && simpleTime < closestTime) {
    //   closestTime = simpleTime
    // }

  // `${parseInt(hour)}h ${parseInt(minute)}m`
  // formattedTime(medications[0][1])
  // console.log(`${medication} in ${formattedTime(medications[0][1])}`)