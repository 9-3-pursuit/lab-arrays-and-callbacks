const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  //
 const everyNumb = (curr) => curr >2;
 return nums.every(everyNumb)
};

const isEveryWordShorterThan7 = () => {
  const everyWord = (currW) => currW.length <= 7; 
  return words.every(everyWord)
  //
};

// Filter

const arrayLessThan5 = () => {
  //
  const filterNum = (curr) => curr < 5;
  return nums.filter(filterNum)
};

const arrayOddLengthWords = () => { 
  const filterOddWord = (curr) => curr.length % 2 === 1;
  return words.filter(filterOddWord)
  //
};

// Find

const firstValDivisibleBy4 = () => {
  const numDiv = (curr) => curr % 4 === 0;
  return nums.find(numDiv)
  //
};

const firstWordLongerThan4Char = () => { 
  const wordDiv = (curr) => curr.length > 4;
  return words.find(wordDiv)
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  const numIn = (curr) => curr % 3 === 0;
  return nums.findIndex(numIn)
  //
};

const firstWordIndexLessThan2Char = () => {
  const wordIn = (curr) => curr.length < 2;
  return words.findIndex(wordIn)
  //
};

// For Each

const logValuesTimes3 = () => {
  //
  const valTim = (curr) => curr * 3;
  return nums.forEach(valTim)
};

const logWordsWithExclamation = () => {
  const wordEx = (curr) => curr.length + `!`;
  return words.forEach(wordEx)
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((curr, i) => (curr * curr) *i);
  //
};

const arrayWordsUpcased = () => {
  const wordToUpp = (curr) => curr.toUpperCase();
  return words.map(wordToUpp)
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  const divBy = (curr) => curr % 7 === 0;
  return nums.some(divBy)
};

const doSomeWordsHaveAnA = () => {
  const someAword = (curr) => curr.includes("a");
  return words.some(someAword)
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
