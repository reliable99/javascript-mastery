console.log("closure");

const outer = () => {
  const outerVar = "Hello!";

  const inner = () => {
    const innerVar = "Hi!";

    console.log(innerVar, outerVar);
  };

  return inner;
};

const innerFn = outer(); // closure, because we have access to the variables of the parent scope

innerFn();

// / Normally, when you exit a function, all its variables “disappear”. This is because nothing needs them anymore. But what if you declare a function inside a function? Then the inner function could still be called later, and read the variables of the outer function. In practice, this is very useful! But for this to work, the outer function’s variables need to “stick around” somewhere. So in this case, JavaScript takes care of “keeping the variables alive” instead of “forgetting” them as it would usually do. This is called a “closure”.

// In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time

const init = () => {
  const hobby = "Learning JavaScript"; // hobby is a local variable created by init

  const displayHobby = () => {
    // displayHobby() is the inner function, a closure
    console.log(hobby); // using variable declared in the parent function
  };

  displayHobby();
};

init();

const fav = () => {
  const read = " i love reading books";

  const fav2 = () => {
    console.log(read);
  };
  fav2();
};

fav();

const isPlenty = () => {
  const money = "dangote is the richest man in africa";

  const isPlenty2 = () => {
    console.log(money);
  };
  isPlenty2();
};

isPlenty();
