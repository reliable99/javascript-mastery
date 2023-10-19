console.log("array method");

// Aside from containing variables at indexes, an array contains a variety of premade functions with which you can manipulate it's data, like adding or removing elements at certain positions! Let's take a look at a few of the most basic ones right now

// Array push function adds a new element, containing the entered variable, to the end of the array.

const names = ["kola", "bola", "abdullah", "lola", "abu"];
names.push("dean");
// console.log(names);

// There's one important thing that many experienced web developers don't know about
// array.push()
// . What's it's the return value? Many would think that the return value of the push would be an array, now including the element we've pushed. Let's test it out:
console.log(names.push());

// array pop function on the other hand, does quite the opposite, deleting the last element of an array.

const students = ["dele", "kola", "biola", "ayo"];
students.pop();
console.log(students);

// array shift Shift works almost exactly like pop, with one major difference. It deletes the first value in an array and moves the rest backwards!

const cohort2 = ["tijani", "abdullah", "ahathe", "rokeebah"];
cohort2.shift();
console.log(cohort2);

// array shift If shift is the sister function to pop, unshift is that to push. It adds a new value to the start of an array instead of the end!

const movies = ["a man called god", "merlin"];
movies.unshift("memes");
console.log(movies);

// array splice: Now this one is a little more sophisticated, but don't worry we'll walk you through it. The splice method allows you to "splice" values into the array. It's first parameter determines where the new element or elements are placed, the second how many after that point should be deleted before placement and each subsequent condition is merely an element you wish to add. Here's an example.

const cohort3 = ["kanas", "taye", "bola", "cone"];
cohort3.splice(2, 0, "tade", "bola");
console.log(cohort3);

const name = ["tunde", "bioye", "dele"];
name.splice(2, 1, "kunle", "ayo");
console.log(name);

// array slice copy certain part of the array in to newly created array

const tutors = ["soliu", "naheem", "bola"];
const result = tutors.slice(1, 2);
console.log(result);

const namee = ["Jon", "Bob", "David", "Mark"];

const noOneLikesJon = namee.slice(1);

console.log(noOneLikesJon); // ["Bob","David","Mark"]
