console.log("if statement");

// You might have read the title of the current section, "Logic and Control Flow", and you might have wondered what does that mean. It's much simpler than what it may seem.

// In every programming language, we have something known as an if statement.

// If statement is consisted of a condition that is evaluated to either true or false and of a block of code. If the condition is evaluated to true, then the code inside of the block will run, otherwise, it's going to be skipped. It's that simple. Let's explore it in an example:

// Let's say that there's a night club that only allows people over the age of 18 to enter.

const age = 18;

if (age < 18) {
  console.log("you may enter");
} else if (age === 18) {
  console.log("you just turned 18 may enter");
} else {
  console.log("grow up");
}

const number = 45;

if (number < 45) {
  console.log("not up to");
} else if (number === 45) {
  console.log("let them come in");
} else {
  console.log("ypu may walk away");
}

const student = 34;
if (student > 34) {
  console.log("you are more than 34");
} else if (student === 36) {
  console.log("they are not my students");
} else {
  console.log("they are my students");
}

const cars = 300;

if (cars === 400) {
  console.log("its new");
} else if (cars === 301) {
  console.log("new model");
} else {
  console.log("its plenty");
}

const books = 80;
if (books < 80) {
  console.log("its not plenty");
} else if (books >= 80) {
  console.log("They are plenty");
} else {
  console.log("its my pleasure reading it");
}
