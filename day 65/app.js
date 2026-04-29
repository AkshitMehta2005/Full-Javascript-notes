// by using for loop

// let s = 1;
// for(let i = 1;i<=3;i++){
//    s = s*i;
// }
// console.log("The factorial of the number is "+s);


// by reduce method

let arr1 =[] ;
for(let i = 1;i<=4;i++){
    arr1.push(i);
}
let red =(a,b)=>{
    return a*b;
}
console.log(arr1.reduce(red)); // recursion