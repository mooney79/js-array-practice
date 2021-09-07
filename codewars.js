/*
Complete on Codewars, then copy code here
*/

// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    for (i = 0; i < array.length; i++) {
      if (array === []) {
        //Do nothing
      } else {
        array[i] = `${i+1}: ${array[i]}`;
      }
    }
    return array;
  };
  


// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript


function arr (N) {  
    if (N !== []) {
      let returnArray = [];
      for (i=0; i < N; i++){
        returnArray.push(i); 
      }
    return returnArray;
    }  
  }  


// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript


function flyBy(lamps, drone){
    let distance = 0;
    if ( drone.length >= lamps.length ) {
      distance = lamps.length;
    } else {
      distance = drone.length;
    }
    let returnArray = lamps.split('');
    for (i=0; i < distance; i++) {
      returnArray[i] = 'o';
    }
    return returnArray.join('');
  }


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    let total = 0;
    let counter = 0;
    for (let i = 0; i < marks.length; i++) {
      counter++
      total = total + marks[i];
    }
    return Math.floor(total/counter);
  }


// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
//Don't get too caught up on character limit


reverse = a => {b = [];
    for (i = 0; i < a.length; i++) {
      b.unshift(a[i]);
    } return b;
    };

    //shortest I could get it