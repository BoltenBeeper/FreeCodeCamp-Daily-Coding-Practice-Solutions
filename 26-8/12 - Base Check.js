const possibleDigits = "0123456789abcdefghijklmnopqrstuvwxyz"

function isValidNumber(n, base) {
  const validBaseSet = possibleDigits.slice(0, base)
  console.log(validBaseSet)
  
  for (let d of n.toLowerCase()) {
    if (!validBaseSet.includes(d)) return false
  }

  return true
}

console.log(isValidNumber("Z", 36))