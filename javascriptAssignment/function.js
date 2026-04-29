// What is Hoisting?
// Hoisting is JavaScript's behavior of moving function declarations and variable declarations to the top of their scope during compilation — before any code is executed.

// 1

hello();

function hello() {
    console.log(12);
}

// 2

// hello(); // ❌ TypeError: hello is not a function

// const hello = function() {
//     console.log(12);
// };

//

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(1,2));

const sum = (a,b)=>{
    return a+b
}


const c = sum(1,2);
console.log(c)