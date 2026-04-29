// 1

// const employee = {
//     calcTax(){
//         console.log("tax is 10%")
//     }
// }

// const akshit = {
//     salary:150000
// }

// akshit.__proto__ = employee;

// 2 constructor and class and obj 

// class ToyataCar{
//     constructor(name,milage){
//        this.name = name;
//        this.milage = milage
//     }
//     start(){
//         console.log("Start")
//     }
//     stop(){
//         console.log("Stop");
//     }
// }

// const a = new ToyataCar("XUV700",34);
// console.log(a)


//3 inheritance

class Person{
    constructor(){
       this.name = "Riya";
    }
    eat(){
        console.log("eat");
    }

}

class Engineer extends Person{
    constructor(branch){
        // super();  // without super parent ka contrtor use nahi kar payoge
        super();
        this.branch = branch;
    }
}

const a = new Engineer("IT");
console.log(a)

