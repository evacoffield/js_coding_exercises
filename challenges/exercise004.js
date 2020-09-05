function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const smallNums = [];
  nums.forEach(function (num) {
    if (num < 1) {
      smallNums.push(num);
    }
  });

  // For loop example
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   if (num < 1) {
  //     smallNums.push(num);
  //   }
  // }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const matchingNames = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, 1) == char) {
      matchingNames.push(name);
    }
  }
  return matchingNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.substring(0, 3) == 'to ') {
      verbs.push(word);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  const cities = [];
  for (let i = 0; i < users.length; i++) {
    const cityName = users[i].data.city.displayName;
    cities.push(cityName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const squareRoot = Math.round(Math.sqrt(num) * 100) / 100;
    squareRoots.push(squareRoot);
  }
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const matchingSentences = [];
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      matchingSentences.push(sentence);
    }
  }
  return matchingSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSides = [];
  for (let i = 0; i < triangles.length; i++) {
    longestSides.push(Math.max(...triangles[i]));
  }
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
