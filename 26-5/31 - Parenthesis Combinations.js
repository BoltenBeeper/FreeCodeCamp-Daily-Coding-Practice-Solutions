// Function to get the factorial of a number. (represented as n! in math)
function factorial(n) {
  let newN = n
  while (n > 2) {
    n --
    newN *= n
  }
  return newN
}

// Function to apply Catalan formula to a number.
function catalan(n) {
  return factorial(2 * n) / (factorial(n + 1) * factorial(n))
}

// Visualizing all possible combinations for the first few possible numbers shows a pattern reflected in the Catalan formula.
// Apply Catalan formula to the given number and round it out as large numbers can break in JavaScript.
function getCombinations(n) {
  let res = Math.round(catalan(n))
  console.log(res)
  return res;
}

getCombinations(13)