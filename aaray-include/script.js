// The array.includes() command checks if an array contains a certain value handed to it and returns "true" or "false" based on the result. For example, let's say we're a librarian looking for a particular book inside of a "bookshelf" array.

const numbers = [1, 2, 3];
const result = numbers.includes(2);
console.log(result);

const animals = ["dog", "cat", "rabbit"];
const pets = animals.includes("cat");
console.log(pets);

const students = ["abdullah", "biola", "kunle", "dimeji"];

if (students.includes("dimeji") === true) {
  console.log("you are a student");
} else {
  console.log("go out");
}

var bookshelf = [
  "Moby Dick",
  "Little Women",
  "The Great Gatsby",
  "Pride And Prejudice",
];
if (bookshelf.includes("Moby Dick") === true) {
  console.log("the book you were looking for was found");
} else {
  console.log("couldn't find the book, sorry. :c");
}

const books = ["light", "dark", "step"];
if (books.includes("dark") === false) {
  console.log("interesting");
} else {
  console.log("not interesting");
}

const nigeria = ["corruption", "theft", "plagiarsm"];

if (nigeria.includes("corruption") === true) {
  console.log("nigeria is bad ");
} else {
  console.log("nigeria is developing");
}
