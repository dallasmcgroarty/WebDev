// practice questions

/*********
 * Practice Questions
 */

/*****
  * Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
  * make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove)
  * should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
  * Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

const orderIndividualArrays = (array) => {
  array.sort((a, b) => a - b);
  let retArray = [];
  let dupeArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      dupeArray.push(array[i]);
    } else if (array[i] !== array[i + 1]) {
      if (dupeArray.length > 0) {
        dupeArray.push(array[i]);
        retArray.push(dupeArray);
        dupeArray = [];
      } else {
        retArray.push(array[i]);
      }
    }
  }
  return retArray;
};

const answer = orderIndividualArrays([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]);

answer.forEach(item => console.log(item));

/****
 * Question 2:
 * Write a javascript function that takes an array of numbers and a target number.
 * The function should find two different numbers in the array that, when added together,
 * give the target number. For example: answer([1,2,3], 4)should return [1,3]
 */

const sumOfTwo = (array, target) => {
  if (array.length <= 1) {
    return 'Empty array or only 1 item in array';
  }

  let retArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        retArray.push(array[i], array[j]);
        return retArray;
      }
    }
  }
  return 'No two numbers add to target value';
};

const answer1 = sumOfTwo([1, 2, 3, 4, 5], 5);
console.log(answer1);

/*******
 * question 1 involves reading a file of parenthises, ( is up and ) is down
 * determine what floor santa is on at the end of input
 **
 * question 2 involves the same concept as question 1 except, return the floor number
 * aka position in the array where santa first goes into the basement (floor -1)
 **
 * to use require and run these functions. In terminal use:
 * > node practice.js
 **
 * node lets you run js anywhere and not just in the browser
 *
 */
const fs = require('fs');

function question1 () {
  fs.readFile('./santa.txt', (err, data) => {
    if (err) throw err;
    console.time('timer');
    const parenthesis = data.toString();
    const parenthArray = parenthesis.split('');
    let count = 0;
    for (let i = 0; i < parenthArray.length; i++) {
      if (parenthArray[i] === '(') {
        count += 1;
      } else if (parenthArray[i] === ')') {
        count -= 1;
      }
    }
    console.timeEnd('timer');
    console.log('floor', count);
  });
}

question1();

function question2 () {
  fs.readFile('./santa.txt', (err, data) => {
    if (err) throw err;
    console.time('timer1');
    const parenthesis = data.toString();
    const parenthArray = parenthesis.split('');
    let count = 0;
    for (let i = 0; i < parenthArray.length; i++) {
      if (count === -1) {
        console.timeEnd('timer1');
        console.log(i);
        return;
      }
      if (parenthArray[i] === '(') {
        count += 1;
      } else if (parenthArray[i] === ')') {
        count -= 1;
      }
    }
  });
}

console.log(question2());

var startTime, endTime, timer, refresh;
timer = document.getElementById('timer');

function start() {
  startTime = new Date();
  refresh = setInterval( function () {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
    // get seconds 
    var seconds = Math.round(timeDiff);
    document.getElementById('timer').innerText = seconds.toString();
  }, 1000);
};

function end() {
  clearInterval(refresh);
}