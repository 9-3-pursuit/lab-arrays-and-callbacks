const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  let greaterNum = nums.every((num) => {
    console.log(nums)

    return num >= 2
  })
  return greaterNum
};

const isEveryWordShorterThan7 = (words) => {
  let shortWord = words.every((word) => {
    return word.length < 7
  })
  return shortWord
};

// Filter

const arrayLessThan5 = (nums) => {
  let lessThan5 = nums.filter((num) => {
    return num < 5
  })
  return lessThan5
};

const arrayOddLengthWords = (words) => {
  let longArray = words.filter((word) => {
    return word.length % 2
  })
  return longArray
};

// Find

const firstValDivisibleBy4 = (nums) => {
  let divisibleValue = nums.find((num) => {
    return num % 4 === 0
  })
  return divisibleValue
};

const firstWordLongerThan4Char = (words) => {
  let longCharWord = words.find((word) => {
    return word.length > 4
  })
  return longCharWord
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  let firstIndexNum = nums.findIndex((num) => {
    return num % 3 === 0
  })
  return firstIndexNum
};

const firstWordIndexLessThan2Char = (words) => {
  const firstIndexNum = words.findIndex((word) => {
    return word < 2 === 0
  })
  return firstIndexNum
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
  const wordWithA = (curr) => curr.includes('a');;
  return words.some(wordWithA)
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
