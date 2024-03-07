console.log("array for each");

// array for each

// Basically, this method performs an action for each element in the array. We can use the standard for loop to do the same, but I will explain it soon where and why to use this method.

// Let's take an example - we have to log each of the values present in an array called mmy array

// to the console, along with their respective indices, here's how we can do it using the standard for loop:
// lets use the forloop we learnt the other time
const names = ["ade", "bola", "kunle"];
for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}
// in this case we had to declare and initialise another variable. we can elimited this method with for each

// array for each syntax
// foreach method accept a callback function then it accept two params (value and index)

const students = ["bola", "kola", "biola"];
students.forEach((student, i) => {
  console.log(student, i);
});

const cohorts = ["yusuff", "kola", "muhammad", "dele"];

cohorts.forEach((cohort, i) => {
  console.log(cohort, i);
});

const groups = ['groupA', 'GroupB', 'GropuC']
groups.forEach((group, i) => console.log(group, i))// one line

// Important remarks on the use of this method

// use when ?
// you want to do something with each element of the array

// don`t use when ?
// you want to stop or break the loop when some condition is true
// when you are working with async code

// real example where where array.forEach can be used

let sum = 0;
const numbers = [45, 60, 78, 90];
numbers.forEach((number) => {
  sum += number;
});

console.log(sum);

let sum2 = 0;
const figures = [78, 90, 56, 25];
figures.forEach((figure) => {
  sum2 += figure;
});

console.log(sum2);
