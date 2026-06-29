function isValidIsbn13(str) {
  // Split the string into an array of all its characters, removing the dashes with .filter().
  let noDash = str.split("").filter((char) => {
    return char != "-"
  })
  console.log("Length is", noDash.length)
  
  // Check if there are no more of less than 13 digits. (no hyphens)
  if (noDash.length == 13) {

    // Check the character of every index and multiply ever other one by 3, adding them all with .reduce().
    noDash = noDash.reduce((total, j, i) => {
      console.log(total + " + " + j)

      if (i % 2 != 0) { // If not divisable by 2 (odd)
        return +total + (j * 3)
      }
      return +total + +j
    })

    console.log(noDash % 10 == 0)
    return noDash % 10 == 0
  }

  // Returning here ensures anything but a perfect match fails. Including unwanted characters.
  return false;
}

isValidIsbn13("978-0-13-595705-9")