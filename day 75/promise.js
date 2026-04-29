console.log("This is promimises");

let prom1 = new Promise((resolve,reject)=>{
   let a = Math.random(); 
   if(a<0.5){
    reject("No randopm number is supporting you");
   }
   else{
    setTimeout(()=>{
        console.log("Yes I am done");
        resolve("akshit");
    },3000);
   }
})

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log("err")
// })


let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random(); 
    if(a<0.5){
     reject("No randopm number is supporting you 2");
    }
    else{
     setTimeout(()=>{
         console.log("Yes I am done 2");
         resolve("akshit2");
     },3000);
    }
 })

//  let p3 = Promise.all([prom1,prom2])
//  p3.then((a)=>{
//     console.log(a);
//  }).catch(err=>{
//     console.log(err);
//  })

 let p4 = Promise.resolve([prom1,prom2])
 p4.then((a)=>{
    console.log(a);
 }).catch(err=>{
    console.log(err);
 })
