console.log("Truty and falsy values");

// In JavaScript, we also have something known as truthy values and falsy values.

// Truthy expressions always evaluate to boolean 'true'

//and falsy evaluate to boolean value 'false'

// The easiest way to understand the truthy and falsy value is to memorise the falsy values, there are only six falsy value and all the other ones are truthy

//falsy values
// 1- false, 0, '', null, undefined, NaN
// everything else in javascript is truthy value

if (false) {
  console.log("come in");
} else {
  console.log("go out");
}

if (0) {
  console.log("come in");
} else {
  console.log("go out");
}

if ("") {
  console.log("come in");
} else {
  console.log("go out");
}

if (null) {
  console.log("come in");
} else {
  console.log("go out");
}

if (NaN) {
  console.log("come in");
} else {
  console.log("go out");
}

if (undefined) {
  console.log("come in");
} else {
  console.log("go out");
}

if (1) {
  console.log("come in");
} else {
  console.log("go out");
}

if ("go") {
  console.log("come in");
} else {
  console.log("go out");
}

// example

const dogs = 5;

if (dogs) {
  console.log(`you have ${dogs} dogs`);
} else {
  console.log("you have no dogs");
}
