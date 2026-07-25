// Function to get the factorial of a number. (represented as n! in math)
function factorial(n) {
  let newN = n
  while (n > 2) {
    n --
    newN *= n
  }
  return newN
}

function getItineraryCount(stops) {
  let length = stops.length
  let validArgs = factorial(length) * (2 * length - 3)

  console.log(validArgs)
  return validArgs;
}

/**
 * Explanation:
 * I don't friggin know man, this math is beyond me rn and I need to sleep.
 * Looking up the exact sequence of 2, 18, 120, 840 brought me to an explanation involving factorial and the stars and bars theorum which is new to me:
 * 
 * The fixed meals block out three distinct "bins" or slots where the optional stops can be distributed:
 * Slot 1 (\(x_{1}\)): Between "breakfast" and "lunch". (Constraint: \(x_1 \geq 1\))
 * Slot 2 (\(x_{2}\)): Between "lunch" and "dinner". (Constraint: \(x_2 \geq 1\))
 * Slot 3 (\(x_{3}\)): After "dinner". (Constraint: \(0 \leq x_3 \leq 1\))
 * We must distribute the total \(n\) optional stops such that \(x_1 + x_2 + x_3 = n\). We can break this down into two mutually exclusive scenarios based on the strict condition of Slot 3:
 * Scenario A: No stops after dinner (\(x_3 = 0\))The remaining stops must fulfill \(x_1 + x_2 = n\). Using the stars and bars theorem with positive integers (\(x_1, x_2 \geq 1\)), the number of ways to split the positions is:\({n-1 \choose 2-1}=n-1\)
 * Scenario B: Exactly one stop after dinner (\(x_3 = 1\))
 * The remaining stops must fulfill \(x_1 + x_2 = n - 1\). Using the stars and bars theorem with positive integers (\(x_1, x_2 \geq 1\)), the number of ways to split the positions is:\({(n-1)-1 \choose 2-1}=n-2\)3. Combine the possibilities
 * Adding the valid structural patterns together gives the total number of ways to place the boundaries:\((n-1)+(n-2)=2n-3\)
 * Multiplying the structural slot arrangements by the permutation of the unique stops yields the final general formula:\(\text{Arrangements}=n!\times (2n-3)\)
*/

getItineraryCount(["library", "park", "arcade", "store"])