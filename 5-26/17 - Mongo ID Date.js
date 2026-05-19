// I've broken this function into multiple parts with more variables than necessary to better breakdown the process.
function mongoIdToDate(id) {
  // Reduce the id to just the first 8 characters. I use slice for readability but another way to do this quickly is with a for loop:
  // let firstChars = ""
  // for (let i = 0; i < 8; i++) {
  //   firstChars += id[i]
  // }
  const firstChars = id.slice(0, 8)

  // "parseInt" can actually take more than one argument to turn a string to a number. In this case, pass the number 16 to let the function know we're using base-16.
  const decimalTime = parseInt(firstChars, 16)

  // Create a new standard JS Date object with the "new Date" syntax, multiplying the decimal time by 1000 to add three decimal places because ISO strings assume three more decimal places at the end than JS Date objects. Then use the built in ".toISOString" function for the conversion.
  let isoDate = new Date(decimalTime * 1000).toISOString()

  console.log(isoDate)
  return isoDate;
}

mongoIdToDate("6a094b50bcf86cd799439011")