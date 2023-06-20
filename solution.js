const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => 
nums.every(num => num >= 2)

const isEveryWordShorterThan7 = () => 
words.every(word =>word.length < 7)

// Filter

const arrayLessThan5 = () => 
nums.filter(num => num < 5)

const arrayOddLengthWords = () => 
words.filter(word => word.length % 2 === 1)

// Find

const firstValDivisibleBy4 = () => 
nums.find(num => num % 4 === 0)

const firstWordLongerThan4Char = () => 
words.find(word => word.length > 4)

// Find Index

const firstNumIndexDivisibleBy3 = () =>
 nums.findIndex((num) => num % 3 === 0);

const firstWordIndexLessThan2Char = () =>
  words.findIndex((word) => word.length > 2 === 0)

// For Each

const logValuesTimes3 = () => 
nums.forEach((num) => num * 3);

const logWordsWithExclamation = () => 
words.forEach(word => word)

// Map

const arrayValuesSquaredTimesIndex = () =>
nums.map((num,ind) => num ** 2 * ind)

const arrayWordsUpcased = () => 

// Some

const areSomeNumsDivisibleBy7 = () =>
nums.some(num => num * 7)

const doSomeWordsHaveAnA = () => 
words.some(word => word.includes("a"))

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
