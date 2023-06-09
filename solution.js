const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  const GreaterThan2 = nums.every((num) => num >= 2)
  return GreaterThan2
};

const isEveryWordShorterThan7 = (words) => {
  const WordShorterThan7 = words.every((word) => word.length < 7)
  return WordShorterThan7
};

// Filter

const arrayLessThan5 = (nums) => {
  const LessThan5 = nums.filter((num) => num < 5)
  return LessThan5
};

const arrayOddLengthWords = (words) => {
  const OddLengthWords = words.filter((word) => word.length % 2 === 1)
  return OddLengthWords
};

// Find

const firstValDivisibleBy4 = (nums) => {
  const ValDivisibleBy4 = nums.find((num) => num % 4 === 0)
  return ValDivisibleBy4
};

const firstWordLongerThan4Char = (words) => {
  const LongerThan4Char = words.find((word) => word.length > 4)
  return LongerThan4Char
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  const DivisibleBy3 = nums.findIndex((num) => num % 3 === 0)
  return DivisibleBy3
};

const firstWordIndexLessThan2Char = (words) => {
  const LessThan2Char = words.findIndex((word) => word.length < 2)
  return LessThan2Char
};

// For Each

const logValuesTimes3 = (nums) => {
  const product = nums.forEach((num) => num * 3)
  console.log(product)
};

const logWordsWithExclamation = (words) => {
  const exclamation = words.forEach((word) => word.includes("!"))
  console.log(exclamation)
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  const TimesIndex = nums.map((num, index) => num * num * index)
  return TimesIndex
};

const arrayWordsUpcased = (words) => {
  const WordsUpcased = words.map((word) => word.toUpperCase())
  return WordsUpcased
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  const DivisibleBy7 = nums.some((num) => num % 7 === 0)
  return DivisibleBy7
};

const doSomeWordsHaveAnA = (words) => {
  const WordsHaveAnA = words.some((word) => word.includes("a"))
  return WordsHaveAnA
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