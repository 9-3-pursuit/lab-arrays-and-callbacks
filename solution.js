const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((curr) => curr >= 2);
};

const isEveryWordShorterThan7 = () => {
  return words.every((curr) => curr.length < 7);
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter((curr) => curr < 5);
};

const arrayOddLengthWords = () => {
  return words.filter((curr) => curr.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((curr) => curr % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  return words.find((curr) => curr.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((curr) => curr % 3 === 0);
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((curr) => curr.length < 2);
};

// For Each

const logValuesTimes3 = () => {
  return nums.forEach((curr) => {
    console.log(curr, curr, curr);
  });
};

const logWordsWithExclamation = () => {
  return words.forEach((curr) => {
    if (curr.includes("!")) {
      console.log(curr);
    }
  });
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((curr, i) => curr ** 2 * i);
};

const arrayWordsUpcased = () => {
  return words.map((curr) => curr.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((curr) => curr % 7 === 0);
};

const doSomeWordsHaveAnA = () => {
  return words.some((curr) => curr.includes("a"));
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
