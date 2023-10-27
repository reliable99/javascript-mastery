console.log("asynchronouse javascript");

// differences between synchronous and asynchronous code

// synchronous: Synchronous Javascript is one in which the code is executed line by line and their tasks are completed instantly, i.e. there is no time delay in the completion of the tasks for those lines of code.
// First let me give you an example of synchronous javascript:

const functionOne = () => {
  console.log("function One");

  functionTwo();

  console.log("function one, part two");
};

const functionTwo = () => {
  console.log("function two");
};
functionOne();
// Asynchronous Javascript is one in which some lines of code take time to run. These tasks are run in the background while the Javascript engine keeps executing other lines of code. When the result of the asynchronous tasks gets available, it is then used in the program.

// So, the main concept behind Asynchronous Javascript is that we don't wait for a function to get executed and complete its task and then handle the result. But, we simply let the async function do its job in the background and we move on to execute the other lines of code and then use the result of that asynchronous task when it is available.
// example for asynchronous
const functionThree = () => {
  console.log("function Three");

  functionFour();

  console.log("function three, part two");
};

const functionFour = () => {
  setTimeout(() => {
    console.log("function four");
  }, 5000); // waiting
};
functionThree();

// synchronous
const isBooked = () => {
  console.log("The room is booked ");
  isAvailable();
  console.log("No room is available");
};

const isAvailable = () => {
  console.log("The room is available ");
};
isBooked();

//asynchronous

const isNice = () => {
  console.log(" The room is nice ");
  isManage();
  console.log("The apartment is located at a nice envir...");
};

const isManage = () => {
  setTimeout(() => {
    console.log("The room is manage");
  });
};

isNice();
