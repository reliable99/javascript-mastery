console.log("loop");

// Sometimes we want to repeat an action a number of times for example let’s imagine we want to display numbers form zero to nine on the console. You may be thinking doing something like that:

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// But that’s not a good idea at all. So instead we use for or a while loop.

// instead you use the "while / for" loop

// the 'while' loop

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// note: the execution of the loop body is called iteration, looping from the example makes ten iteration

// if i++ is not included the loop repeat itself till infinity, never ending loops are called infinit loops and thats not good type of loops

// THE "FOR" LOOP: The for loop is more complex, but it’s also the most commonly used loop.

// It’s called a for loop because it runs “for” specific number of times. For loops are declared with three optional expressions separated by semicolons: initialization, condition and final-expression. Followed by a statement (usually a block statement).

for (i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 20; i++) {
  console.log(i);
}

// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable. The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute. The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter. So we already know how to use for loop let’s use it to print numbers from zero to nine:

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//First we initialize our variable i=0 because we start to count from 0, “i” stand for index and it’s kind of standard for loop variable. Next we set our condition to i<10. So every time before loop execute the statement, it will check if the condition is true or in our example if variable ‘i’ is less than ten. If it’s equal or greater than 10 then condition will evaluate to false and terminate our loop. Final expression is our counter update and we set it to i++ which is shorthand for i=i+1. Each iteration i is increased by one. At the beginning we said that expressions are optional that mean we can skip parts, for example we can initialize loop variable before loop like that:
