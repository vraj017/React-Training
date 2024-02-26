class person4{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}

let p1 = new person4('Vraj');

// access property
console.log(p1.name);
//access method
p1.greet();