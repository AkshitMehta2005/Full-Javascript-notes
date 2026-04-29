let myPromise = new Promise((resolve, reject) => {
    if(resolve)setTimeout(() => {
        // Simulate fetched data
        const data = "Fetched some fake data!";
        resolve(data); // Send the data to `.then()`
    }, 2000);
    else{
      reject("not getting value")
    }
});

myPromise
  .then((res) => {
    console.log("Resolved:", res);
  })
  .catch((err) => {
    console.log("Error:", err);
});
