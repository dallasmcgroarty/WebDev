/***************
 * Coding challenge 2
 */

var johnScores = [110, 120, 103];
var mikeScores = [116, 94, 123];

var johnAvg = 0;
var mikeAvg = 0;

for (var j = 0; j < johnScores.length; j++) {
  johnAvg += johnScores[j];
}

for (var m = 0; m < mikeScores.length; m++) {
  mikeAvg += mikeScores[m];
}

johnAvg /= johnScores.length;
mikeAvg /= mikeScores.length;

switch (true) {
  case johnAvg > mikeAvg:
    console.log('Johns team won with a score of ' + johnAvg);
    break;
  case mikeAvg > johnAvg:
    console.log('Mikes team won with a score of ' + mikeAvg);
    break;
  default:
    console.log('Mike and John tie with scores of ' + johnAvg);
}

