console.log("array.find method");

// array find : it find an element in the array that matches a certisfy the  condition. most especially it returns the first value that certisfy the condition

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const value = numbers.find((number) => number > 5);

console.log(value);

// second example
const states = ["Alaska", "California", "Colorado", "Hawaii"];

const state = states.find((state) => state.startsWith("C"));

console.log(state);

const numbers2 = [11, 12, 13, 14, 15, 16, 17];
const value2 = numbers2.find((number1) => number1 < 12);

console.log(value2);

const countries = ["Nigeria", "Ghana", "Algeria", "Morroco"];
const start = countries.find((country) => country.startsWith("N"));
const names = [ade, kunle, dele, iyabo]
const start1 = names.find((name) => name.startsWith("a")) 
console.log(start1)

console.log(start);

const books = ["Things fall apart", "Legend", "Piouse wife"];
const interesting = books.find((book) => book.startsWith("T"));
console.log(interesting);

const graduands = ["aisha", "ayo", "abdullah", "kola"];
const result = graduands.find((graduand) => graduand.startsWith("a"));
console.log(result);
