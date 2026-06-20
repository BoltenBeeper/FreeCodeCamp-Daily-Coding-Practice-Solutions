const formats = { 
  "HD": {rent: 3.99, buy: 12.99}, 
  "4K": {rent: 5.99, buy: 19.99} 
} 

const subPrices = { 
  "none": 0,
  "basic": .10,
  "premium": .25
} 

function getStreamingBill(cart, subscription) {
  let totalSum = cart.reduce((total, movie) => {
    const basePrice = formats[movie.format][movie.type]
    const discount = subPrices[subscription]
    const moviePrice = basePrice * (1 - discount)
    
    return total + moviePrice;
  }, 0);

  return `$${totalSum.toFixed(2)}`;
}

console.log(getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none"))