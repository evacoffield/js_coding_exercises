const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == n && i < nums.length - 1) {
      return nums[i + 1];
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let countForZero = 0;
  let countForOne = 0;

  for (let i = 0, length = str.length; i < length; i++) {
    if (str[i] === '0') {
      countForZero++;
    }
    else {
      countForOne++;
    }
  }
  return {
    0: countForZero,
    1: countForOne
  };
}
const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const reversedNum = n => Number(n.toString().split('').reverse().join('')) * Math.sign(n);
  return (reversedNum(n));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  for (let key in arrs) {
    const subArr = arrs[key];
    for (let key in subArr) {
      sum += subArr[key];
    }
  }
  return (sum);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length == 0) {
    return ([]);
  } else {
    const firstItem = arr[0];
    const lastItem = arr[arr.length - 1];

    arr[0] = lastItem;
    arr[arr.length - 1] = firstItem;

    return (arr);
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (let key in haystack) {
    const values = `${haystack[key]}`;
    const lowerCaseValues = values.toLowerCase();
    if (lowerCaseValues.includes(searchTerm.toLowerCase())) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  const frequencies = {};
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    const newWord = word.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '');
    if (frequencies[newWord] === undefined) {
      frequencies[newWord] = 1;
    } else {
      frequencies[newWord] += 1;
    }
  }
  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
