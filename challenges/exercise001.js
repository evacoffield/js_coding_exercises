function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0, 1) + "." + lastName.substring(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice * (100 + vatRate)) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round((originalPrice - (originalPrice * reduction / 100)) * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2) {
    return str.substr((str.length / 2), 1);
  } else {
    return str.substr((str.length / 2 - 1), 2);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  function sentence(value) {
    return value.split("").reverse().join("");
  }
  return words.map(sentence);
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  var counter = 0;
  for (let key in users) {
    if (users[key].type === "Linux") {
      counter++;
    }
  }
  return counter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  var total = 0;
  for (let key in scores) {
    total += scores[key];
  }
  return Math.round(total / scores.length * 100) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return ("fizzbuzz");
  } else if (n % 3 === 0) {
    return ("fizz");
  } else if (n % 5 === 0) {
    return ("buzz");
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
