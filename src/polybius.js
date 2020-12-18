// This module is COMPLETE

function polybius(input, encode = true) {
  testForEven = input.split("");
  testForEven.forEach((item, index) => {
    if (item === " ") {
      testForEven.splice(index, 1);
    }
  });
  if (testForEven.length % 2 !== 0) return false;
  const dictionary = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];
  returnArray = [];
  if (encode) {
    input = input.toLowerCase();
    inputArray = input.split("");
    inputArray.forEach((letter) => {
      if (letter === " ") {
        returnArray.push(" ");
      } else if (letter === "i" || letter === "j") {
        returnArray.push(2, 4);
      } else {
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            if (letter === dictionary[i][j]) returnArray.push(j + 1, i + 1);
          }
        }
      }
    });
  }
  if (!encode) {
    let inputArray = input.split("");
    for (let i = 0; i < inputArray.length; i += 2) {
      if (inputArray[i] === " " || inputArray[i + 1] === " ") {
        i++;
        returnArray.push(" ");
      }
      returnArray.push(dictionary[inputArray[i + 1] - 1][inputArray[i] - 1]);
    }
  }
  returnArray = returnArray.join("");
  return returnArray;
}

module.exports = polybius;
