// Function that sums an array of numbers.
function sumOfNums(arr) {
  return arr.reduce((acc, cur) => {
    return +acc + +cur
  })
}

function getPizzasToOrder(hoursWorked) {
  // Give each a 1:3 hours worked to pizza slice ratio with a minumum of two slices per person.
  let slicesPerPerson = hoursWorked.map((hours) => {
    let slices = Math.ceil(hours / 3)
    return slices >= 2
    ? slices
    : 2
  })

  // Define the number of pizzas to order by the todal number of slices per person devided by 8, considering that just one extra slice constitutes a whole pizza.
  let pizzasToOrder = Math.ceil(sumOfNums(slicesPerPerson) / 8)

  console.log(pizzasToOrder)
  return pizzasToOrder;
}

getPizzasToOrder([8, 8, 8])