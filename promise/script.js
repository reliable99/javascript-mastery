console.log("promise");

const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Now we have the user");
    resolve({ username: "Bili" });
    // reject("user not found");
  }, 5000);
});

fetchUser.then((user) => {
  console.log(user.username);
});
fetchUser.catch((error) => {
  console.log(error);
});
