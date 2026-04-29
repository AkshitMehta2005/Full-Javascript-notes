// it store data permently until we deleted 

localStorage.setItem("city", "Dehradun");
console.log(localStorage.getItem("city"));  // "Dehradun"

localStorage.removeItem("city");
console.log(localStorage.getItem("city"));  // null


//  sessionStorage example


// Save data in sessionStorage
sessionStorage.setItem("user", "Akshit");

// Retrieve data
console.log(sessionStorage.getItem("user")); // "Akshit"

// Remove data
sessionStorage.removeItem("user");
console.log(sessionStorage.getItem("user")); // null


// 🟢 localStorage

// localStorage in JavaScript is used to store data in the browser permanently. This means that even if the user closes the browser or restarts the computer, the data will still be available the next time they open the website (until it is explicitly removed). It stores key–value pairs, where both the key and value are strings. You can use methods like setItem() to save data, getItem() to retrieve it, removeItem() to delete a specific entry, and clear() to remove everything. A common use case for localStorage is saving user preferences (like theme, language, or login state) so that they persist between visits.

// 🟠 sessionStorage

// sessionStorage works almost the same as localStorage, but the key difference is its lifetime. Data stored in sessionStorage is temporary and only lasts for the duration of a page session. This means that as soon as the user closes the tab or browser window, the stored data is automatically deleted. Like localStorage, it also stores key–value pairs as strings and provides the same methods (setItem(), getItem(), removeItem(), clear()). A typical use case for sessionStorage is storing sensitive or temporary information such as one-time authentication tokens, form data during navigation, or shopping cart items that should not persist after the session ends.