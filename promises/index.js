// Create a promise
let myPromise = new Promise((resolve, reject) => {
  let success = true; // simulate a condition

  setTimeout(() => {
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  }, 2000); // simulate async delay
});

// Use the promise
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
