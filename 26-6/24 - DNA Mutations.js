function detectMutations(strand1, strand2) {
  let diffIndexes = []
  
  for (let i = 0; i < strand1.length; i++) {
    if (strand1[i] !== strand2[i]) {
      diffIndexes.push(i)
    }
  }

  return diffIndexes;
}