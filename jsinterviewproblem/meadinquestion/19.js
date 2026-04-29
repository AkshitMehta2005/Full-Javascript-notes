const adam = { name: "Adam" };

function cook(ing1, ing2, ing3) {
  console.log(`${this.name} is having a meal with ${ing1}, ${ing2}, ${ing3}`);
}

// --- call ---
// First argument is the `this` context (adam), then arguments one by one
cook.call(adam, "rice", "beer", "beans");

// --- apply ---
// First argument is `this` context (adam), second is an array of arguments
cook.apply(adam, ["rice", "beer", "beans"]);

// --- bind ---
// First argument is `this` context (adam), rest are arguments (optional)
let a = cook.bind(adam, "rice", "beer", "beans");

// Call the bound function later
a();
