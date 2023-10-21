//The .sort method sorts an array of strings alphabetically. Take for example this array of names:

const names = ["ade", "kunle", "bola", "christ", "bili"];

const sort = names.sort();
console.log(sort);

var names1 = ["Anne", "Carl", "Bob", "Dean"];
names1.sort();

console.log(names1);

// Do note that this method only works for strings, not numbers as it receives them as their character values instead. Due to this, a smaller number may end up appearing last on a list you're trying to sort. This can be resolved by providing a comparison function explained in the video.
