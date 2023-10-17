console.log("params vs argument");

// parameters are used when defining a function, they are the names created in the function definition. Parameter is like a variable that is only meaningful inside of this function. It won't be accessible outside of the function.

const sayI = (name, age) => {
  console.log(` ${name} is ${age} years old`);
};
sayI("joe", 18);

const ade = (name, info) => {
  console.log(`${name} is a ${info} of dlt africa`);
};
ade("muhammad", "student");

const add = (a, b) => {
  return a + b;
};

const result = add(3, 5);
console.log(result);

// arguments are real value passed when making a functon call
