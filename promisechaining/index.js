
let promise1 = new Promise((resolve,reject)=>{
    let flag = true
    if(flag){
        setTimeout(()=>{
            resolve("hello !!")
        },2000)
    }
    else{
        reject("reject promise 1")
    }
})
let promise2 = new Promise((resolve,reject)=>{
    let flag = true
    if(flag){
        setTimeout(()=>{
            resolve("how are you")
        },4000)
    }
    else{
        reject("reject promise 2")
    }
})
let promise3 = new Promise((resolve,reject)=>{
    let flag = true
    if(flag){
        setTimeout(()=>{
            resolve("I am fine, what about you??")
        },6000)
    }
    else{
        reject("reject promise 3")
    }
})

promise1
  .then((res1) => {
    console.log(res1);
    return promise2;
  })
  .then((res2) => {
    console.log(res2);
    return promise3;
  })
  .then((res3) => {
    console.log(res3);
  })
  .catch((err) => {
    console.error("Error:", err);
  });



  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // Convert the response to JSON
    return response.json();
  })
  .then(data => {
    // Work with the JSON data
    console.log("Fetched Data:", data);
  })
  .catch(error => {
    // Handle any errors
    console.error("Error fetching data:", error);
  });


