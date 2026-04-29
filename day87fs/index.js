const fs = require("fs");


// console.log("starting module");
// fs.writeFileSync("a.txt","hello world"); // dont use this because waiting tije is more
// console.log("done"); 


// console.log("starting module");
// fs.writeFile("b.txt","hey i am noob!",()=>{
//   console.log("write ho gya bhai");
//   fs.readFile("b.txt",(error,data)=>{
//     console.log(error,data.toString());
//   })
// })
// console.log("done"); 

// appendfile

fs.appendFile("a.txt"," akshit bhai op",(err,data)=>{
  try{
    console.log(err,data);
  }
  catch(err){
     console.error(err);
  }
})

