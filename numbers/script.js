console.log("number");

// javascript is really friendly when it comes to numbers, because yo dont have to specify the type of number.

// in traditional programming  like C you will have to declare the type of number you want to use like this

// int wholeNumber = 5
// float decimalNumber = 0.6

//in javascript you can just say plain old const

const wholeNUmber = 7;
const decimalNumber = 0.7;
console.log(wholeNUmber, decimalNumber);
console.log(wholeNUmber);

//operations for number
// 1- addition

const firstNumber = 78;
const secondNumber = 90;
const add = firstNumber + secondNumber;

console.log(add);

// 2- substraction

const firstNumber1 = 78;
const secondNumber1 = 90;
const sub = firstNumber - secondNumber;

console.log(sub);

// 3-multiplication

const firstNumber2 = 78;
const secondNumber2 = 90;
const multi = firstNumber * secondNumber;

console.log(multi);

// 4- division

const firstNumber3 = 78;
const secondNumber3 = 90;
const divide = firstNumber / secondNumber;

console.log(divide);

// when we try to do operation with values that are  not numbers most often we get NAN

const string = "hello";
const number = 6;
const add1 = string / number;

console.log(add1);
