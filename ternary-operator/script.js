console.log("ternary operator");

// ternary operator is a younger brother to if statement

// You could say that the switch statement is a bit more complicated version of the if statement. There's yet another version of it. It's called the ternary operator. It should be used just for the simple true or false checks.

// To explain the ternary operator, let's first take a look at the syntax of a typical if statement

// const age = 67;
// if (age < 70) {
//   console.log("you are not old enough");
// } else {
//   console.log("you are old ");
// }

// And now let's transfer it to a ternary. I'll first write it out and then we're going to explore it in detail:

const age = 67;

age < 70 ? console.log("you can drive ") : console.log("you cannot drive ");

const number = 50;

number <= 50 ? console.log("you are too plenty") : console.log("i am coming");

// Reading from left to right, we first have our condition. Following a question mark is the expression that is going to be executed if the condition evaluates to true. And finally, following the colon sign is the expression that is going to be executed if the condition evaluates to false.

// At beginning, ternary operators may seem a bit weird and hard to read. But as you write more of them, you'll quickly get better at understanding them. They'll quickly become your go to tool if you have just a simple true or false question.

const oyin = 22;

oyin > 21 ? console.log("she is beautiful") : console.log("she looks charming");

const bola = 43;

bola <= 43 ? console.log("she is still young") : console.log("she is old");
