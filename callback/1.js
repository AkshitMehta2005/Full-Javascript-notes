// A callback is a function passed as an argument to another function, which is then called (executed) inside that outer function.


// function s(a,b,callbackfunction)

function calculate(a, b, operation) {
  return operation(a, b); // <-- callback is used here
}

// 1

let sum = (a, b) => {
  return a + b;
};

let ans1 = calculate(1, 2, sum);
console.log(ans1); // 3


// 2

let multiply = (a,b)=>{
    return a*b;
}

let ans2 = calculate(2,3,multiply);
console.log(ans2)


// array callback function


let arr = [1,2,3,4.-1,3,-2]