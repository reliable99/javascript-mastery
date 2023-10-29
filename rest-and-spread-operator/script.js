const add = (a, b) => {
  return a + b;
};

console.log(add(5, 9));

// we can make our function to accept as many params we want by using the rest operator, the syntax is simply three dots (...)
// rest operator: The rest parameter syntax allows us to represent an indefinite number of arguments as an array
const sum = (...args) => {
  return args.reduce((acc, val) => acc + val);
};

console.log(sum(2, 3, 4, 5, 6));

// spread operator: The spread operator takes out the values of an object or an array.
// we can use it if we have an array

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];
console.log(newNumbers);
console.log(numbers);

const object = { name: "ade", age: "76" };
const object2 = { ...object, name: "babe" };
console.log(object);
console.log(object2);
