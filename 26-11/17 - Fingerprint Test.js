function isMatch(fingerprintA, fingerprintB) {
  // If lengths are not the same, end the function before any logic and return false.
  if (fingerprintA.length !== fingerprintB.length) return false

  let differingChars = []

  for (let i = 0; i < fingerprintA.length; i++) {

    // If the character is different in the same index on both strings, add it to the array of differing characters.
    if (fingerprintA[i] !== fingerprintB[i]) {
      differingChars.push(fingerprintA[i])
      console.log("Anomaly found:", differingChars)
    }
    
  }

  // True if number of differing characters does not exceed 10% of figngerprint string length. False otherwise.
  return differingChars.length <= (fingerprintA.length / 10) ? true : false;
}

console.log(isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog"))
console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"))