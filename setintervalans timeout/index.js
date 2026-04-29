// This will log the message every 1 second
const intervalId = setInterval(() => {
  console.log("This runs every 1 second");
}, 1000);

// Stop it after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared after 5 seconds");
}, 5000);
