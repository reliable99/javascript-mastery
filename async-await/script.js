console.log("async await");

// async await is simply an addition to promise its a simpler and cleaner way to work with prmise

// Note: async function returns promise
const fetchNumber = async () => {
  return 25;
};

console.log(fetchNumber());

// you can see that it returns promise, so how can we now retrieve the value from promise, thats when we introduce the AWAIT

// the await keywords wait for the promise to return a result for example:

const fetchNum = async () => {
  return 78;
};

const consolefetchNum = async () => {
  console.log(await fetchNum());
};

consolefetchNum();

const userName = async () => {
  return { username: "ade" };
};

const fetchUsername = async () => {
  console.log(await userName());
};

fetchUsername();

const number = async () => {
  return 90;
};

const fetchNumber1 = async () => {
  const num = await number(); // you can make it simple like this

  console.log(num);
};
fetchNumber1();

const password = async () => {
  return 122331;
};

const fetchPassword = async () => {
  const getPassword = await password();
  console.log(getPassword);
};

fetchPassword();

// let`s now go in details

// const user = async () => {
//   return "micheal";
// };

// const fetchUser = async () => {
//   const getUser = await user();
//   console.log(getUser);
// };

// fetchUser();

const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the user");

      resolve(username);
    }, 2000);
  });
};

const fetchUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photos");

      resolve(["photo1", "photo2"]);
    }, 2000);
  });
};

const fetchPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photo details");

      resolve("details...");
    }, 2000);
  });
};

const displayData = async () => {
  const user = await fetchUser("Adrian");
  const photos = await fetchUserPhotos(user.username);
  const detail = await fetchPhotoDetails(photos[0]);

  console.log(detail);
};

displayData();
