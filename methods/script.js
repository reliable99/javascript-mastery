// Object.keys() creates an array containing the keys of an object
// Object.keys(object);

const employees = {
  boss: "abdullah",
  secretary: "kola",
  sales: "kanas",
  accountant: "bola",
};
const positions = Object.keys(employees);
console.log(positions);

// Object.values() creates an array containing the values of an object
const session = {
  id: 1,
  time: `23- july- 2019`,
  device: "mobile",
  browser: "chrome",
};

const data = Object.values(session);
console.log(data);

// Object.entries() creates a nested array of  the key/value pairs of an object
const employees1 = {
  boss: "abdullah",
  secretary: "kola",
  sales: "kanas",
  accountant: "bola",
};
const entries = Object.entries(employees);
// console.log(entries);
entries.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];

  console.log(`${key}; ${value}`);
});

//
// Object.freeze() prevents modification of existing properties and prevents properties from being added or removed

const user = {
  name: "ade",
  password: "123456",
};

const user1 = Object.freeze(user);
console.log(user1);

user1.user = "dele";
user1.password = 2222222;
console.log(user1);

// // Object.seal() prevents new properties from being added

const userName = {
  name: "kule",
  password: 122334445,
};

const seal = Object.seal(userName);
console.log(seal);

seal.name = "ayo";
seal.active = "ban";
seal.password = 111111111;
console.log(seal);
