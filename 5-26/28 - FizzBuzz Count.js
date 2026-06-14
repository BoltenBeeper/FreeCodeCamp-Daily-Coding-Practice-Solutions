function fizzBuzzCount(start, end) {
  let fizzes = 0
  let buzzes = 0
  
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0) fizzes++
    if (i % 5 === 0) buzzes++
  }

  console.log({fizz: fizzes, buzz: buzzes})
  return {fizz: fizzes, buzz: buzzes};
}

fizzBuzzCount(24, 100)