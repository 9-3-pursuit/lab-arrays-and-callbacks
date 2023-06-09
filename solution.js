const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  let answer = nums.every((num) => num > 2);
  return answer;
};

const isEveryWordShorterThan7 = (words) => {
  let answer = words.every((word) => word.length < 7 );
  return answer;
};

// Filter

const arrayLessThan5 = (nums) => {
  let answer = nums.filter((num) => num < 5);
  return answer;
};

const arrayOddLengthWords = (words) => {
  let answer = words.filter((word) => word.length % 2 !== 0)
  return answer;
};

// Find

const firstValDivisibleBy4 = (nums) => {
  let answer = nums.find((num) => num % 4 === 0);
  return answer;
};

const firstWordLongerThan4Char = (words) => {
  let answer = words.find((word) => word.length > 4);
  return answer;
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  let answer = nums.findIndex((num) => num % 3 === 0);
  return answer;
};

const firstWordIndexLessThan2Char = (words) => {
  let answer = words.findIndex((word) => words.length < 2);
  return answer;
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => num * 3);
};

const logWordsWithExclamation = (words) => {
  words.forEach((word) => `${word}!`)
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  let answer = nums.map((num, index) => {return num**2 * index} )
  return answer;
};

const arrayWordsUpcased = (words) => {
  let answer = words.map((word) => {return word.toUpperCase()})
  return answer;
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  let answer = nums.some((num) => num % 7 === 0);
  return answer;
};

const doSomeWordsHaveAnA = (words) => {
  let answer = words.some((word) => word.includes("a"));
  return answer;
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
