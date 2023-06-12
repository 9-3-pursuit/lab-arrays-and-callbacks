const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = nums.every(num => {
     num >= 2;
});

const isEveryWordShorterThan7 = words.every(word => {
  word.length < 7;
});

// Filter

const arrayLessThan5 = nums.filter((num) => {
   return num < 5; 
});
// console.log(arrayLessThan5)
const arrayOddLengthWords = words.filter((word) => {
  return word.length %2;
});
//console.log(arrayOddLengthWords)
// Find

const firstValDivisibleBy4 = nums.find((num) => {
  return num % 4 === 0;
});

//console.log(firstValDivisibleBy4);

const firstWordLongerThan4Char = words.find((word) => {
  return word.length > 4; 
});
//console.log(firstWordLongerThan4Char)
// Find Index

const firstNumIndexDivisibleBy3 = nums.findIndex((num) => {
  return num % 3 === 0;
});
//console.log(firstNumIndexDivisibleBy3)
const firstWordIndexLessThan2Char = words.findIndex((word) => {
  return word.length < 2;
});
//console.log (firstWordIndexLessThan2Char)
// For Each
//const numsMulipliedByTen = nums.forEach((num) => {
// return num * 10;
// });

// console.log(numsMultipliedByTen);

const logValuesTimes3 = nums.forEach((num) => {
   return (Number(num * 3));
});

//console.log(logValuesTimes3)

const logWordsWithExclamation = words.forEach((word) => {
  //console.log(word.includes("!"));
});

// Map
const numSquared = (num) => (num * num) * nums.indexOf(num);
const arrayValuesSquaredTimesIndex = nums.map(numSquared) 
//console.log(arrayValuesSquaredTimesIndex)

const wordUpper = (word) => word.toUpperCase()
const arrayWordsUpcased = words.map(wordUpper)

//console.log(arrayWordsUpcased);

// Some
const divisible7 = (num) => num % 7 === 0; 
const areSomeNumsDivisibleBy7 = nums.some(divisible7);
//console.log(areSomeNumsDivisibleBy7);

const haveA= (word) => word.includes("a")
const doSomeWordsHaveAnA = words.some(haveA);


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
