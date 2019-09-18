var css = document.querySelector('h3');
css.textContent = 'linear-gradient(to right, rgb(132, 40, 215) , rgb(255, 0, 0));';
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var btn = document.getElementById('random-btn');

var body = document.getElementById('gradient');

// function to generate a random hex number
function generateHex () {
  var letters = '0123456789ABCDEF'.split('');
  var hex = '#';
  for (var i = 0; i < 6; i++) {
    hex += letters[Math.round(Math.random() * 15)];
  }
  return hex;
}

// generates random background colors
function randomBackground () {
  color1.value = generateHex();
  color2.value = generateHex();
  // call set hexToRgb to convert hex values to rgb
  setGradient(hexToRgb(color1.value), hexToRgb(color2.value));
}

// converts hex to rgb
function hexToRgb (hex) {
  hex = hex.substring(1, hex.length + 1);
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function setGradient (col1, col2) {
  body.style.background = 'linear-gradient(to right, ' +
  col1 + ', ' +
  col2 + ')';
  css.textContent = body.style.background + ';';
}

color1.addEventListener('input', function () {
  setGradient(color1.value, color2.value);
});

color2.addEventListener('input', function () {
  setGradient(color1.value, color2.value);
});

btn.addEventListener('click', randomBackground);
