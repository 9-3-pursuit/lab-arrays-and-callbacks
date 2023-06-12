const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
 const num = (a) => {return a > 2}

 return nums.every(num)
};

const isEveryWordShorterThan7 = (words) => {
  return words.every ((word) => word.length <7)
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter(num => num < 5)
};

const arrayOddLengthWords = (words) => {
  return words.filter(word => word.length % 2 === 1 ) 
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find(x => x % 4 === 0)
};

const firstWordLongerThan4Char = (words) => {
  return words.find (x => x.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex( n => n % 3 === 0)
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex ( w => w.length < 2)
};

// For Each

const logValuesTimes3 = (nums) => {
  return nums.Each (num => num * 3)
};

const logWordsWithExclamation = () => {
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
};

const doSomeWordsHaveAnA = () => {
  //
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
