// async function getData(){
//     // sumulation of taking data
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },3500);
//     })
// }

async function getData(){
    let a = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let data = await a.json()
      return data;
}

async function main(){
    console.log("Loading module ");
    console.log("Do some thing else ");
    console.log("Load data ");
    let data = await getData(); // used for waiting the data
    console.log(data);
    console.log("Processing the data");

}

main();