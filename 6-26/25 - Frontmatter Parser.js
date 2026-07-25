// Function to convert a string to a different data type depending on the string.
function strToAnyType(str) {
  let formattedStr = str // Default to the original string.

  try {
    formattedStr = JSON.parse(str) // Boolean
  } catch {
    if (!(Number.isNaN(+str))) {
      formattedStr = +str // Number
    }
  }

  if (str === "null") formattedStr = null // null

  console.log('From strToAnyType():\n' + 'Given = "' + str + '"\nOutput = ' + formattedStr + '\nType = ' + typeof(formattedStr) + '\n')
  return formattedStr
}

function parseFrontmatter(str) {
  let formattedObj = {}

  let lines = str.match(/^[^\r\n]+$/gm) // Separate the text into an array representing each line.

  for (let line of lines) {
    if (line == "---") continue // Ignore first and last lines (---)

    const [key, value] = line.split(": ") // Destructure key and value pars from each line.
    formattedObj[key] = strToAnyType(value) // Add an entry to the end of the formattedObj object with the key value pair.
  }
  
  console.log("\n", formattedObj)
  return formattedObj;
}

parseFrontmatter("---\ntitle: My Post\ndraft: false\nviews: 100\n---")