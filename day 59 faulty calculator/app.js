// faulty calculator
// + -> -
// - -> +
// * -> /
// / -> *
// only for 10%

random = Math.random();
let a = prompt("Enter the nuumber 1");
let b = prompt("Enter the nuumber 2");
let c = prompt("Enter operator");
const obj = {
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*"
}
if(random>0.1){
    // good calc
alert(`the result of ${eval(`${a} ${c} ${b}`)} `);
}
else{
c = obj[c];
alert(`the result of ${eval(`${a} ${c} ${b}`)} `);
}

