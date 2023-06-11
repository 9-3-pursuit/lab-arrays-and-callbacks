const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  const greater2 = (curr) => curr > 2;
  return nums.every(greater2);
};

const isEveryWordShorterThan7 = () => {
  const shorter7 = (curr) => curr.length <= 7;
  return words.every(shorter7);
 };

// Filter

const arrayLessThan5 = () => {
  const less5 = (curr) => curr < 5;
  return nums.filter(less5);
};

const arrayOddLengthWords = () => {
  const oddWords = (curr) => curr.length % 2 === 1;
  return words.filter(oddWords);
};

// Find

const firstValDivisibleBy4 = () => {
  const divide4 = (curr) => curr % 4 === 0;
  return nums.find(divide4);
};

const firstWordLongerThan4Char = () => {
  const longer4 = (curr) => curr.length > 4;
  return words.find(longer4);
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  const divisible3 = (curr) => curr % 3 === 0;
  return nums.findIndex(divisible3);
};

const firstWordIndexLessThan2Char = () => {
  const index2 = (curr) => curr.length < 2;
  return words.findIndex(index2);
};

// For Each

const logValuesTimes3 = () => {
  const times3 = (curr) => curr * 3;
  return nums.forEach(times3);
};

const logWordsWithExclamation = () => {
  const exclaim = (curr) => curr.length + '!';
  return words.forEach(exclaim);
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  const square = (curr, index) => curr * curr * index;
  return nums.map(square);
};

const arrayWordsUpcased = () => {
  const upcase = (curr) => curr.toUpperCase();
  return words.map(upcase);
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  const divisible7 = (curr) => curr % 7 === 0;
  return nums.some(divisible7)
};

const doSomeWordsHaveAnA = () => {
  const haveA = (curr) => curr.includes("a");
  return words.some(haveA);
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
