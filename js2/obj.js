// function constructor

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  /* this.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
  };
  */
};

var john = new Person('John', 1995, 'Teacher');
console.log(john);

Person.prototype.calculateAge = function () {
  console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';
var jane = new Person('Jane', 1990, 'Designer');

var mark = new Person('Mark', 1965, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
