const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  const numEvery = (currentValue )=> currentValue > 2;
  return nums.every(numEvery)
};

const isEveryWordShorterThan7 = () => {
  const wordEvery = (currentValue )=> currentValue.length <= 7;
  return words.every(wordEvery)
};

// Filter

const arrayLessThan5 = () => {
  const filterNums = (currentValue)=>currentValue < 5
  return nums.filter(filterNums)
  //
};

const arrayOddLengthWords = () => {
   const filterWords = (currentValue)=>currentValue.length % 2==1
   return  words.filter(filterWords)
  //
};

// Find

const firstValDivisibleBy4 = () => {
  const findNum = (currentValue)=>currentValue % 4===0
  return nums.find(findNum)
  //
};

const firstWordLongerThan4Char = () => {
  const longerWord = (currentValue)=>currentValue.length > 4
  return words.find(longerWord)
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  const indexNum = (currentValue)=>currentValue % 3===0
  return nums.findIndex(indexNum)
  //
};

const firstWordIndexLessThan2Char = () => {
  const indexWord = (currentValue)=>currentValue.length <= 2
  return words.findIndex(indexWord )
};

// For Each

const logValuesTimes3 = () => {
  const forEachNum = (currentValue)=> currentValue * 3
  return nums.forEach(forEachNum)
  //
};

const logWordsWithExclamation = () => {
  const forEachWord = (currentValue)=>currentValue.length + "!"
  return words.forEach(forEachWord)
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  const mapNums = (currentValue,index)=>(currentValue**2) * index
  return nums.map(mapNums)
  //
};

const arrayWordsUpcased = () => {
  const mapWords = (currentValue)=> currentValue.toUpperCase()
  return words.map(mapWords)
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  const numSome = (currentValue)=>currentValue % 7===0
  return nums.some(numSome)
  //
};

const doSomeWordsHaveAnA = () => {
  const wordSome = (currentValue)=>currentValue.includes("a")
  return words.some(wordSome)
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
