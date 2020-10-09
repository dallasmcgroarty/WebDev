(function (window) {

  // reformat date function
  function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    retStr = userDate.split('/')
    retStr = retStr[2] + hasZero(retStr[0]) + hasZero(retStr[1])
    return retStr
  }
  console.log(formatDate("1/31/2014"));

  // remove element when clicked on button
  function setup() {
    var p = document.getElementsByClassName('remove');
    console.log(p);
    for (var i=0;i<p.length;i++) {
      console.log(i);
      p[i].addEventListener("click", function (e) {
        console.log(e.target);
        e.target.parentElement.remove();
      });
    }
  };
  setup();

  // remove property in an object if prop is present
  function removeProperty(obj, prop) {
    if (prop in obj) {
      delete obj[prop];
      return true;
    }
    return false;
  }

  removeProperty(document.getElementById("me"));

  function wrap (execute) {
    // Return modified function
    try {
      return execute.apply(this,arguments);
    } catch(err) {
      return 'null';
    }
  }
  
  var errorExec = wrap(function () {
    throw new Error('Error');
  });
  var resultExec = wrap(function () {
    return "Result";
  });
  
  console.log(errorExec); // Should output null
  console.log(resultExec); // Should output "Result"

  function diagonal() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  }
   console.log(diagonal());
})(window);

// helper function to check single digits
function hasZero(str) {
  if (str.length == 1) {
    return "0" + str;
  }
  else {
    return str
  }
}

// for buttons!!
// toggle on class color
var btns = document.getElementsByTagName('button');

for (const btn of btns) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.parentNode.parentNode.classList.toggle('color');
    //let divName = e.target.getAttribute('data-btn');
    //let div = document.getElementsByClassName(divName);
    //div[0].classList.toggle('color');
    console.log('pepe');
  })
}


// for input testing
input = document.getElementById('input');

input.addEventListener('keyup', function (e) {
  if (e.code === 'Enter') {
    var text = document.getElementById('text');
    text.innerText = e.target.value;
    e.target.value = '';
  }
  e.preventDefault();
});

var arr1 = [1,2,3,4,5];

function duplicate (arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    arr.push(arr[i]);
  }
  return  arr;
};

console.log(duplicate(arr1));

var body = document.querySelector('body');

function createButton () {
  for(var i = 1; i <= 20; i++) {
      var btn = document.createElement('button');
      btn.innerText = i;
      btn.className = 'row-btn';
      btn.addEventListener('click', function (e) {
          alert(e.target.innerText);
      });
      body.appendChild(btn);
  }    
};

createButton();