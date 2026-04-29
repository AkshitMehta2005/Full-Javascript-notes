// document.body.firstElementChild.children[0].nextElementSibling;
// <div class=​"box">​box2​</div>​
// document.body.firstElementChild.children[0].previousElementSibling;
// null
// document.body.firstElementChild.children[1].previousElementSibling;
// <div class=​"box">​box1​</div>​
// document.body.firstElementChild.children[3].previousSibling
// #text

// table

// document.body.children
// HTMLCollection(3) [div.container, table, script]
// document.body.children[1].rows
// HTMLCollection(4) [tr, tr, tr, tr]
// document.body.children[1].table.caption.style.color="red";
// VM399:1 Uncaught TypeError: Cannot read properties of undefined (reading 'caption')
//     at <anonymous>:1:33
// (anonymous) @ VM399:1
// document.body.children[1].caption.style.color="red";
// 'red'
// document.body.children[1].caption.style.backgroundColor="green";
// 'green'
// document.body.children[1].tr.cells;
// console.log(Array.from("harry"))

let a = 4;
confirm(a === 5 ? "Yes" : "No"); // go with console treminal
