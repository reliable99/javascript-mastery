// Objects are the most important data-type and building block for modern JavaScript.

//  Objects are quite different from JavaScript’s primitive data-types (numbers, strings, booleans...) in the sense that while these primitive data-types all store a single value, objects can store multiple.

//  Objects in JavaScript can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

// In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a cooler, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

// So what are objects, why do we need them and how can we declare them?

// In simple words, object is an unordered collection of related data in form of key and value pairs.

// Let's create a simple object so that we can see everything in action

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

//  let's say that our person has a car, that car, can again be an object, because there are a lot of properties we want to describe that car wit

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  car: {
    year: 2015,
    color: "Red",
  },
};
