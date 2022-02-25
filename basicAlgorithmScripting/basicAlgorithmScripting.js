/* 01 */

function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  convertToF(30);

/* 02 */

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  reverseString("hello");

/* 03 */

function factorialize(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  factorialize(5);

/* 04 */

function findLongestWordLength(str) {
  let result = 0;
let arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > result) {
    result = arr[i].length;
  }
}
return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* 05 */

function largestOfFour(arr) {
  return arr.map(subArr => {
    return subArr.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    });
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/* 06 */

function confirmEnding(str, target) {
  let regExp = new RegExp(`${target}$`, `i`);
  return regExp.test(str);
}

confirmEnding("Bastian", "n");

/* 07 */

function repeatStringNumTimes(str, num) {
  let resultString = "";
  for (let i = 1; i <= num; i++) {
    resultString += str;
  }
  return resultString;
}

repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

/* 08 */

const truncateString =(str, num) => {
  let newStr = "";
  if (num >= str.length) {
    return str;
  }
  for (let i = 0; i < num; i++) {
    newStr += str[i];
  }
  return `${newStr}...`;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

const truncateString =(str, num) => {
  if (num >= str.length) {
    return str;
  } else {
    return str.slice(0, num) + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/* 09 */

const findElement = (arr, func) => {
  for (let item of arr) {
    if (func(item)) {
      return item;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/* 10 */

function booWho(bool) {
  if (typeof bool == "boolean") {
    return true;
  } else {
    return false;
  }
}

booWho(null);

/* 11 */

const titleCase = str => {
  const arr = str.toLowerCase().split(" ");
  let result = [];
  for (let item of arr) {
    result.push(item[0].toUpperCase() + item.slice(1));
  }
  return result.join(" ");
}

titleCase("I'm a little tea pot");

/* 12 */

const frankenSplice = (arr1, arr2, n) => {
  let newArr = arr2.slice();

  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/* 13 */

function bouncer(arr) {
  let resultArr = arr.filter(item => Boolean(item));
  return resultArr;
}

bouncer([7, "ate", "", false, 9]);

/* 14 */

function getIndexToIns(arr, num) {
  let newArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < newArr.length; i++) {
  	if (newArr[i] >= num) {
    	return i;
    }
  	if (num > newArr[newArr.length-1]) {
    	return newArr.length;
    }
  }
  return 0;
}

getIndexToIns([40, 60], 50);



const getIndexToIns = (arr, num) => {
  let newArr = arr.concat(num).sort((a, b) => a - b);
  return newArr.indexOf(num);
}

getIndexToIns([40, 60], 50);


const getIndexToIns = (arr, num) => {
  return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([40, 60], 50);

/* 15 */

const chunkArrayInGroups = (arr, size) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);