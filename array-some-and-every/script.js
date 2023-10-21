// array some : test whether at least one element in the passes a certain test, return true if at least one element passes the test
const array = [1, 2, 3, 4, 5, 6];
const isGreaterThan3 = (number) => number > 3;
const result = array.some(isGreaterThan3);
console.log(result);

// array every: return true if all the element passes the test

const array1 = [1, 2, 3, 4, 5, 6];
const every = (number1) => number1 > 3;
const result1 = array1.every(every);
console.log(result1);
