let arr = [1, 2, 3, 4];

arr.forEach((a) => {
    console.log(a);
});

let newArr = arr.map((val) => {
    return val * val;
});
console.log(newArr);  // [1, 4, 9, 16]

let filter = arr.filter((val) => {
    return val > 2;
});
console.log(filter);  // [3, 4]

let reduce = arr.reduce((acc, val) => {
    return acc + val;
});
console.log(reduce);  // 10

let ak = "akshit"
let a = Array.from(ak)

console.log(a)
