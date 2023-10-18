console.log("change string case");

// In this lesson, we're going to learn how we can change the case of a string. What is the case? You have definitely heard about upperCASE and lowerCASE letters. That's it!

// In JavaScript, we have only two, really simple and straight forward methods for changing the character case, and they are:

// string.toLowerCase() string.toUpperCase()

// to lower case
const mixedString = "Hello, How are you";
const lowerCaseString = mixedString.toLowerCase();
console.log(lowerCaseString);

// to lower case
const capitalStringCase = "HELLO, HOW ARE YOU";
const changeToLowerCase = capitalStringCase.toLowerCase();
console.log(lowerCaseString);

// to upper case

const lowerStringCase = "hello, how are you";
const changeToUpperCase = lowerStringCase.toUpperCase();
console.log(changeToUpperCase);
