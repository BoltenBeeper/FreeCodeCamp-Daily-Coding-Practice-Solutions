function zipStrings(a, b) {
  let combinedString = ""
  // For loop as many times as the largest string needs.
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    // Only add a character if the string another to add, accounting for adding the rest of the remaining string.
    if (i < a.length) {
      combinedString += a[i]
    }
    if (i < b.length) {
      combinedString += b[i]
    }
  }

  console.log(combinedString)
  return combinedString;
}

zipStrings("abc", "123")