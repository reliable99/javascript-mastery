console.log("scope");

// What is scope and why do we need it?

// What is Scope? Why do we need it? And how can it help us write less error-prone code?

// Scope simply allows us to know where we have access to our variables. It shows us the accessability of variables, functions, and objects in some particular part of the code.

// Why would we want to limit the visibility of variables and not have everything availabile everywhere in our code?

// Firstly, it provides us with some level of security to our code.

// Secondly, it helps to improve efficiency, track bugs and reduce them. It also solves the problem of naming variables.

// We have three types of scopes:

// Global Scope
// Local Scope
// Block Scope (only with
// let
// and
// const
// )

// Variables defined inside a function are in local scope while variables defined outside of a function are in the global scope. Each function when invoked creates a new scope.

// All of this might be confusing, until you see some examples. You're going to immediately understand what a scope is. Let's explore it in the code.

// Global Scope
// When you start writing in a JavaScript document, you're already in the Global scope.

const name1 = "Adrian";

const logName = () => {
  console.log(name1);
};

logName();

// Advantages of using Global variables

// You can access the global variable from all the functions or modules in a program
// It is ideally used for storing "constants" as it helps you keep the consistency.
// A Global variable is useful when multiple functions are accessing the same data.

// Disadvantages of using Global Variables
// Too many variables declared as global, then they remain in the memory till program execution is completed. This can cause of Out of Memory issue.
// Data can be modified by any function. Any statement written in the program can change the value of the global variable. This may give unpredictable results in multi-tasking environments.
// If global variables are discontinued due to code refactoring, you will need to change all the modules where they are called.

// local scope/ function scope : Variables defined inside a function are in the local scope.

const someFunction = () => {
  const age = 21;
  console.log(age);
};
someFunction();

// Advantages of using Local Variables
// The use of local variables offer a guarantee that the values of variables will remain intact while the task is running
// You can give local variables the same name in different functions because they are only recognized by the function they are declared in.
// Local variables are deleted as soon as any function is over and release the memory space which it occupies.

// Disadvantages of using Local Variables
// They have a very limited scope.
// This isn't necessarily a disadvantage, but if you ever find yourself needing to use that variable in a parent scope, just declare it there. Let's me use the above example to show you what I mean.

// If you need to use a variable only inside the
// anotherFunction
// function, just declare it there.

// const function1 = () => {
//   const book = 67;
//   console.log(book);

//   const function2 = () => {
//     const boy = 23;
//     console.log(boy);
//   };
//   function2();
// };

// someFunction();

// block scope

if (true) {
  const name = "ade";
  console.log(name);
}

// console.log(name); we cant do it like this

// What is more useful?
// The local and global variables are equally important while writing a program in any language. However, a large number of the global variable may occupy a huge memory. An undesirable change to global variables is become tough to identify. Therefore, it is advisable to avoid declaring unwanted global variables. Always declare variables in the scope that you want to use them in.

// KEY DIFFERENCE
// Local variable is declared inside a function whereas Global variable is declared outside the function.
// Local variables are created when the function has started execution and is lost when the function terminates, on the other hand, Global variable is created as execution starts and is lost when the program ends.
// Local variable doesn’t provide data sharing whereas Global variable provides data sharing.
// Local variables are stored on the stack whereas the Global variable are stored on a fixed location decided by the compiler.
// Parameters passing is required for local variables whereas it is not necessary for a global variable
