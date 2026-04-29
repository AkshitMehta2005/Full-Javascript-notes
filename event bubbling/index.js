let a = document.querySelector(".Parent_Parent");
let b = document.querySelector(".parent");
let c = document.querySelector(".child");

a.addEventListener("click", (e) => {
    alert("Parent_Parent has been Clicked");
});

b.addEventListener("click", (e) => {
    alert("parent has been Clicked");
    // e.stopPropagation()
});

c.addEventListener("click", (e) => {
    alert("child has been Clicked");
    // e.stopPropagation()
});
