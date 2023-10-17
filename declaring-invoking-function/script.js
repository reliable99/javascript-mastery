console.log("declaring and invoking function");

// As we learned in the last lesson, functions are subprograms designed to perform a particular task.

// The code of the function is executed when the function is called. This is known as invoking a function. Let's first revisit the process of creating or defining a function.

// There are a few different ways to define a function in JavaScript:

// 1 A Function Declaration defines a named function. To create a function declaration you use the function

// keyword followed by the name of the function.

// function name(parameters) {
//   statements;
// there is only one advantage of using function declaratrion: they have access to "this keyworld"
// }

// 2 A Function Expressions defines a named or anonymous function. An anonymous function is a function that has no name. In the example below, we are setting the anonymous function object equal to a variable.

// let name = function (parameters) {
//   statements;
// };

// Invoking a Function :Functions execute when they are called. This process is known as invocation. You can invoke a function by referencing the function name, followed by an open and closed parenthesis:()

function sayI(name) {
  console.log(`Hi,${name}`);
}
sayI(`john`);

// 3 An Arrow Function Expression is a shorter syntax for writing function expressions.

const name = (parameters) => {
  statements;
};

const hello = (hello) => {
  console.log(`hello, ${hello}`);
};
hello(`adekunle`);

const book = (alphabet) => {
  console.log(`we have ${alphabet}  alphabets in the book`);
};
book(`1000`);

const team = (players) => {
  console.log(`there are ${players} players in the team`);
};

team(`25 `);

const abdullah = (good) => {
  console.log(`he is ${good}  good boy`);
};
abdullah(`fine,`);

// Arrow functions are the most modern way to create JavaScript function. For that reason, we're going to explore them in much more detail in the upcoming video! :)
// notice: we didnt have a return value in this example, in the coming lesson we will explore why its like that
