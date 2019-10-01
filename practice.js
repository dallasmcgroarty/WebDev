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
