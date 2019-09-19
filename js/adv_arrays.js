// Advanced arrays in javascript

const array = [1, 2, 10, 16];

const double = [];

// forEach does some actions on array elements, but doesnt transform the array
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log('forEach', double);

// ***** map, filter, reduce

// *** map
// returns array of doubles using map, transforms the array
const mapArray = array.map(num => num * 2); // or use => {return num * 2}

console.log('map', mapArray);

// *** filter

const filterArray = array.filter(num => num > 5); // or use => {return num > 5}

console.log('filter', filterArray);

// *** reduce

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

console.log('reduce', reduceArray);
