// Welcome to a new module in this course! I am super excited for this one, because now we're going to understand some important concepts in Javascript. These concepts will later help us provide functionalities to our app like fetching data and sending data to servers. Until now, in this course we have been dealing with something called synchronous javascript and it's now time to understand asynchronous javascript. You might not understand these terms, but by the end of this lecture you will know what are they and why these concepts are crucial to building real world apps. So, let's get started!

// In JavaScript, there is a variety of pre-made functions that allow you to execute chunks of code in timed intervals, even while other code in the program is being executed. Imagine you're coding a video game and need a function that could execute certain drawing operations every millisecond, or a local clock that ticks the amount of time a user has spent on your site; you'd probably help yourself with the following:

// The setInterval allows you to execute a chunk of code every time a specified amount of milliseconds passes. For example; this code logs "Hello World" every thousand milliseconds:

const myInterval = setInterval(() => {
  console.log("hello");
}, 1000);

clearInterval(myInterval);

// setInterval(() => {
//   console.log("welocome");
// }, 1000);
// clear the interval
const clear = setInterval(() => {
  console.log("welocome");
}, 1000);
clearInterval(clear);

// set timeout : The setTimeout function allows you to wait a certain amount of time before executing a chunk of code, do note that other code outside of the timeout will continue execution as normal. The way it's used is identical to setInterval.

setTimeout(() => {
  console.log("come in");
}, 5000);

// clear timeout
// const clear1 = setTimeout(() => {
//   console.log("come in");
// }, 5000);

// clearTimeout(clear1);
