// switch statement

function moveCommand (direction) {
  var whatHappens;
  switch (direction) {
    case 'forward':
      whatHappens = 'you encounter a monster';
      break;
    case 'back':
      whatHappens = 'you arrived at home';
      break;
    case 'right':
      whatHappens = 'you found a river';
      break;
    case 'left':
      whatHappens = 'you run into a troll';
      break;
    default:
      whatHappens = 'Please enter a valid direction';
  }
  return whatHappens;
}
