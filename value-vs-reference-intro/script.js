console.log("value vs reference");

// JavaScript differentiates Data Types on:
// Primitive values (Number, String, Boolean, Null, Undefined...)
// Complex values (Objects, Arrays)

// Copying Primitive Values:
// When copying primitive values, JavaScript is going to behave as we expect it to. You just need to see what was the value of the variable at the time of the assignment. Let me give you a few real examples:

// Copying Numbers
let x = 1;
let y = x;

x = 2;

console.log(x); // 2
console.log(y); // 1

// Copying Strings

let firstPerson = "ade";
let secondPerson = firstPerson;

firstPerson = "dele";
console.log(firstPerson); // dele
console.log(secondPerson); // ade

// Copying Complex Values:

// When copying complex values, JavaScript engine is not going to behave as you would initially think it would. Let me give you an example:

// array
const animals = ["lion", "cat"];
const secondAnimal = animals;

animals.push("leopard");
console.log(animals); // lion, cat, leopard
console.log(secondAnimal); // lion, cat, leopard

// What?! Again, this doesn't look right. In the next lecture, we're going to explain why does this happen. It's going to make perfect sense! :)

// Copying Objects
const person = { firstName: "sodeeq", lastName: "akofe" };
const otherPerson = person;
person.firstName = "Ayoade";
console.log(person);
console.log(otherPerson);
