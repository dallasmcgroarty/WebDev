/* eslint-disable no-useless-constructor */
// advanced object concepts in javascript

// reference type
// assigning an object to another object references that object, aka points
// to the same place in memeory, so updating either changes both
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope

function b () {
  let a = 4;
}
// console.log(a); // a is not in this scope

// context is where we are within an object

const object4 = {
  a: function () {
    console.log(this);
  }
};

// instantiation

class Player {
  constructor (name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce () {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
};

class Wizard extends Player {
  constructor (name, type) {
    super(name, type);
  }
  play () {
    console.log(`WEEEEE I'm ${this.name} the ${this.type}`);
  }
}

const player1 = new Player('Tom', 'Pitcher');
console.log(player1.introduce());

const wizard1 = new Wizard('Billy', 'Healer');
console.log(wizard1.play());
console.log(wizard1.introduce());

// cloning objects so two objects are referencing the same object
// these cloning methods are shallow, and do not work on objects within objects
let obj = { a: 'a', b: 'b', c: 'c' };
let obj1 = { a: 'b', b: { c: 'hello there!' } };
let clone = Object.assign({}, obj);
// or use, let clone = { ...obj };
obj.c = 5;
console.log(clone); // clone doesnt get 5 assigned to c
console.log(obj);

// creates deep copy of an object
let superClone = JSON.parse(JSON.stringify(obj1));
console.log(superClone);
console.log(superClone.b.c);
