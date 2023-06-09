const { nums, words } = require("./data/data.js");

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
  
  // * Products Array W/ Corresponding Functions --v
  const products = [
    {
      name: "fairy lights",
      price: 5.99,
      description: "festive holiday decoration",
    },
    {
      name: "banana",
      price: 0.99,
      description: "full of potassium",
    },
    {
      name: "egg separator",
      price: 3.99,
      description: "it separates yolks from whites",
    },
    {
      name: "flag",
      price: 5.99,
      description: "catches the breeze",
    },
    {
      name: "quark",
      price: 0.01,
      description: "Very small",
    },
    {
      name: "turtleneck",
      price: 19.99,
      description: "available in black and slightly-darker black",
    },
    {
      name: "mitt (leather)",
      price: 15,
      description: "regulation sized",
    },
    {
      name: "nothing",
      price: 10,
      description: "Hey, if you pay us, we won't ask any questions.",
    },
    {
      name: "violin",
      price: 2000,
      description: "Talk about a JS fiddle...",
    },
    {
      name: "yoyo",
      price: 1,
      description: "We had to pull some strings to get this one in.",
    },
  ];
  
  // * Working with data
  
  // * filter
  // filter for products with a price that is less than 10, using the array below:
  const filterPrice = products.filter((product) => {
    return product.price < 10;
  });
  console.log("Product Filtered By Price:", filterPrice);
  
  // * sort
  // sort alphabetically by product name
  
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