// create a bussiness name generator by combining list of adjective and shop name and another word

// adjective:
// crazy
// Amazing
// Fire

// shop name:
// Engine
// Foods
// Garments

// Another word:
// Bro
// Limited
// Hub

// answer 1 using array

// let adjective =  {
//     1:"crazy", 
//     2:"Amazing", 
//     3:"Fire"
// }

// let Shop_Name =  {
//    1:"Engine",
//    2:"Foods",
//    3:"zip"
// }

// let Another_word =  {
//     1:"Bro",
//     2:"Limited",
//     3:"Hub"
//  }
//  let a = Math.floor(Math.random() * 3)+1;
//  let b = Math.floor(Math.random() * 3)+1;
//  let c = Math.floor(Math.random() * 3)+1;
// console.log(adjective[a]+Shop_Name[b]+Another_word[c]);

// answer 2 using string only

let rand = Math.random();
let first,second,third;
// for first letter
if(rand<0.3){
    first="Crazy";
}
else if(rand>=0.3 && rand<0.7){
    first="Amazing";
}
else{
    first="fire";
}

// for second letter

if(rand<0.3){
    second="Engine";
}
else if(rand>=0.3 && rand<0.7){
    second="Amazing";
}
else{
    second="Foods";
}

// for 3rd letter

if(rand<0.3){
    third="Limited";
}
else if(rand>=0.3 && rand<0.7){
    third="bro";
}
else{
    third="Hub";
}
console.log(first+second+third);

