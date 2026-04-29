let arr = [1,2,4,5,7]
console.log(arr);
console.log(arr.length)
// array is mutable while string is immutable
arr[0] = 18;
console.log(arr);

// a = "harry";
// a[0] ="a";
// console.log(a);
console.log(arr.toString())
console.log(arr.join(" and "));
console.log(arr.pop());
console.log(arr);
console.log(arr.push("harry"));
console.log(arr);
console.log(arr.shift()); // pop ka bhai but front
arr.unshift("Frontse"); // push ka bhai hot aha ye
console.log(arr);
delete arr[2];// delete ho jata ha but memory mai space rehti ha uski
console.log(arr);

// Concat()

let a1 = [3,2,1,4,9,7,55];
let a2 = [4,5,6];
let a3 = [7,8,9];
console.log(a1.concat(a2,a3));


console.log(a1.splice(1,4));
// console.log(a1.sort());

a1.splice(1,3,222,333,444);
console.log(a1); //->[3, 222, 333, 444, 9, 7, 55] output in web


// slice 
let b = [1,2,3,4,5,6];
console.log(b.slice(2));
console.log(b.slice(1,4)) // -> [2, 3, 4]