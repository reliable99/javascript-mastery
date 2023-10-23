// what is array reduce?  Array reduce starts with all the elements from an array, ilterates over them and computes them to a single value.

// const groceryItems = [29, 12, 45, 35, 87, 110];

// // let total = 0;

// groceryItems.forEach((item) => {
//   total += item;
// });

// console.log(total);

// that is not the best way to do it

// the reduce method

// the reduce method takes two argument, the first one is the call back function, and the second one is the initial value of something called the accumulator

const itemList = [23, 45, 76, 89, 90];

const total = itemList.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total);

const totalItem = [90, 39, 87, 900, 345];
const total2 = totalItem.reduce((add1, add2) => {
  return add1 + add2;
}, 0);
console.log(total2);

// lets do it on a simpler example

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(sum);

// a = 0, c = 1 => a = 1
// a = 1, c = 2 => a = 3
// a = 3, c = 3 => a = 6
