// javascript objects

// function inside an object is called a method
var user = {
  name: 'Dallas',
  age: 24,
  hobby: 'Lifting',
  isMarried: false,
  spells: ['fireblast', 'icebolt', 'shadowbomb'],
  shout: function () {
    console.log('AHHHHH!');
  }
};

var list = [
  {
    username: 'Tom',
    password: 'secret'
  },
  {
    username: 'jess',
    password: '123'
  }
];

console.log(user);

user.favoriteFood = 'spinach';

console.log(user);
console.log(user.spells);
console.log(list[0].password);
console.log(user.shout());
