// We've seen all the problems we could possibly encounter if we tried changing values of an objet copied by a reference. So how can we properly copy it and remove a reference? How can we create a complete clone of the object?

// Cloning Arrays:
// 1st way: Spread Operator: Spread operator is a newer addition to JavaScript. Before using it to clone an object without keeping a reference, let's first explore how it works.

const numbers = [1, 2, 3, 4, 5];
// How could we use the spread operator on this array?

// Spread syntax allows us to "spread" the values of strings, objects and arrays.

// below is the syntax
console.log(...numbers); // We get back all the values from the array individually, one after the other, they got taken out of the array.
