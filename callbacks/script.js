console.log("callbacks");

// asynchronous continues........

//In this lesson we're going to cover a lot of advanced JavaScript concepts, some of which are: API data fetching, asynchronous code, callback functions, promises and async/await. Most tutorials simply cover the way to fetch something from an asynchronous source. This video is going to teach you how you can first simulate or create that asynchronous source and then how we can properly deal with the data coming out of it.

// Let's immediately dive in into a real example of asynchronous JavaScript, and that is: data fetching. With JavaScript, we can fetch the data from a range of different API's. API stands for application programming interface and it is simplify something that you can access data from.

// Once we fetch the data, depending on the size of the data we're fetching and our internet speed, the fetching is going to take a certain amount of time. Opposed to the setTimeout, where we always waited for 2 seconds, with real data fetching, we cannot be sure how long is it going to take.

// Now we're going to simulate that data fetching.

// Let's say that we're trying to fetch a user from the database.

// This is the problem

const fetchUser = (username, callback) => {
  setTimeout(() => {
    callback({ username });
  }, 5000);
};
fetchUser("mike", (user) => {
  console.log(`your name is: ${user.username}`);
});
