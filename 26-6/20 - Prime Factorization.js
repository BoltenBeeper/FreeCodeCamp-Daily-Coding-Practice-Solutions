// BAD FIRST ATTEMPT:

// Function that multiplies an array of numbers.
// function productOfNums(arr) {
//   return arr.reduce((acc, cur) => {
//     return +acc * +cur
//   })
// }

// function isPrime(n) {
//   if (n === 1 || n === 2) return true
//   if (n % 2 === 0 ) return false

//   const limit = Math.sqrt(n)
//   for (let i = 3; i <= limit; i++) {
//     if (n % i === 0) return false
//   }

//   return true
// }

// function incrementPrime(n) {
//   n++
//   while (isPrime(n) === false) n++
//   return n
// }

// function primeFactorization(n) {
//   if (isPrime(n)) return [n]

//   let numArr = [n]
//   let curPrime = 2
//   while (productOfNums(numArr) !== n) {
//     if (productOfNums(numArr) > n) numArr.pop
//     if (productOfNums(numArr) < n) {
//       if (productOfNums([...numArr, curPrime]) <= n) {
//         numArr.push(curPrime)
//       }
//     }
//   }

//   return numArr;
// }

function primeFactorization(n) {
  if (n <= 1) throw new Error("Not prime.")

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return [i, ...primeFactorization(n / i)]
    }
  }

  return [n];
}

console.log(primeFactorization(20))