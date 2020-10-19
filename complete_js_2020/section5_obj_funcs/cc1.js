/***************
 * Coding challenge 1
 */

var markWeight, johnWeight, markHeight, johnHeight;
markWeight = 200;
markHeight = 1.78;
johnWeight = 180;
johnHeight = 1.83;

var markBMI, johnBMI;
markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log('Marks\'s BMI is higher than John\'s');
} else {
  console.log('John\'s BMI is higher than Mark\'s');
}
