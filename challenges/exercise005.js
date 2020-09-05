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
  var countForZero = 0;
  var countForOne = 0;
    
  for (var i = 0, length = str.length; i < length; i++) {
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

  // Count the number of 0s and 1s in a string without using a counter
  // var sum = 0;
  // for (var i = 0, length = str.length; i < length; i++) {
  //   sum += Number(str[i]);
  // }
  // return {
  //   1 : str.length - sum,
  //   0 : sum
  // };
}
const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
