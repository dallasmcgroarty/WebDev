// Javascript arrays

var list = ['tiger', 'cat', 'bear', 'bird'];
console.log(list[0]);

var numbers = [1, 2, 3, 4];
console.log(numbers);

var mixed = ['apples', 3, 'bob'];
console.log(mixed);

// array in array

var list1 = [
  ['tiger', 'cat', 'bear', 'bird'],
  ['bob', 'tom', 'sara']
];

console.log(list1[0][1]);
console.log(list1[1][1]);

// ****** Array methods ******

// shift method removes first element in an array
var test = ['tiger', 'cat', 'bear', 'bird'];

test.shift();
console.log(test);

// pop method removes last element in an array
test.pop();
console.log(test);

// push method adds an element to the end of the array
test.push('dog');
console.log(test);

// concat method adds a list to end of target list
var test1 = test.concat(['bee', 'deer']);
console.log(test1);
