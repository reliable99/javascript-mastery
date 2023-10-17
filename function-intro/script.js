console.log("functions");

// ##Intro In this section, we're going to talk about functions. I'm really excited to show you how functions work! :) Functions are one of the most interesting and most important parts of any programming language.

// So what are functions, and why should we use them? A JavaScript function is a block of code designed to perform a particular task. Remember that, a block of code designed to perform a particular task. We will often need to perform a similar task many times in our application.

// Functions are the main building blocks of the program. They allow the code to be called many times without repetition.

// You've already seen a function in JavaScript. Not only that you've seen it, you've used it multiple times by now. It was the function called console.log. Console.log has a task of printing values to the console. After finishing this section, you'll be able to create your own functions as well! :)

// When talking about functions, you're often going to hear two terms: function declaration and function call. So let's explain each one of these.

// When talking about functions, you're often going to hear two terms: function declaration and function call. So let's explain each one of these.

// FUNCTION DECLARATION (defining a function)

function square(number) {
  //   console.log("i am here for you");
  return number * number;
}

function name(x) {
  //   console.log("its correct");
  return x * x;
}
// A lot of stuff happened here, let's review it word by word.

// FUNCTION CALL (calling/ excecuting a function)

// Defining a function does not execute it. Defining it simply names the function and specifies what to do when the function is called.

// Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function
("square");
// , you could call it as follows:

const result = square(10);
console.log(result);
const result1 = name(3);
console.log(result1);

// Function: A function is a special value with one purpose: it represents some code in your program. Functions are handy if you don’t want to write the same code many times. “Calling” a function like
// sayHi()

// tells the computer to run the code inside it and then go back to where it was in the program. There are many ways to define a function in JavaScript, with slight differences in what they do.

function add(x) {
  return x + x;
}

const result2 = add(500);
console.log(result2);

function multiply(x) {
  return x * x;
}

const result3 = multiply(30);
console.log(result3);
