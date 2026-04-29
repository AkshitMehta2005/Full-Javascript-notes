let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="red";

// document.getElementById("redbox").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="green";

// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "green";
// });

e =  document.getElementsByTagName("div");

//output 
// HTMLCollection(7) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, redbox: div#redbox.box]
// e[4].matches("#redbox");
// true


// e[4].matches("#redbox");
// true
// e[4].closest[".container"];
// undefined
// e[3].closest["html"];


// document.querySelector(".container").contains(e[0]);
// true
// document.querySelector(".container").contains(document.querySelector("body"));
// false
