// Solution taken from Dave Cross on YouTube: https://www.youtube.com/watch?v=ilFX7fH9ges

function rgbToHex(rgb) {
  // Use regular expressions to check if the format of the given string matches that expected from the stadard. (rgb(###, ###, ###))
  if (!/rgb\(\d{1,3},\s?\d{1,3},\s?\d{1,3}\)/.test(rgb)) throw new Error("Not valid rgb")
  
  const rgbValues = rgb.match(/\d+/g) // Make an array of all number values from the passed rgb string.

  // Use a map function to convert each number value to a hexidecimal one by passing 16 into "".toString()""
  let hexcode = rgbValues.map((num) => {
    return (+num).toString(16).padStart(2, "0") // .padStart ensures that every hexidecimal value is at least 2 characters long and uses a 0 to fill the space.
  })

  console.log("#" + hexcode.join(""))
  return "#" + hexcode.join("");
}

rgbToHex("rgb(255, 2, 5)")