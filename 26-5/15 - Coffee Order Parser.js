const menuItems = {
"cold brew":	4.50,
"oat latte":	5.00,
"cappuccino":	4.75,
"espresso":	3.00,
"vanilla syrup":	0.75,
"caramel drizzle":	0.60,
"extra shot":	0.50,
"oat milk":	0.75,
"cream":	0.75}

const punctuation = [".", ",", "!", "?", ":", ";", "-", "_"]

// Because using .split("") for sentences coubles punctuation marks with words, remove any lingering in any word being looked at.
function removePunctuation(word) {
  console.log("removePunctuation (first):", word)
  return word.split("").filter((char) =>{
    if (!(punctuation.includes(char))) {
      return char
    }
  }).join("")
}

// This function just exists for readability. Formats any given number as a string ensuring two decimal points.
function formatPrice(number) {
  return number.toFixed(2)
}

function formatCoffeeOrder(order) {
  let totalPrice = 0
  let requestedItems = []
  let orderItem = ""

  // Split sentence into an array of words and remove any punctuation.
  for (const word of order.split(" ")) {
    let filteredWord = removePunctuation(word)

    // Concatenate a string holding any checked words with the current word.
    if (orderItem != "") {
      orderItem += ` ${filteredWord}`
    } else {
      orderItem += filteredWord
    }
    
    // Check menu items if the currently checked string is a real option.
    if (menuItems[orderItem] != undefined) {
      totalPrice += menuItems[orderItem]
      requestedItems.push(orderItem)
      orderItem = ""
      continue;
    }

  // If the curent word in the loop makes up at least part of any of the menu items, dont reset the orderItem variable. Otherwise reset it. This allows for checking multiple words as some menu items are. Also accounts for flukes (ex.: A person making the order says "extra sweet", save the word extra at first then reset the checked string if the word that follows isn't a menu item.)
  let hasPartOfItem = false
    for (let key in menuItems) {
      if ((key.split(" ").includes(orderItem))) {
        hasPartOfItem = true
        break
      }
    }
    if (!hasPartOfItem) orderItem = ""
  }

  // Order string of order items in order they appear in the menuItems object.
  let itemsString = ""
  for (let key in menuItems) {
    if (requestedItems.includes(key)) {
      if (itemsString != "") {
        itemsString += ` + ${key}`
      } else {
        itemsString += key
      }
    }
  }

  const formattedOrder = `${itemsString}: $${formatPrice(totalPrice)}`

  console.log(formattedOrder)
  return formattedOrder;
}

formatCoffeeOrder("Just an espresso please.")

// MUCH better, cleaner, and faster solution using a map and iterating through that instead of an object:

// const ingredients = new Map([
// ["cold brew", 4.50],
// ["oat latte", 5.00],
// ["cappuccino", 4.75],
// ["espresso", 3.00],
// ["vanilla syrup", 0.75],
// ["caramel drizzle", 0.60],
// ["extra shot", 0.50],
// ["oat milk", 0.75],
// ["cream", 0.75],
// ])

// function formatCoffeeOrder(order) {
//   let items = []
//   let total = 0

//   for (const [item, price] of ingredients) {
//     if (order.includes(item)) {
//       items.push(item)
//       total += price
//     }
//   }

//   const formattedOrder = `${items.join(" + ")}: \$${total.toFixed(2)}`

//   console.log(formattedOrder)
//   return (formattedOrder);
// }

// formatCoffeeOrder("I'd like an oat latte with vanilla syrup and an extra shot please.")