document.querySelector('.menu-icon').addEventListener('click',function(e) {
  var left = document.querySelector('.left-side');
  if (left.style.display === 'none') {
    left.style.display = 'block';
    left.style.width = '100px';
  } else {
    left.style.display = 'none';
    left.style.width = '0px';
  }
})

function revStr(s) {
  var returnStr = '';
  var i = s.length-1;

  while (i >= 0) {
    returnStr += s[i];
    i-=1
  }

  return returnStr;
};

function createButton() {

  for(var i = 1; i <= 20; i++) {
    var btn = document.createElement('button')
    btn.innerText = i;
    btn.value = i;
    btn.addEventListener('click',function(e) {
      alert(e.target.value);
    })
    document.querySelector('body').appendChild(btn);
  }
};

function palindrome(s) {
  if (s.length <= 1) {
    return false;
  }
  var reverseStr = revStr(s);
  if (reverseStr === s) {
    return true;
  } else {
    return false;
  }
};

createButton();
console.log(revStr('what'));
console.log(palindrome('racecar'));