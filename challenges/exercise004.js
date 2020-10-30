function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  // using filter, get each number in nums
  // FILTER nums to find num < 1
  // return the result of filter
  const smallNums = nums.filter(function (item) {
    if (item < 1) {
      return item;
    }
  });

  // ForEach example
  // const smallNums = [];
  // nums.forEach(function (num) {
  //   if (num < 1) {
  //     smallNums.push(num);
  //   }
  // });

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
  // using filter, get each item in names
  // FILTER items to find items begenning with char
  // return the result of filter
  const matchingNames = names.filter(function (item) {
    if (item.substring(0, 1) == char) {
      return item;
    }
  });

  // ForEach example
  // const matchingNames = [];
  // names.forEach(function (item) {
  //   if (item.substring(0, 1) == char) {
  //     matchingNames.push(item);
  //   }
  // })

  // For loop example
  // for (let i = 0; i < names.length; i++) {
  //   const name = names[i];
  //   if (name.substring(0, 1) == char) {
  //     matchingNames.push(name);
  //   }
  // }
  return matchingNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // using filter, get each item in words
  // FILTER items to find items beginning with 'to '
  // return the result of filter
  const verbs = words.filter(function (item) {
    if (item.substring(0, 3) == 'to ') {
      return item;
    }
  });

  // ForEach example
  // const verbs = [];
  // words.forEach(function (item) {
  //   if (item.substring(0, 3) == 'to ') {
  //     verbs.push(item);
  //   }
  // })

  // For loop example
  // for (let i = 0; i < words.length; i++) {
  //   const word = words[i];
  //   if (word.substring(0, 3) == 'to ') {
  //     verbs.push(word);
  //   }
  // }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // using filter, get each item in nums
  // FILTER items to find only integers 
  // return the result of filter
  const integers = nums.filter(function (num) {
    if (Number.isInteger(num)) {
      return num;
    }
  });

  // ForEach example
  // const integers = [];
  // nums.forEach(function (num) {
  //   if (Number.isInteger(num)) {
  //     integers.push(num);
  //   }
  // })

  // For loop example
  // for (let i = 0; i < nums.length; i++) {
  //   if (Number.isInteger(nums[i])) {
  //     integers.push(nums[i]);
  //   }
  // }
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // using map, get each item in users
  // MAP items and return city names of each user
  // return the result of map

  return users.map(item => item.data.city.displayName);

  // Map example before refactoring
  // const cities = users.map(function (item) {
  //   const cityName = item.data.city.displayName;
  //   return cityName;
  // });

  // ForEach example
  // const cities = [];
  // users.forEach(function (item) {
  //   const cityName = item.data.city.displayName;
  //   cities.push(cityName);
  // })

  // For loop example
  // for (let i = 0; i < users.length; i++) {
  //   const cityName = users[i].data.city.displayName;
  //   cities.push(cityName);
  // }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // using map, get each item in nums
  // Transform items, gets the square root of each number to 2 decimal places
  // return the result of map
  const squareRoots = nums.map(function (num) {
    const squareRoot = Math.round(Math.sqrt(num) * 100) / 100;
    return squareRoot;
  });
  // ForEach example
  // const squareRoots = [];
  // nums.forEach(function (item) {
  //   const squareRoot = Math.round(Math.sqrt(item) * 100) / 100;
  //   squareRoots.push(squareRoot);
  // })

  // For loop example
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   const squareRoot = Math.round(Math.sqrt(num) * 100) / 100;
  //   squareRoots.push(squareRoot);
  // }
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // using filter, get each sentence in sentences
  // FILTER sentences to find only sentences containing the specified string
  // return the result of filter
  const matchingSentences = sentences.filter(function (item) {
    if (item.toLowerCase().includes(str.toLowerCase())) {
      return item;
    }
  });

  // ForEach example
  // const matchingSentences = [];
  // sentences.forEach(function (item) {
  //   if (item.toLowerCase().includes(str.toLowerCase())) {
  //     matchingSentences.push(item);
  //   }
  // })

  // For loop example
  // for (let i = 0; i < sentences.length; i++) {
  //   const sentence = sentences[i];
  //   if (sentence.toLowerCase().includes(str.toLowerCase())) {
  //     matchingSentences.push(sentence);
  //   }
  // }
  return matchingSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // using map, get each sentence in sentences
  // MAP items and return the longest side of each set of triangle data
  // return the result of map
  const longestSides = triangles.map(function (item) {
    return Math.max(...item);
  });

  // ForEach example
  // const longestSides = [];
  // triangles.forEach(function (item) {
  //   longestSides.push(Math.max(...item));
  // })

  // For loop example
  // for (let i = 0; i < triangles.length; i++) {
  //   longestSides.push(Math.max(...triangles[i]));
  // }
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
