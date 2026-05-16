// NOTE: Attempt 1: I REALLY overthought this solution. But then again, there was a lot that I learned from trying this solution.

function parseUrlQuery(url) {
  const queryData = {}
  // Remove everything before the "?" in the original url string. (Split at the "?" then keep only the second half.)
  url = url.split("?")[1]
  url = url.split("&")

  // Iterate through each query, separating keys and values by "=". Then both to an object.
  url.forEach((element) => {
    const [key, value] = element.split("=")
    queryData[key] = value
  })

  console.log(queryData)
  return queryData;
}

parseUrlQuery("https://example.com/search?name=Alice&age=30")

// NOTE: Old solution that was way over complicated.
  // url = url.split("")
  // let queryIndex = 0

  // url.forEach((char, i) => {
  //   if (char == "?") {
  //     queryIndex = i + 1
  //   }
  // })
  // url = url.slice(queryIndex).join("").split("&")

// let key = ""
  // let value = ""
  // let editingKey = true
  // for (const char of url) {
  //   if (editingKey) {
  //     key += char
  //   } else if (!editingKey) {
  //     value += char
  //   }
  //   if (char == "&") {
  //     editingKey = !editingKey
  //   }
  // }


// NOTE: MUCH better solution (Courtesy of Dave Cross on YouTube):
function parseUrlQuery(url) {
  const params = url
    .split("?")
    .at(1)
    .split("&")
    .reduce((accumulator, element) => {
      const [key, value] = element.split("=")
      return {
        ...accumulator,
        [key]: value
      }
    }, {})
  console.log(params)
  return params;
}

parseUrlQuery("https://example.com/search?name=Alice&age=30")