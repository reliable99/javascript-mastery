console.log("arrays in detail");

// In programming, quite often we will need an ordered collection, where we have a 1st, 2nd, 3rd element and so on. For example, we need that to store a list of something: users, items, elements etc.

// declaration of array
// the most important part is the brackets

// const months = ["januaru", "February", "March", "April"];
// console.log(months);

// Array elements are numbered, starting with zero

// We can get an element by its number in square brackets:

const books = ["puious wife", "things fall apat", "date", "call"];
console.log(books[2]);

// We can replace an element:

const books1 = ["puious wife", "things fall apat", "date", "call"];
books1[2] = "talle";
console.log(books1);

const book = ["puious wife", "things fall apat", "date", "call"];
book[2] = "pie";
console.log(book);

// add a new one to the array:

const names = ["abdullah", "soliu", "khadijah", "naheem", "anathe"];
names[5] = "qodri";
console.log(names);

// The total count of the elements in the array is its length:

const names1 = ["abdullah", "soliu", "khadijah", "naheem", "anathe"];
console.log(names1.length);

// An array can store elements of any type:

const values = ["Apple", { name: "ade" }, true, () => {}];

console.log(values);

// You're often going to find yourself needing to loop through all the elements of an array. That's where the for loop we've learned comes in handy:

const months = ["januaru", "February", "March", "April"];
for (i = 0; i < months.length; i++) {
  console.log(months[i]);
}

const students = ["muhammad", "kanas", "suprem", "qodri", "roqeeb"];

for (i = 0; i < students.length; i++) {
  console.log(students[i]);
}
