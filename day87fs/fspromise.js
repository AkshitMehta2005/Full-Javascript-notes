import fs from 'fs/promises';

let b = await fs.readFile("a.txt",(err,data)=>{
  console.log(err,data);
})

console.log(b.toString());