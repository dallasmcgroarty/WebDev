/******************
 * coding challenge 3
 */

var bills = [124, 48, 268];
function tipCalculator (price) {
  if (price < 50) {
    return price * 0.2;
  } else if (price >= 50 && price < 200) {
    return price * 0.15;
  } else {
    return price * 0.1;
  }
};

var tips = [];

for (var i = 0; i < bills.length; i++) {
  tips.push(tipCalculator(bills[i]));
  bills[i] = bills[i] + tips[i];
}

console.log(tips);
console.log(bills);
