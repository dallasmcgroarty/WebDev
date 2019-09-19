// ******** advanced functiosn in javascript

const first = () => {
  const greet = 'Hi!';
  const second = () => {
    // alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// ******* Closures - a function ran. the functions executed. it's not gunna execute again
// but it will remember the references to those variables so child scope sees parents scope

// ***** Currying - break function with multiple arguments into single arguments

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(4));
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(5));

// ***** Compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

console.log(compose(sum, sum)(5));

// ****** Avoiding side effects, functional purity

// example of a side effect
// function changes outside variabe, avoid that
// always return a value of function without changing outside variables
let a = 1;
function b () {
  a = 2;
}
b();
console.log(a);
