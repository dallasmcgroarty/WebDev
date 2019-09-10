var database = [
  {
    username: 'dallas',
    password: 'secret'
  },
  {
    username: 'Tony',
    password: 'mypass1s'
  }
];

var newsFeed = [
  {
    username: 'Bobby',
    timeline: 'So tired from all that learning'
  },
  {
    username: 'Sally',
    timeline: 'Javascript is soo cooool!'
  },
  {
    username: 'Billy',
    timeline: 'I like pie!'
  }
];

var userNamePrompt = prompt('What\'s your username?');
var passwordPrommpt = prompt('What\'s your password?');

function isUserValid (username, password) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === username &&
      database[i].password === password) {
      return true;
    }
  }
  return false;
}
function signIn (username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert('Sorry, wrong username or password!');
  }
  // if (username === database[0].username && password === database[0].password) {
  //   console.log(newFeed);
  // } else {
  //   alert('Sorry, wrong username or password');
  // }
};

signIn(userNamePrompt, passwordPrommpt);
