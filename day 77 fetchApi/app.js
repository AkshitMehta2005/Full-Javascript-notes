let url = "https://cat-fact.herokuapp.com/facts";

let factset = document.querySelector(".fact")
let btn = document.querySelector(".btns");

let getfact = async()=>{
console.log("data loading");
let Response = await fetch(url);
console.log(Response); // jhson format
let data = await Response.json();
factset.innerHTML=data[0].text;
};


btn.addEventListener("click", getfact);