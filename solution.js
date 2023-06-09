const { nums, words, products } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => num >= 2);
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = (words) => {
  return words.filter((word) => word.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = (words) => {
  return words.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((num) => num % 3 === 0);
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex((word) => word.length < 2);
};

// For Each

const logValuesTimes3 = (nums) => {
  return nums.forEach((num) => {
    num * 3;
  });
};

const logWordsWithExclamation = (words) => {
  return words.forEach((word) => {
    word === "!";
  });
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map(
    (num, index) =>
      // ** either way works -- ! must have an index NOT multiple it by 2
      // * Math.pow() squares the number for you
      //  Math.pow(num, 2) * index

      // * useage of the Exponenetion Operator
      num ** 2 * index
  );
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => {
    // set as return -- w/ return it will be an error
    return word.toUpperCase();
  });
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((num) => {
    return num % 7 === 0;
  });
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word) => {
    return word !== "a";
  });
};

// ** Hungry For More - Challenges --v

// * reduce
// nums - Add all the numbers in the array together using the reduce method
// returns array step by step modified
const addAllNumbers = nums.reduce((arr, curr) => {
  console.log("acc:", arr, "curr:", curr);
  arr.push(curr);
  return arr;
}, []);
console.log("Adding All Numbers:", addAllNumbers);

// words - concatenate all the words using reduce
// returns array step by step modified
const concatenateAllWords = words.reduce((arr, curr) => {
  console.log("acc:", arr, "curr:", curr);
  arr.push(curr);
  return arr;
}, []);
console.log("Concatenante All Words:",concatenateAllWords);

// * sort

// sort without any arguments - number array
const emptySortNums = (nums) => {
  return nums.sort();
};
console.log("No Number Arguement:", emptySortNums);

// sort without any arguments - word array
const emptySortWords = (words) => {
  return words.sort();
};
console.log("No Word Argument:", emptySortWords);

// Sort the numbers in ascending order
const ascendingOrderNum = nums.sort((a, b) => {
  return a > b ? 1 : 1;
});
console.log("Ascending Numbers:", ascendingOrderNum);
// Sort the numbers in descending order
const descendingOrderNum = nums.sort((a, b) => {
  return b > a ? 1 : -1;
});
console.log("Descending Numbers:", descendingOrderNum);

// Sort the words in ascending order
const ascendingOrderWords = words.sort((a, b) => {
  return a > b ? 1 : 1;
});
console.log("Ascending Words:", ascendingOrderWords);

// Sort the words in descending order
const descendingOrderWords = words.sort((a, b) => {
  return b > a ? 1 : -1;
});
console.log("Descending Words:", descendingOrderWords);

// test whether each letter a-z (case insensitive) is used at least once
function everyLetterSort(a, b) {
  let aLowerCase = a.toLowerCase();
  let bLowerCase = b.toLowerCase();

  if (aLowerCase < bLowerCase) {
    return -1;
  } else if (aLowerCase > bLowerCase) {
    return 1;
  } else {
    return 0; // this will return you back to the orignal value of array b/c all other conditions are met
  }
}
console.log("Is Every Letter There?:", everyLetterSort);

// * Working with data

// * filter
// filter for products with a price that is less than 10, using the array below:
const filterPrice = products.filter((product) => {
  return product.price < 10;
});
console.log("Product Filtered By Price:", filterPrice);

// * sort
// sort alphabetically by product name

// const emptySortWords = (words) => {
//   return words.sort();
// };

const sortProductNames = products.sort((a, b) => {
  if (b.name > a.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
});

console.log("Product Name Sort:", sortProductNames);

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
