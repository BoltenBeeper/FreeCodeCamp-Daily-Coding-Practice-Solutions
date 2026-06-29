function iBeforeE(sentence) {
  // Check if "ei" or "ie" are even included in the sentence.
  // Completely unnecessary use of regex but honestly I just wanted the practice.
  if (!(/ei/.test(sentence) || /ie/.test(sentence))) {
    console.log("Nothing to correct.")
    return "Nothing to correct."
  }

  let corrected = [...sentence] // Make sentence an array so that characters chan be altered. (Swapped in this case)
  console.log(sentence)

  for (let i = 0; i < corrected.length; i++) {

    // If a word contains "ei" not preceded by "c", replace it with "ie".
    if (corrected[i] == "e"
    && corrected[i + 1] == "i"
    && corrected[i - 1] != "c") {
      [corrected[i], corrected[i + 1]] = [corrected[i + 1], corrected[i]]
    }
    
    // If a word contains "ie" preceded by "c", replace it with "ei".
    else if (corrected[i] == "i"
    && corrected[i + 1] == "e"
    && corrected[i - 1] == "c") {
      [corrected[i], corrected[i + 1]] = [corrected[i + 1], corrected[i]]
    }
  }

  // Turn word array back into a string and submit.
  corrected = corrected.join("")
  console.log(corrected)
  return corrected;
}

iBeforeE("beleive")