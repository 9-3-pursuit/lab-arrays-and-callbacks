const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  console.log(nums.every((num) => num > 2));
  return nums.every((num) => num > 2)
};

const isEveryWordShorterThan7 = (words) => {
  console.log(words.every((word) => word.length < 7));
  return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = (nums) => {
 
  console.log(nums.filter((num) => num < 5));
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = (words) => {
  console.log(words.filter((word) => (word.length % 2 !== 0)));
  return words.filter((word) => (word.length % 2 !== 0))
};

// Find

const firstValDivisibleBy4 = (nums) => {
  console.log(nums.find((num) => num % 4 === 0));
  return nums.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = (words) => {
  console.log(words.find((word) => word.length > 4));
  return words.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  console.log(nums.findIndex((num) => num % 3 === 0));
  return nums.findIndex((num) => num % 3 === 0)
};

const firstWordIndexLessThan2Char = (words) => {
  console.log(words.findIndex((word) => word.length < 2));
  return words.findIndex((word) => word.length < 2)
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => {
    console.log(num * 3)
  })
};

const logWordsWithExclamation = (words) => {
  words.forEach((word) => console.log(word + "!"));
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  console.log(nums.map((num, index) => Math.pow(num, 2) * index))
  return nums.map((num, index) => Math.pow(num, 2) * index);
};

const arrayWordsUpcased = (words) => {
  console.log(words.map((word) => word.toUpperCase()));
  return words.map((word) => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  const divisibleBy7 = (element) => element % 7 === 0;
  return nums.some(divisibleBy7);
};

const doSomeWordsHaveAnA = (words) => {
  const wordsWithA =(word) => word.includes("a");
  return words.some(wordsWithA);
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
