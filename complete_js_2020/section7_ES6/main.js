/////////////
// Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2020 - year;
}

// ES6 
// logging strings with variables
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. 
Today he is ${calcAge(yearOfBirth)} years old.`);

// startswith, endswith, includes, repeat

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes('oh'));
console.log(firstName.repeat(4));

///////////////////////
// Arrow functions

const years = [1990,1965,1982,1937];

let ages = years.map(el => {
  return 2020 - el;
});

ages = years.map((el,index) => `Age element ${index+1}: ${2020-el}.`);
console.log(ages);

ages = years.map((el,index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index+1}: ${age}.`
})

console.log(ages);


///////////////////////
/// arrow function part 2

const box = {
  color: 'green',
  position: 1,
  clickme: () =>  {
    document.querySelector('.green').addEventListener('click', () => {
      var str = `This is box number ${this.position} and it is ${this.color}`;
      alert(str);
    });
  }
}

box.clickme();

function Person(name) {
  this.name = name;
}

var friends = ['Bob','Jane','Mark'];
Person.prototype.myFriends = function (friends) {
  let arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
};

new Person('Timmy').myFriends(friends);

///////////////////////////
// destructuring

const [name, year] = ['John', 26];
console.log(name,year);

const obj = {
  firstName1: 'Timmy',
  lastName1: 'Smith'
};

const {firstName1,lastName1} = obj;
console.log(firstName1,lastName1);

const {firstName1: a, lastName1: b} = obj;
console.log(a,b);

const calcAgeRetire = year => {
  const age = new Date().getFullYear() - year;
  return [age, 65-age];
}

const [age1,retire] = calcAgeRetire(1990);
console.log(age1,retire);


//////////////////////////////
// Arrays

const boxes = document.querySelectorAll('.box');

boxes.forEach(e => {
  e.style.backgroundColor = 'yellow';
})

for (const e of boxes) {
  if (e.className.includes('green')) {
    e.textContent = 'I want to be green!';
  }
}

ages = [16,20,18,17,21];

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

//////////////////////////
// Spread operator
// can use to pass array to function that takes multiple arguments
const addFourAges = (a,b,c,d) => {
  return a + b + c + d;
}

var sum1 = addFourAges(1,2,3,4);
console.log(sum1);

// ES6
ages = [2,5,4,1]
const sumFour = addFourAges(...ages);
console.log(sumFour);

// can use spread to concat arrays
const familySmith = ['John','Mark','Jane'];
const familyMiller = ['Mary','Bob','Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

// for dom selection / nodelists
const h = document.querySelector('h1');
const boxes2 = document.querySelectorAll('.box');
const all = [h, ...boxes];

all.forEach(e => {
  e.style.color = 'red';
});