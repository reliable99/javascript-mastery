console.log("logical operator part 2");

// And we're back to logical operators! Remember I've told you that we're going to return to them, I didn't forget! :)

// Let's do a quick recap and then we're going to see some real and more complex examples of all three logical operators.

// Logical operators are used to combine two or more conditions. If you remember correctly, JavaScript includes three logical operators:
// ||
// OR,
// &&
// AND,
// !
// NOT.

const age = 19;
const isCool = true;

if (age > 18 && isCool) {
  console.log("you may enter");
} else {
  console.log("go out");
}

const pages = 80;
const isInteresting = true;

if (isInteresting && pages < 90) {
  console.log("you can read ");
} else {
  console.log("stop reading");
}

//Now, the point of this lecture is not an if/else statement. Let's remove that so we can focus purely on the logical operators. The only thing that we're going to keep is the condition. Let's log it to the console:

const age1 = 19;
const isCool1 = true;

console.log(isCool1 && age1 > 18);

//We got true which is not a surprise. But now, instead of these true boolean values, let's test it with some truthy values.

console.log("truthy" && 1 && "test" && 999);

// The AND
// &&
// operator does the following

// It evaluates operands from left to right.
// It converts them to a boolean value.
// If the result is
// true
// , it continues to the next value.
// If the result is
// false
// , it stops and returns the original value of that operand.
// If all operands have been evaluated to true, it returns the last operand.

// Now you know why 999 was returned, all the values were truthy and it was the last one on the list.

console.log("truthy" && 0 && "test" && 999);

// As you can see, if even one falsy value exists, it's going to stop and immediately return that value.

console.log("truthy" || 0 || "test" || 999);

// OR Operator (||)
// The syntax for the OR operator are two straight vertical lines
// ||
// . It checks whether any one of the two operands is a truthy value.

// Lets's see it in action:

console.log(0 || NaN || "test" || 999);

// We get
// truthy
// , why is that? Well let's see how the OR operator works:

// The OR
// ||
// operator does the following:

// For each operand, it converts it to boolean.
// If the result is
// true
// , it stops and returns the original value of that operand.
// If all operands have been evaluated to falsy returns the last operand.
// In other words, a chain of OR
// "||"
// returns the first truthy value or the last one if no truthy value is found.

// So now, if we change all of the values to be falsy, it is going to return the last one:

//Not Operator (!)
// An exclamation sign
// !
// is known as NOT operator. It reverses the boolean result of the condition.

// The syntax is pretty simple:

console.log(!0);
console.log(!false);
console.log(!true);

// The operator accepts a single argument and does the following:

// Converts the operand to boolean type:
// true/false
// .
// Returns the inverse value.
// For instance:

// A double NOT
// !!
// is sometimes used for converting a value to boolean type:

// example

const value = true;

if (!!value) {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}
