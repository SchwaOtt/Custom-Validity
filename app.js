/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');
/*
You'll probably find this function useful...
 */
submit.onclick = function () {

  var firstPassword = firstPasswordInput.value;
  var secondPassword = secondPasswordInput.value;
  var firstsMessages = [];
  var secondsMessages = [];

  if (firstPassword === secondPassword && firstPassword.length > 0) {
    if (firstPassword.length < 16) {
      firstsMessages.push("\nat least 16 characters");
    }
    if (firstPassword.length > 100) {
      firstsMessages.push("\nless than 100 characters");
    }
    if (!firstPassword.match(/[\!\@\#\$\%\^\&\*]/g)) {
      firstsMessages.push("\nmissing a symbol (!, @, #, $, %, ^, &, *)");
    }
    if (!firstPassword.match(/\d/g)) {
      firstsMessages.push("\nmissing a number");
    }
    if (!firstPassword.match(/[a-z]/g)) {
      firstsMessages.push("\nmissing a lowercase letter");
    }
    if (!firstPassword.match(/[A-Z]/g)) {
      firstsMessages.push("\nmissing an uppercase letter");
    }
    var illegalCharacters = firstPassword.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g)
    if (illegalCharacters) {
      illegalCharacters.forEach(function (illegalChar) {
        firstsMessages.push("includes illegal character: " + illegalChar);
      });
    }
  } else {
    secondsMessages.push("\npasswords must match");
  }

  if (firstsMessages.length === 1) {
    firstsMessages.splice(0, 0, "Please correct the following issue:\n");
  }
  if (firstsMessages.length > 2) {
    firstsMessages.splice(0, 0, "Please correct the following issues:\n");
  }

  if (secondsMessages.length === 1) {
    secondsMessages.splice(0, 0, "Please correct the following issue:\n");
  }
  if (secondsMessages.length > 2) {
    secondsMessages.splice(0, 0, "Please correct the following issues:\n");
  }

  firstPasswordInput.setCustomValidity(firstsMessages.join(""));
  secondPasswordInput.setCustomValidity(secondsMessages.join(""));

};
