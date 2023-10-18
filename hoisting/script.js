console.log("hoisting");

// What is hoisting?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

// Basically, when Javascript compiles all of your code, all variable declarations using var are hoisted/lifted to the top of their functional (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”.

// Variable Hoisting
// In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined

console.log(typeof name); // undefined
// In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.

console.log(name); // referenceError...
// Key thing to note in regards to hoisting is that the only thing that gets moved to the top is the variable declaration, not the actual value given to the variable.

console.log(myString);
var myString = "test";

// example1

var hoist;

console.log(hoist); // undefined

hoist = "The variable has been hoisted.";

// example 2
function hoist() {
  var message;

  console.log(message);

  message = "Hoisting is cool!";
}

hoist(); // undefined

// Only declarations are hoisted
// JavaScript only hoists declarations, not initialisations. If a variable is declared and initialised after using it, the value will be undefined. For example:

// To avoid this pitfall, we would make sure to declare and initialise the variable before we use it:

function hoist() {
  var message = "Hoisting is cool!";

  return message;
}

hoist(); // Hoisting is cool!
