console.log("arrray filter");

const numbers = [-10, 0, -2, 15, -36, 25];
const positiveNumbers = numbers.filter((number) => {
  return number >= 0;
});
console.log(positiveNumbers);
