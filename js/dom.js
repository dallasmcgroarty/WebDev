// Javascript DOM manipulation
// script for shoplist.html
/********
 **Dom Selectors
 */

var liElems = document.querySelectorAll('li');

liElems.forEach(function (elem) {
  elem.style.background = 'yellow';
});

document.querySelector('.second').classList.add('change-font');

var liElem = document.querySelector('li');
// add css class to an element
liElem.classList.add('done');

// toggle css class on html elements (turns on or off)
liElem.classList.toggle('done');

liElem.classList.toggle('done');

var btn = document.getElementById('enter');
var input = document.getElementById('enter-item');
var ul = document.querySelector('ul');

function createListElement () {
  var li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = '';
}

function addOnClick () {
  if (input.value.length > 0) {
    createListElement();
  }
}

function addOnEnter (e) {
  if (e.which === 13 && input.value.length > 0) {
    createListElement();
  }
}

btn.addEventListener('click', addOnClick);

input.addEventListener('keypress', addOnEnter);
