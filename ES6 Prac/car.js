class car{
    constructor(model,colour){
        this.model = model;
        this.color = colour;
    }
    //method
    getName(){
        console.log(`Car Name is ${this.model}`);
    }

    getColor(){
        console.log(`Car Colour is ${this.color}`);
    }
}
//object
let c1 = new car("2022","black");
let c2 = new car("Honda City","Grey");
//access member 
console.log(c1.color);
console.log(c1.model);
//access method
c1.getName();
c1.getColor();
c2.getName();
c2.getColor();    
