const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumetator,curr)=>{
    return accumetator+curr;
},0)

console.log(sum)