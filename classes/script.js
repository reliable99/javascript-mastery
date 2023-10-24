// A Class is a schema for an object that can save many values

class Person {
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
  }
}

const user = new Person("Mellisa", 24, true);

const user1 = new Person("a", 24, true);
console.log(user, user1); // you can get as many user from the class you have created

// object oriented programming java is the most popular programming language that uses java oriented programming, java script is staying away from it

// we can do what we just did using normal function

const createPerson = (name, age, isWorking) => {
  const userSchema = { name, age, isWorking };
  return userSchema;
};

const userr = createPerson("bolanle", 24, true);
console.log(userr);
const userr1 = createPerson("oloye", 24, true);
console.log(userr1); // you can get as many user from the class you have created
