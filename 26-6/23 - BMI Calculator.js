function calculateBmi(weight, height) {
  const bMI = (weight / (height * height)) * 703
  return Number(bMI.toFixed(1));
}

console.log(calculateBmi(180, 70))