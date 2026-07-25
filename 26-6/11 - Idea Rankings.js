// Apply formula to given sub array (idea).
function expectedTime(idea) {
  let expected = ((idea[1] + 4 * idea[2] + idea[3]) / 6) * idea[0].length
  return expected
}

function analyzeIdeas(ideas) {
  // Use formula function to sort items in array by shortest estimated time to longest.
  ideas.sort((a, b) => {
    return expectedTime(a) - expectedTime(b)
  })

  // Use .reduce() to make a new array with just the names of the ideas.
  let rankedIdeas = ideas.reduce((acc, cur) => {
    acc.push(cur[0])
    return acc
  }, [])

  console.log(rankedIdeas)
  return rankedIdeas;
}

analyzeIdeas([["Add logging", 2, 5, 15], ["SEO optimization", 4, 8, 20], ["Fix bug", 1, 3, 5]])