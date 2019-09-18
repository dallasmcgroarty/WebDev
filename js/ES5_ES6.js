// let + const

// let replaces var, let makes a new scope if inside curly brackets
// keeps you from overwriting a variable

// const makes the variable not able to change from when it was created/initialized
// const objects allow for properties to change but not the object itself
const player1 = {
  name: 'bobby',
  experience: 100,
  expertLevel: false
};

player1.expertLevel = true;
console.log(player1);

let experience = 100;
let expertLevel = false;

if (experience > 90) {
  let expertLevel = true;
  console.log(expertLevel);
}
console.log(expertLevel);

const obj = {
  player: 'dallas',
  exp: 100,
  level: false
};

const { player, exp } = obj;
let { level } = obj;

console.log(player, exp, level);

// *********** object properties

const name = 'john snow';

// brackets cause whatevers inside to evaluate itself
const obj1 = {
  [name]: 'hello',
  [1 + 2]: 'hihi'
};

console.log(obj1);

// can assign key, value pairs by just inlcuding the variables
const a = 'Simon';
const b = true;
const c = {};

const obj2 = {
  a,
  b,
  c
};

console.log(obj2);
