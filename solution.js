const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  let result = nums.every((num) => {
  return num >= 2;
})
  return result;
};

const isEveryWordShorterThan7 = (words) => {
  const result = words.every(word => {
    return word.length < 7;
  })
  return result;
};

// Filter

const arrayLessThan5 = (nums) => {
  const result = nums.filter(num => {
    return num < 5;
  })
  return result;
};

const arrayOddLengthWords = (words) => {
  const result = words.filter(word => {
    return word.length % 2 === 1;
  })
  return result;
};

// Find

const firstValDivisibleBy4 = (nums) => {
  const result = nums.find(num => {
    return num % 4 === 0;
  })
  return result;
};

const firstWordLongerThan4Char = (words) => {
  const result = words.find(word => {
    return word.length > 4
  })
  return result;
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  const result = nums.findIndex(num => {
    return num % 3 === 0
  })
  return result;
};

const firstWordIndexLessThan2Char = (words) => {
  const result = words.findIndex(word => {
    return word.length < 2
  })
  return result;
};

// For Each

const logValuesTimes3 = (nums) => {
  const result = nums.forEach(num => {
    console.log(num * 3);
  })
  console.log(result)
};

const logWordsWithExclamation = (words) => {
  const result = words.forEach(word => {
    console.log(`${word}!`)
  })
  console.log(result)
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  const result = nums.map((num, i) => {
    return (num * num) * num[i];
  })
  return result;
};

const arrayWordsUpcased = (words) => {
  const result = words.map(word => {
    return word.toUpperCase()
  })
  return result;
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  const result = nums.some(num => {
    return num % 7 === 0;
  })//
  return result;
};

const doSomeWordsHaveAnA = (words) => {
  const result = words.some(word => {
    return word.include('a')
  })
  return result;
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
