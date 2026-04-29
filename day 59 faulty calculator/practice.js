const obj = {
  "+":"+",
  "-":"-",
  "/":"/",
  "*":"*"
}
let a = prompt("Enter the nuumber 1");
let b = prompt("Enter the nuumber 2");
let c = prompt("Enter operator");

random = Math.random();

if(random>0.1){
  alert(`the result will be: ${eval(` ${a} ${c} ${b}`)}`)
}
else{
  c = obj[c];
alert(`the result of ${eval(`${a} ${c} ${b}`)} `);
}