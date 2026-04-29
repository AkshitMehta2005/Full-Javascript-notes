const original = {
    name: "akshit mehta",
    address: {
        city: "dehradun",
        area: "Masandawala"
    }
};

// ---------- SHALLOW COPY ----------
const shallowCopy = { ...original }; // only top-level copied
shallowCopy.address.city = "Gurugram";

console.log("After shallow copy change:");
console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);

// ---------- DEEP COPY ----------
// Method 1: Using JSON.parse(JSON.stringify(...))
const deepCopy = JSON.parse(JSON.stringify(original));
// Or Method 2: Modern way
// const deepCopy = structuredClone(original);

deepCopy.address.city = "Mumbai";

console.log("\nAfter deep copy change:");
console.log("Original:", original);
console.log("Deep Copy:", deepCopy);
