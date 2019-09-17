/* JavaScript is light-weight, OOP  language
Create dynamic websites and interactivity
traditionally client-side, but now sever size with nodejs
React and Angular frameworks
*/
/*
var firstname = 'John';
console.log(firstname);

var age = 28;

/*
5 Data types:
1. Number
2. String
3. Boolean
4. Undefined - no data in variable yet
5. Null - doesn't exist

Javascript supports dynamic typing
*/
/*
var fullAge = true;
if (fullAge) {
  console.log(age);
}

var job;
console.log(job);

job = 'Teacher';
console.log(job);

/****************
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/********************
 * Basic Operators
 */
/*
var year, ageJohn, ageMark;
year = 2018;
ageJohn = 28;
ageMark = 33;

var yearJohn = year - ageJohn;
var yearMark = year - ageMark;
console.log(yearJohn + ' ' + yearMark);

// Math Operators
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);

/*******************
 * Operator Precedence
 */
/*
var now = 2019;
var yearJohn = 1999;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

/********************
 * If / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' is single');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married');
}

/*******************
 * Boolean logic
 */
/*
var firstName = 'John';
var age = 15;

if (age < 13) {
  console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager');
} else {
  console.log(firstName + ' is a man');
}

/*************************
 * Ternary Operator and Switch Statements
 */
/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer')
  : console.log(firstName + ' drink juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
} */
/*
// switch statement
var job = 'driver';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber');
    break;
  case 'designer':
    console.log(firstName + ' designed great websites');
    break;
  default:
    console.log(firstName + ' does nothing');
}

age = 31;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man');
    break;
  default:
    console.log(firstName + ' is a man');
}

/*************************
 * Truth and Falsey values
 */

// falsey: undefined, null, 0, '', NaN
// truthy: not falsey values
/*
var height;
height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable is undefined');
}

// Equality operators
if (height == '23') {
  console.log('the == operator does type coercion!');
}

/********************
 * Functions
 */
/*
function calculateAge (birthyear) {
  return 2019 - birthyear;
}

var ageJohn = calculateAge(1995);
var ageTom = calculateAge(1993);
var ageBob = calculateAge(1990);

console.log(ageJohn, ageTom, ageBob);

function yearsUntilRetirement (year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years');
  } else {
    console.log(firstName + ' is already retired');
  }
}

yearsUntilRetirement(1990, 'John');

/********************
 * Function statements and Expressions
 */
/*
// function expression
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives for uber';
    case 'designer':
      return firstName + ' designs great websites';
    default:
      return firstName + ' does some other job';
  }
};

console.log(whatDoYouDo('teacher', 'john'));
console.log(whatDoYouDo('driver', 'mark'));
console.log(whatDoYouDo('retired', 'bob'));

// expression always returns a value
// statements dont have to return a value

/******************
 * Arrays
 */
/*
// initialize array
var names = ['John', 'Mark', 'Jane'];
var years = new Array([1990, 1969, 1948]);

console.log(names[0]);
console.log(names);
console.log(names.length);

// mutate array data
names[1] = 'Bob';
console.log(names);
names[names.length] = 'Mary';
console.log(names);

// object
const person = {
  'name': 'Bob',
  'age': 23
};

var people = [person];

for (var item in people) {
  console.log(people[item]);
}

var john = ['John', 'Smith', 1990, 'teacher', false];
// add to end
john.push('blue');
// add to back
john.unshift('Mr.');
console.log(john);

// delete last element
john.pop();
// delete first element
john.shift();
console.log(john);

// returns index of the value
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John IS a designer';
console.log(isDesigner);

/******************
 *Object and Properties
 */
