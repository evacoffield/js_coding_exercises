function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squares = nums;
  for (let key in squares) {
    squares[key] = Math.pow(squares[key], 2);
  }
  return squares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  function toCamelCase(str) {
    return str.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function (match) {
      return match.charAt(match.length - 1).toUpperCase();
    });
  }
  let newWord;
  for (let key in words) {
    if (key == 0) {
      newWord = words[key];
    } else {
      newWord = newWord + toCamelCase(words[key]);
    }
  }
  return newWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  var counter = 0;
  for (let key in people) {
    let subjectsArray = people[key].subjects.length;
    counter += subjectsArray;
  }
  return counter;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
