console.log("function calling");

// Every function in JavaScript returns 'undefined' unless otherwise specified. That means, if we don't say what do we want our function to return, it is always going to return undefined.

const add = (a, b) => {
  return a + b;
};

const result = add(7, 9);
console.log(result);

// Another important rule of the return statement is that it stops function execution immediately.

const multi = (a, b) => {
  return a * b;
  return a + b;
};

const result1 = multi(71, 18);

console.log(result1);

const test = () => {
  return true;
  return fale;
};

const bool = test();
console.log(bool);

// The first return statement immediately stops execution of our function and causes our function to return `true`
