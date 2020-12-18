// This module is COMPLETE

function caesar(input, shift, encode = true) {
  if (!shift || !input) return false;
  if (shift > 25 || shift < -25) return false;
  let returnArray = [];
  // Declare alphabet
  const alphabet = [
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
  const charAllowed = [
    " ",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    ",",
    ".",
    "?",
    "<",
    ">",
    "/",
    "-",
    "+",
    "=",
    "_",
    "'",
    '"',
  ];
  let shiftedAlpha = [];
  // Split input into an array for modification
  input = input.toLowerCase();
  let inputArray = input.split("");
  // Create shifted alphabet FALSE
  if (!encode) {
    alphabet.forEach((letter, index) => {
      if (index >= 26 - shift) {
        shiftedAlpha[index - 26 + shift] = letter;
      } else {
        shiftedAlpha[index + shift] = letter;
      }
    });
  }
  // Create shifted alphabet TRUE
  if (encode) {
    alphabet.reverse();
    alphabet.forEach((letter, index) => {
      if (index >= 26 - shift) {
        shiftedAlpha[index - 26 + shift] = letter;
      } else {
        shiftedAlpha[index + shift] = letter;
      }
    });
    alphabet.reverse();
    shiftedAlpha.reverse();
  }
  // Order the letters correctly in new array;
  inputArray.forEach((alpha) => {
    charAllowed.forEach((char) => {
      if (char == alpha) {
        returnArray.push(char);
      }
    });
    alphabet.forEach((letter, index) => {
      if (letter == alpha) {
        returnArray.push(shiftedAlpha[index]);
      }
    });
  });
  // Join and return string
  returnArray = returnArray.join("");
  return returnArray;
}

module.exports = caesar;
