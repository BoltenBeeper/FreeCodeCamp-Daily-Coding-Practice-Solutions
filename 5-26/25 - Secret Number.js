// Literally just a way of writing exactly what the prompt says. Return a different string depending on the condition.
function guessNumber(secret, guess) {
  return guess < secret ? "higher"
  : guess > secret ? "lower"
  : "you got it!"
}