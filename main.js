// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function replicate(str, num) {
    stringArray=[];
    for (i = 0; i < num; i++) {
        stringArray.push(str);
    }
    return stringArray;
}




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArr(arr) {
  newArr = [...arr];
  return newArr.reverse();
}








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function removeFalsies(arr) {
  for (i=0; i < arr.length; i++) {
      if (arr[i] == false) {
        arr.splice(i, i+1);
      }
  }
  return arr;
}




// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];

function arrsToObjs(arr) {
    myObj = Object.fromEntries(arr);
    return myObj;
};

// console.log(arrsToObjs(myArray));





// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------


//const numbers = [1, 2, 3, 4, 5, 4, 3];
const uniqueNumbers = [...new Set(numbers)];
//console.log(uniqueNumbers)







// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (i=0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])) {
            //keep iterating
        } else {
            return false;
        }
    }
  } else {
      return false;
  }
  return true;
}
// console.log(compareArrays([1,2,3,4], [1,2,3,4]));
// console.log(compareArrays([1,2,3,4], [1,5,3,4]));
// console.log(compareArrays([1,2,3,4], [4,3,2,1]));
// console.log(compareArrays([1,2,3,4], [1,5,3,4,2]));



// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

newArr = [];
function flattenArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = [...arr[i]];
            for (j=0; j < newArr.length; j++) {
                arr.splice(i+j, 1, newArr[j]);
            }
            let count = 0;
            if ((Array.isArray(arr[i]) && (count < 10))) {
                flattenArray(arr);
                count++;
            }
        }
    }
    return arr;
}

console.log(flattenArray([0, 1, 2, [3, 4]]));
console.log(flattenArray([0, 1, 2, [[[3, 4]]]]));




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------


function splitArray(arr, num) {
    let count = 0;
    for (i=0; i < arr.length; i = i+num) {
        let arr2 = [...arr].splice(i, i+num);
        arr[count] = arr2;
        count++;
    }
    let remainder = arr.length - count;
    for (j = 0; j < remainder; j++){
        arr.pop();
    }
    return arr;
}
console.log(splitArray([1, 2, 3, 4], 2)); 
console.log(splitArray([1, 2, 3, 4, 5], 3));
console.log(splitArray([1,2,3,4,5,6], 3));

/*
This one fails

console.log(splitArray([1,2,3,4,5,6], 2)); //OK, here arr2 is growing instead of being reset on the third pass
*/


// -----------------------------------------------