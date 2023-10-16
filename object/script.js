console.log("object");
// object is the most important of data types and it forms the building block of modern javascript

// the object  type is special. All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

// in contrast object are use to store collection of data in more complex entities

// what we need to know now is that object is the simplest form that is used to store variable for example lets create a variable of name and age

// const name = "ade";
// const age = 21;

// these variables in the current state are in no way related to each other

// we can create object called person and put them together

const person = {
  name: "ade",
  age: 30,
};
console.log(person);

// The one last thing that we can mention is that we can now extract specific values from that object using the dot notation:

console.log(person.name);

// There are many other kinds of objects in JavaScript:

// 1-Array: to store ordered data collections
const arr = [1, 2, 3, 4];
console.log(arr);

const arr1 = ["ade", " kunle", "bola"];

console.log(arr1);

// 2- date: to store the information about the date and time

const date = new Date();
console.log(date);

const cars = {
  volvo: 12,
  model: 2021,
};

console.log(cars.volvo);
