console.log("strict vs loose equality");

// Equality is a fundamental concept in JavaScript. We say two values are equal when they are the same value. For example:

console.log(4 == 4);
console.log(4 === 4);
console.log(4 == "4");
console.log(4 === "4");

//The strict equality method of comparison is a preferred option to use because it’s behaviour can be easily predicted, which leads to less bugs and unexpected results. The JavaScript interpreter compares the values as well as their types and only returns true when both are the same.

console.log(20 === "20");

// We write loose equality using double equal sign. It uses the same underlying logic as the Strict equality except for a minor, yet huge, difference.

// The loose equality doesn’t compare the data types.

console.log(20 == "20");
console.log("" == "0");
console.log(0 == "");
console.log(true == 1);

// You should almost never use the loose equality.

//Douglas Crockford's in his excellent book called JavaScript: The Good Parts wrote:

//JavaScript has two sets of equality operators: === and !==, and their evil twins == and !=.

//The good ones work the way you would expect. If the two operands are of the same type and have the same value, then === produces true and !== produces false. The evil twins do the right thing when the operands are of the same type, but if they are of different types, they attempt to change the values. The rules by which they do that are complicated and unmemorable. These are some of the interesting cases:
