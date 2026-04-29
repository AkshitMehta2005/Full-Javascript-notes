// 1 and 2
// const obj = {
//     harry: 39,
//     john: 42,
//     lisa: 35,
//   };
  
// for(let key in obj){
//     console.log(`${key} is ${obj[key]}`);
// }

// 3
const correctNumber = 7;
let userInput;

while (true) {
  userInput = prompt("Enter the correct number:");
  if (parseInt(userInput) === correctNumber) {
    alert("You entered the correct number!");
    break;
  } else {
    alert("Try again");
  }
}
