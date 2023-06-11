const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  const isGreater = (currentValue) => currentValue >= 2;
  return nums.every(isGreater)
};

const isEveryWordShorterThan7 = () => {
  const isShorter = (currentValue) => currentValue.length < 7;
  return words.every(isShorter)
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter(num => num < 5)
};

const arrayOddLengthWords = () => {
  return words.filter(word => word.length % 2 !== 0)
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find(num => num % 4 === 0)
};

const firstWordLongerThan4Char = () => {
  return words.find(word => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
 return nums.findIndex(num => num % 3 === 0)
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex(word => word.length < 2)
};

// For Each

const logValuesTimes3 = () => {
  nums.forEach(num => console.log(num * 3))
};

const logWordsWithExclamation = () => {
  words.forEach(word => console.log(word + "!"))
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  const someMath = (currentValue, index) => Math.pow(currentValue, 2) * index;
  const result = nums.map(someMath)
  console.log(result)
  return result
};

const arrayWordsUpcased = () => {
  const makeBig = (currentValue) => currentValue.toUpperCase();
  const result = words.map(makeBig)
  return result
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  const divisible = (element) => element % 7 === 0;
  return nums.some(divisible)
};

const doSomeWordsHaveAnA = () => {
  const included = (element) => element.includes("a")
  return words.some(included)
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
