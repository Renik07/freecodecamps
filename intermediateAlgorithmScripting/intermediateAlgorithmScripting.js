/* 01 */

const sumAll = arr => {
    let filterArr = arr.sort((a, b) => a - b);
    let min = filterArr[0];
    let max = filterArr[1];
    let newArr = [];
    for (let i = min; i <= max; i++) {
        newArr.push(min++);
    }
    return newArr.reduce((prev, curr) => prev + curr);
  }
  
  sumAll([1, 4]);


  const sumAll = arr => {
    let filterArr = arr.sort((a, b) => a - b);
    let min = filterArr[0];
    let max = filterArr[1];
    let result = 0;
    for (let i = min; i <= max; i++) {
        result+=i;
    }
    return result;
  }
  
  sumAll([1, 4]);

  /* 02 */

  const diffArray = (arr1, arr2) => {
    return [...arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  /* 03 */

  const destroyer = (arr, ...arr2) => {
    return arr.filter(item => !arr2.includes(item));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  /* 04 */
  