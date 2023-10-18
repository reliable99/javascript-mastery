console.log("searching for sub-string");

// There are multiple ways to look for a substring within a string.

// indexof: it looks for the substring in a string starting from a given position and return the position where a match was found
const hobbies = "i love HTML, css, and javascript";
const firstIndex = hobbies.indexOf("javascript");
console.log(firstIndex);

// lastIndexOf

const items = "books, pens, biro, pencil";
const last = items.lastIndexOf("pencil");
console.log(last);

// include : simply returns a true or false. note: its the most important of all
const names = "abdullah, bode, nasiihudeen, ibraheem";
const include = names.includes("abdullah");
console.log(include);

const subjects = "maths, physics, chemistry, biology";
const incl = subjects.includes("physics");
console.log(incl);

const hobies = "reading, coding, sleeping, writting";
const checkInclude = hobies.includes("stop");
console.log(checkInclude);

// startWith
const start = "i love you";
const checkStart = start.startsWith("i");
console.log(checkStart);

// endWith
const end = "come over";
const checkEnd = end.endsWith(".");
console.log(checkEnd);
