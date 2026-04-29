let button = document.getElementById("btn");
// button.addEventListener("mouseover",()=>{
//     document.querySelector(".he").innerHTML="<b>hi there!</b>"
// })
button.addEventListener("click",()=>{
    document.querySelector(".he").innerHTML="<b>hi there!</b>"
})
// key down/up listenter used to make mario game
button.addEventListener("keydown",(e)=>{
    console.log(e);
})
