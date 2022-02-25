/* 01 */

let yourArray = [1, 2, 3, "str", true]; // Change this line

/* 02 */

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = 123;
// Only change code above this line
console.log(myArray);

/* 03 */

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  /* 04 */

  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  /* 05 */

  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.shift();
arr.splice(3, 6);
// Only change code above this line
console.log(arr);

/* 06 */

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

/* 07 */

const forecast = arr => arr.slice(2, 4);

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/* 08 */

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  /* 09 */

  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

/* 10 */

const quickCheck = (arr, elem) => {
    // Only change code below this line
    return arr.indexOf(elem)>=0 ? true : false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  /* 11 */

  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  /* 12 */

  let myNestedArray = [
    // Only change code below this line
    ['unshift', ['deep',['deeper', ['deepest']]], 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
  ];

  /* 13 */

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas = 13;
  foods.grapes = 35;
  foods["strawberries"] = 27;
  // Only change code above this line
  
  console.log(foods);

  /* 14 */

  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);

  /* 15 */

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));

  /* 16 */

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);

  /* 17 */

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) {
      return true;
    } else {
      return false;
    }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));

  /* 18 */

  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let count = 0;
    // Only change code below this line
    for (let user in usersObj) {
      if (usersObj[user].online) {
        count++;
      }
    }
    return count;
    // Only change code above this line
  }
  
  console.log(countOnline(users));

  /* 19 */

  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));

  /* 20 */

  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    let arr = userObj.data.friends;
    arr.push(friend);
    return arr;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));
