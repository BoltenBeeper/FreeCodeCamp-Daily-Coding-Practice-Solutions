// Many failed ways to do this\... Had to look it up.

// const coinValues = [1, 5, 10, 25]

// function subChange(coin, amounnt) {
//   let totalAdded = 0
//   let dimes = 0
//   let quarters = 0
//   while (amount > coin) {
//     amount -= coin
//     totalAdded
//   }
// }

// function exactChange(amount) {
//   let totalWays = 0
//   for (let coinValue of coinValues) {
//     console.log(coinValue)

//     if (coinValue > amount) continue
//     totalWays += Math.round(amount % coinValue + 1)
//   }

//   console.log(totalWays)
//   return totalWays;
// }

// function exactChange(amount) {
//   let totalWays = 1
//   // let dimeCounter = 0
//   // let quarterCounter = 0
//   // while (amount > 5) {
//   //   amount -= 5
//   //   totalAdded + 
//   // }

//   for (let subCount = 1; amount >= 5; subCount++) {
//     console.log("Amount: " + amount)
//     amount -= 5

//     totalWays += 1

//     if (subCount % 2 === 0) {
//       totalWays += 2
//       console.log("TEN")
//     }

//     if (subCount % 5 === 0) {
//       totalWays += 10
//       console.log("Twenty Five")
//     }
//   }

//   console.log("Total: " + totalWays)
//   return totalWays;
// }

// let totalWays = 0
// function exactChange(amount) {
//   if (amount >= 25) {
//     amount -= 25
//     totalWays++
//     exactChange(amount)

//     console.log("Amount: " + amount + ", TotalWays:" + totalWays)
//     return amount
//   }
  
//   if (amount >= 10) {
//     amount -= 10
//     totalWays++
//     exactChange(amount)

//     console.log("Amount: " + amount + ", TotalWays:" + totalWays)
//     return amount
//   }
  
//   if (amount >= 5) {
//     amount -= 5
//     totalWays++
//     exactChange(amount)

//     console.log("Amount: " + amount + ", TotalWays:" + totalWays)
//     return amount
//   }
  
//   if (amount >= 1) {
//     while (amount >= 1) amount -= 1
//     totalWays++
//     exactChange(amount)

//     console.log("Amount: " + amount + ", TotalWays:" + totalWays)
//     return amount
//   }

//   console.log(totalWays)
//   return totalWays
// }

function exactChange(amount) {
  const coins = [5, 10, 25]
  let arrangements = Array(amount + 1).fill(1)

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      arrangements[i] += arrangements[i - coin]
      console.log(arrangements)
    }
  }

  console.log(arrangements[amount])
  return arrangements[amount]
}

exactChange(9)