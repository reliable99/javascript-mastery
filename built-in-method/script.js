// object method: method are difined exactly like other object except they have to be declared as the property of an object

const dog = {
  name: "bingo",
  bark: () => {
    console.log("woo, woo!");
  },
};
dog.bark();

const cat = {
  name: "musu",
  age: "3",
  sound: () => {
    console.log("halas! halas");
  },
};

console.log(cat.name);
console.log(cat.age);
