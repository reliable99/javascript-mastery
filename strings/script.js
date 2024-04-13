// String: its a data type used to represent text

const exampleString = "hello, world";
console.log(exampleString);

// types of strings

// 1- single quotes

const singleQuotes = "hello";
console.log(singleQuotes);

// 2- double quotes
const doubleQuotes = "double";
console.log(doubleQuotes);
//note there is no different  between single/duoble quotes, they are also called simple string, they are not complex

// 3- backticks = ``

const backticks = `hello!!, ${doubleQuotes}`;
console.log(backticks);
// note: backticks is a complex strings because it provide extended functionality that allow us to embed variable and expressions into a string by wrapping them into a dollar sign $ and {}

const name1 = "adekunle";
const name2 = `sodeq, ${name1}`;
console.log(name2);

const age = 21;
const name = `my name is sodeeq muhmin i am ${age} years old`;
console.log(name);

const add = `${4 + 4}`;
console.log(add);

const add2 = `${5 + 7}`;

console.log(typeof add2);

const class1 = 4 
console.log(class1)
