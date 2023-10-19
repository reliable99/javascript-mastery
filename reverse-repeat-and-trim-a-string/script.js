console.log("reverse, repeat, and Trim a string");

// Reverse: There isn't a built in string method that reverses a string. Rather, we can use the knowledge we previously gained! Remember how we can split a string into array of characters? Arrays do have a reverse method.

// So this is a process.

// 1 Split a string
// 2 Reverse newly created a array
// 3 Turn the array back into string using join()

const exampleString = "test";
const reverseString = exampleString.split("").reverse().join("");
console.log(reverseString);

const example = "supernatural";
const reverse = example.split("").reverse().join("");
console.log(reverse);

// repeat: Let's say that you want to repeat a string an x number of times. You can easily do that by using the string.repeat() method.

const example2 = "dog";
const repeat = example2.repeat(5);
console.log(repeat);

// Trim: Sometimes, users don't know how to type. And we need to clean their emails, usernames and whatnot. We can clean empty spaces using the trim method.

const example3 = "  hello, world  ";
const trim = example3.trim();
console.log(trim);
