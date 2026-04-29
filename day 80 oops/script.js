

class Animal{
    constructor(name){
        this.name=name;
        console.log("Object is created");
    }

    eats(){
        console.log(`I am eating`);
    }

    jump(){
        console.log('Jumping...');
    }

}

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion");
    }
      // over writing
    eats(){
        console.log(  `lion is eating meat` );
    }
}
let a = new Animal("bunny");
console.log(a);

let l = new lion("shera");
console.log(l);