// This module is COMPLETE

function substitution(input, alphabet, encode = true) {
  // Declare origional alphabet for reference
  const origionalAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let returnString = [];
  // Ensure that input is uniform
  input = input.toLowerCase();
  // Check to ensure there are no duplicates
  let check = true;
  let checkDuplicates = alphabet.split("");
  checkDuplicates = checkDuplicates.sort((letterA, letterB) =>
    letterA < letterB ? 1 : -1
  );
  checkDuplicates.sort((letterA, letterB) => {
    if (letterA === letterB) check = false;
  });
  // Run 'if' block to encode, 'else' block to decode
  if (check && encode && alphabet.length === 26) {
    // Create translation dictionary
    let dictionary = {};
    origionalAlphabet.forEach((letter, index) => {
      dictionary[letter] = alphabet[index];
    });
    // Translate the input back
    [...input].forEach((letter) => {
      if (letter === " ") {
        returnString.push(" ");
      } else {
        returnString.push(dictionary[letter]);
      }
    });
    // Return tranlated string
    returnString = returnString.join("");
    return returnString;
  } else if (check && encode == false && alphabet.length === 26) {
    // Create translation dictionary
    let inputAlphabet = alphabet.split("");
    let dictionary = {};
    inputAlphabet.forEach((letter, index) => {
      dictionary[letter] = origionalAlphabet[index];
    });
    // Translate the input back
    [...input].forEach((letter) => {
      if (letter === " ") {
        returnString.push(" ");
      } else {
        returnString.push(dictionary[letter]);
      }
    });
    // Return tranlated string
    returnString = returnString.join("");
    return returnString;
  } else {
    return false;
  }
}


module.exports = substitution;
