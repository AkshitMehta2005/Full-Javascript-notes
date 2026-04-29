// 1

const btn = document.getElementById("btn");


// // You're using 'onclick' inside addEventListener, which is incorrect.

// // ✅ Correct usage:
// // You should not include the on prefix when using addEventListener.


// btn.addEventListener('click',()=>{
//    alert("event is done")
// })


// 2

x = ()=>{
    alert("event X")
}
btn.addEventListener('click',x);

y = ()=>{
    alert("event Y")
}
btn.addEventListener('click',y);


// for remove eventListen it must be same function object

btn.removeEventListener('click',y)
