// advanced looping in Javascript

const basket = ['apple', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

basket.forEach(item => {
  item = 'i like ' + item;
  console.log(item);
});

// for of loop
// iterating - over arrays, strings
for (const item of basket) {
  console.log(item);
}

// for in loop - can loop through properties in objects
// enumerating here, not iterating.
for (const item in detailedBasket) {
  console.log(item + ': ' + detailedBasket[item]);
}
// ********
// Javascript is a single-threaded language that can be non-blocking
// it has one call stack, and does one thing at a time
// to not block the single-thread it can be asynchronous with call back functions
// call back functions run in the background
