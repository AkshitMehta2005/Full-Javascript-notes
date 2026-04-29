// --------------------------------------------
// Chapter 1 – Practice Set
// --------------------------------------------

// ✅ var can be redeclared and updated
var a = 12;
var a = 15; // Allowed
console.log("Value of a (var):", a); // Output: 15

// ✅ let can be updated but NOT redeclared in same scope
let b = 2;
b = 7; // Allowed
console.log("Value of b (let):", b); // Output: 7

// ✅ const CANNOT be updated or redeclared
const c = 3;
// c = 4; // ❌ Error if uncommented
console.log("Value of c (const):", c); // Output: 3

// ---------------------------------------------------
// ✅Question 1: Create a variable of type string and try to add a number to it
let s = "as";
s += 1;
console.log("Q1 Output:", s); // Output: "as1"

// ✅ Question 2: Use typeof to find the datatype of the string in last question
console.log("Q2 typeof:", typeof s); // Output: "string"

// ✅ Question 3: Create a const object in JavaScript
const stud = {
    name: "akshit",
    age: 21
};

// ✅ Question 4: Try to add a new key to the const object
stud.id = 307;
console.log("Q3 & Q4 Object:", stud); 
// Output: { name: 'akshit', age: 21, id: 307 }

// ✅ Question 5: Create a word-meaning dictionary of 5 words
const dictionary = {
    apple: "a fruit",
    book: "a collection of pages",
    car: "a vehicle",
    dog: "a domestic animal",
    earth: "our planet"
};

console.log("Q5 Dictionary:", dictionary);
let age = 13;
// (age>=10 && age<=20)?console.log(true):console.log(false)


switch (age) {
    case age<10:console.log("age is small")
    break;
    case age>18:console.log("age is large")
    break;

    default:
    break;
}
