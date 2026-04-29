let a = prompt("Enter the number a")

let b = prompt("Enter the number b")

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Problem in syntex");
}


let sum = parseInt(a)+parseInt(b);

function main(){

    try {     
    console.log("sum of the number is ",sum*x);
    return true;
    } catch (error) {
        console.log("Error aa gya bhai");
        return false;
    }
    // finally resurn ke baad bhi chalta ha
    finally{
        console.log("Finally");
    }
}
let res = main();
console.log(res);