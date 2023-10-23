// Dot notation: Dot notation allows us to retrieve some values from an object, for example, if we want to get only the firstName of our person, we can do the following:

const person = {
  firstName: "dele",
  lastName: "deolu",
  age: "20",
};
console.log(person);
console.log(person.lastName);

// Square Bracket Notation: There is also a second way to retrieve properties from an object, it is called square bracket notation.

// Square bracket notation, like the dot notation, also allows us to access properties of an object:

const student = {
  name: "dada",
  class: "jss2",
  age: "23",
};

console.log(student[`class`]);
