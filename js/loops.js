// Javascript loops

var todos = [
  'clean room',
  'brush teeth',
  'exercise',
  'study',
  'eat healthy'
];

for (var i = 0; i < todos.length; i++) {
  todos[i] += '!';
  console.log(todos[i]);
}

var counter = 0;
while (counter < 10) {
  console.log(counter);
  counter++;
}

todos.forEach(function (todo, i) {
  console.log(todo, i);
});
