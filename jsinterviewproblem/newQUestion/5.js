// Definition

// In JavaScript, the this keyword refers to the object that is currently executing the code. Its value depends on how a function is called (runtime binding).

const person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Output: Hello, John


