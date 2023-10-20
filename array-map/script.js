console.log("array. map");

// Difference between Array.map() and Array.forEach() is that the map() method allocates memory in order to store and return values. While the forEach() method does not allocate memory so it doesn't store any returned values. In the last lecture, we saw that the array.forEach() method has a return value of undefined
// The for each method also allows for a callback function that will allow you to change the original array, while the map method will instead return a new array while leaving the original one in its original state.

// A local shop's inventory
const inventory = [
  { price: 5, name: "eggs" },
  { price: 5, name: "ham" },
  { price: 5, name: "mayo" },
  { price: 5, name: "bread" },
];

const prices = inventory.map((item) => item.price);
const names1 = inventory.map((item) => item.name);

console.log(prices);
console.log(names1);

const informations = [
  { name: "kola", age: 8 },
  { name: "biola", age: 60 },
  { name: "kunle", age: 90 },
  { name: "dele", age: 60 },
];

const names = informations.map((individual) => individual.name);
const ages = informations.map((individual) => individual.age);

console.log(names);
console.log(ages);

const cohorts = [
  { name: "qodri", age: 30 },
  { name: "muhamad", age: 20 },
  { name: "muhaz", age: 20 },
  { name: "suprem", age: 30 },
];

const cohort = cohorts.map((info) => info.name);
const cohortAge = cohorts.map((ages) => ages.age);
console.log(cohort);
console.log(cohortAge);
