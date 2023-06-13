const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  let bigNum = nums.every((num) => {
    return num >= 2;
  });
  return bigNum;
  //
};
const isEveryWordShorterThan7 = (words) => {
  let shortWord = words.every((word) => {
    return word.length < 7;
  });
  //
  return shortWord;
};

// Filter

const arrayLessThan5 = (nums) => {
  let lessThan = nums.filter((num) => {
    return num < 5;
  });
  return lessThan;
};

const arrayOddLengthWords = (words) => {
  let oddLength = words.filter((word) => {
    return word.length % 2 != 0;
  });
  return oddLength;
};

// Find

const firstValDivisibleBy4 = (nums) => {
  let divisBy4 = nums.find((num) => {
    return num % 4 === 0;
  });
  return divisBy4;
};

const firstWordLongerThan4Char = (words) => {
  let longerThan4 = words.find((words) => {
    return words.length > 4;
  });
  return longerThan4;
};
// Find Index
const firstNumIndexDivisibleBy3 = (nums) => {
  let divisBy3 = nums.findIndex((num) => {
    return num % 3 === 0;
  });
  return divisBy3;
};

const firstWordIndexLessThan2Char = (words) => {
  let lessThan2Char = words.findIndex((word) => {
    return word.length < 2;
  });
  return lessThan2Char;
};

// For Each
const logValuesTimes3 = (nums) => {
  let valTimes3 = nums.forEach((num) => {});
  return valTimes3;
};

const logWordsWithExclamation = (words) => {
  let wordsWithExlaim = words.forEach((word) => {});
  return wordsWithExlaim;
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, i) => num ** 2 * i);
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => word.toUpperCase());
};
// Some
//if atleast 1 el in array results as truthy returns true,
// otherwise returns false

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => num % 7 === 0);
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => word.includes("a"));
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
