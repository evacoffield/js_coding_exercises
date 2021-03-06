function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => (num*num));
  // getSquares example before refactoring
  // const squares = nums;
  // for (let key in squares) {
  //   squares[key] = Math.pow(squares[key], 2);
  // }
  // return squares;
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
  let counter = 0;
  people.forEach(person => counter += person.subjects.length);
  return counter;
  //getTotalSubjects example before refactoring
  // let counter = 0;
  // for (let key in people) {
  //   let subjectsArray = people[key].subjects.length;
  //   counter += subjectsArray;
  // }
  // return counter;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for (let key in menu) {
    let ingredientExists = menu[key].ingredients.includes(ingredient);
    if (ingredientExists == true) {
      return true;
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return [...new Set(arr1.filter(val => arr2.indexOf(val) != -1))].sort();
  // let duplicates = [];
  // let numbers = arr1.filter(function (val) {
  //   return arr2.indexOf(val) != -1;
  // });
  // duplicates = [...new Set(numbers)].sort();
  // return (duplicates)
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
