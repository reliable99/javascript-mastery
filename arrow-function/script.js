console.log("arrow function");

// Arrow function: They have only one difference from "normal" functions. Arrow functions do not create their own `this` value  is a special JavaScript reserved keyword, we're going to explain it later in more detail. The only thing you should know right now, is that arrow functions do not create their own "this" value. In 99% percent of the cases we're not even going to need it, so you'll see me write arrow functions almost always! \

// 'this' value

const square = (number) => {
  return number * number;
};

const result = square(5);
console.log(result);

const add = (number) => {
  return number + number;
};

const result1 = add(87);
console.log(result1);

// we can also return it instantly in one line

const sub = (a, b) => a - b;
const result2 = sub(89, 90);
console.log(result2);
