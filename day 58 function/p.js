let n = prompt("Enter the number");
while (n != 5) {
  if (n == 5) {
    alert("correct number");
    console.log("correct number");
  } else {
    console.log("incorrect number");
    alert("incorrect number");
    n = prompt("Enter the number"); // Ask for the number again
  }
}
