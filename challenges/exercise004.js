function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 1) {
      smallNums.push(num);
    }
  }
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
  for (let i = 0; i < words.length; i++){
    const word = words[i];
    if (word.substring(0, 3) == 'to '){
      verbs.push(word);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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
