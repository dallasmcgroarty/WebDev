// **** ES7
// includes function

const pets = ['cat', 'dog', 'rat'];

console.log(pets.includes('dog'));
console.log(pets.includes('bird'));

// exponential operator

const square = (x) => x * x; // should be x ** 2 , but doesnt work for me rn
console.log(square(5));

// **** ES8
// padStart() function
// padEnd function

console.log('Hello'.padStart(10)); // add spacing including the length of string
console.log('Hello'.padEnd(10)); // same here but at end

// valid ending comma
const fun = (
  a, 
  b, 
  c, 
  d,
  ) => {
  console.log(a);
};

fun(1, 2, 3, 4);

// ******** Object.values, Object.entries, Object.keys

let obj = {
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
  console.log(value);
})

Object.entries(obj).forEach(value => {
  console.log(value);
})

// create new obj with usernames as their value + their index
let obj1 = Object.entries(obj).map(value => {
  return value[1] + value[0].replace('username', '');
})

console.log(obj1);