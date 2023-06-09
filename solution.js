const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  const numGreaterThanTwo = (curr) => curr > 2;
  return nums.every(numGreaterThanTwo)
};

const isEveryWordShorterThan7 = () => {
  const wordShorterThanSeven = (curr) => curr.length <= 7;
  return words.every(wordShorterThanSeven);
};

// Filter

const arrayLessThan5 = () => {
  const filterArr = (curr) => curr < 5;
  return nums.filter(filterArr)
};

const arrayOddLengthWords = () => {
  const oddWords = (curr) => curr.length % 2 === 1;
  return words.filter(oddWords)
};

// Find

const firstValDivisibleBy4 = () => {
  const divisibleNum = (curr) => curr % 4 === 0;
  return nums.find(divisibleNum)
};

const firstWordLongerThan4Char = () => {
  const word = (curr) => curr.length > 4;
  return words.find(word)
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  const divNum = (curr) => curr % 3 === 0;
  return nums.findIndex(divNum)
};

const firstWordIndexLessThan2Char = () => {
   const wordLessTwoChar = (curr) => curr.length < 2;
   return words.findIndex(wordLessTwoChar)
};

// For Each

const logValuesTimes3 = () => {
  const numsArr = (curr) => curr * 3;
  return nums.forEach(numsArr)
};

const logWordsWithExclamation = () => {
  const wordWithExclamation = (curr) => curr.length + '!';
  return words.forEach(wordWithExclamation)
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  const newArr = (curr, i) => (curr * curr) * i;
  return nums.map(newArr)
  // return nums.map((curr, i) => (curr * curr) * i)
};

const arrayWordsUpcased = () => {
  const upperCaseArr = (curr) => curr.toUpperCase();
  return words.map(upperCaseArr)
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  const isItDivisible = (curr) => curr % 7 === 0;
  return nums.some(isItDivisible)
};

const doSomeWordsHaveAnA = () => {
  const hasWordWithA = (curr) => curr.includes('a');;
  return words.some(hasWordWithA)
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
