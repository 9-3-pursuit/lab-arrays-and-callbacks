const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  //
  return nums.every((num) => {
    if (num > 2) {
      return true;
    } else {
      return false;
    }
  });
};

const isEveryWordShorterThan7 = (words) => {
  //
  return words.every((word) => {
    if (word.length < 7) {
      return true;
    } else {
      return false;
    }
  });
};

// Filter

const arrayLessThan5 = () => {
  //
  let filteredArray = [];
  nums.filter((num) => {
    if (num < 5) {
      filteredArray.push(num);
    }
  });
  return filteredArray;
};

const arrayOddLengthWords = () => {
  //
  let oddLengthWordsArray = [];
  words.filter((word) => {
    if (word.length % 2 > 0) {
      oddLengthWordsArray.push(word);
    }
  });
  return oddLengthWordsArray;
};

// Find

const firstValDivisibleBy4 = () => {
  //
  return nums.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  //
  return words.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  //
  return nums.findIndex((num) => num % 3 === 0);
};

const firstWordIndexLessThan2Char = () => {
  //
  return words.findIndex((word) => word.length < 2);
};

// For Each

const logValuesTimes3 = () => {
  //
  // let tripledArray = [];
  tripledNums = nums.forEach((num) => {
    // tripledArray.push(num * 3);
    num * 3;
    // console.log(tripledArray);
  });
};
const logWordsWithExclamation = () => {
  //
  words.forEach((word) => word + "!");
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
  let newArr = [];
  result = nums.map((num, i) => {
    // Math.pow(num, 2) * i; -- method to square a number
    // (num ** 2) * i -- another way to square a number
    newArr.push(Math.pow(num, 2) * i);
  });
  return newArr;
};

const arrayWordsUpcased = () => {
  //
  let upperCasedWordsArray = [];
  result = words.map((word) => {
    upperCasedWordsArray.push(word.toUpperCase());
  });
  return upperCasedWordsArray;
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
  result = nums.some((num) => {
    if (num % 7 === 0) {
      return num;
    }
  });
  return result;
};

const doSomeWordsHaveAnA = () => {
  //
  result = words.some((word) => {
    if (word.includes("a")) {
      return word;
    }
  });
  return result;
};

// Reduce

const addNumsUsingReduce = () => {
  let result = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(result);

  return result;
};

const concatenateWordsUsingReduce = () => {
  let result = words.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return result;
};

const sortNumsWithArguments = () => {
  let result = nums.sort((a, b) => {
    return b - a;
  });
  console.log(result);
  return result;
};
// sortNumsWithArguments();
//sortNumsWithArguments produces the xpected and intended results for sorting in ascending and descending order.

const sortNumsWithoutArguments = () => {
  let result = nums.sort(() => {
    console.log(result);
    return result;
  });
  // console.log(result)
  // return result
};
// sortNumsWithoutArguments();
//sortNumsWithoutArguments produces the expected result because the sort function requires arguments with instructions on the particular sequence that the programmer intends to sort the data.

const sortWordsWithoutArguments = () => {
  words.sort(); //sorts in ascending order
  words.sort().reverse() // sorts in descending order
  words.reverse() // sorts in descending order
};

// The one issue here is that one of the strings is statrs with a capital case Letter and in ascending order that string is sorted in the first position of the array. If we can make all strings the same case in the array then the sort method will work the way would expect.

// sortWordsWithoutArguments();

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
  addNumsUsingReduce,
  concatenateWordsUsingReduce,
  sortNumsWithArguments,
  sortNumsWithoutArguments,
  sortWordsWithoutArguments
};
