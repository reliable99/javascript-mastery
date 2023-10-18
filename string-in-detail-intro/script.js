console.log("string in details intro");

// In JavaScript, and in any programming language for that matter, we need a way to store text.

// In JavaScript we use strings to store text. String is nothing more than a primitive data type.

// How can we create strings in JavaScript?

// There are a few ways:

const single = "This is a string written inside of single quotes.";
const double = "This is a string written inside of double quotes.";

const backticks = `This is a string written inside of double quotes.`;

console.log(single);
console.log(double);
console.log(backticks);
// Strings created with single and double quotes are the same. We can call them simple or basic strings. They simply represent some static textual value.

// Strings created with backticks on the other hand provide extended functionality. They are dynamic. They allow us to execute real JavaScript logic inside of them. Let me show you what I mean in an example:

const arith = `${2 + 2}`;
console.log(arith);
// you can only do this with backticks
const sum = (a, b) => {
  return a + b;
};
const total = `The sum is ${sum(2, 8)}`;

console.log(total);

// Backtick strings have one extra feature. We can span them accros multiple lines.
const numbers = `
	1
	2
	3
`;

console.log(numbers);

// If we tried doing this with basic single or double quote strings, we would get an error.
// if you try it with other string it wont work

// Let me ask you one question, how would the value of the following string look like?

// const greeting = 'Hi, I'm John';

// const add = "${2 + 2}";
// const plus = "${${2 + 2}";
// console.log(add, plus);
