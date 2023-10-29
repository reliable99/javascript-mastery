const person = {
  firstName: "Gary",
  lastName: "Vee",
  car: {
    color: "red",
    wheels: 4,
  },
  animals: {
    dog: {
      name: "Fluffy",
      age: 3,
    },
    cat: {
      name: "Kitty",
      age: 3,
    },
  },
};

// Destructuring
const {
  firstName,
  lastName,
  car: { color, wheels },
  animals: { cat, dog },
} = person;
