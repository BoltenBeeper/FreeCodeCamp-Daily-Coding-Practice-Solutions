function fibonacciSequence(startSequence, length) {
  if (length == 0) return [] // If length == 0 return empt function.

  let [prev, curr] = startSequence
  let fibSequence = [prev]

  for (let i = 0; i < length - 1; i++) { // -1 because we start with a number in the array already.
    fibSequence.push(curr)
    prev = curr
    curr = fibSequence[i] + prev
  }

  console.log(fibSequence)
  return fibSequence;
}

fibonacciSequence([0, 1], 20)