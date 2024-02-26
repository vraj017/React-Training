class inheritance{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello  ${this.name} !`);
    }
}
class student extends inheritance{
    constructor(name){
        console.log(`this is exstudent class created for demo of super keyword`);
        super(name);
}
// class exstudent extends inheritance{
//     constructor(name){
//         console.log(`this is exstudent class created for demo of super keyword`);
//         super(name);
//     }
}
//multiple Inheritance
class faculty extends inheritance{
    subject(){
        console.log(`Hello Students I am Your Professor ${this.name}`);
    }
}
//calling object 
let s1 = new student('Vraj Patel');
let p1 = new faculty(`Mr. Mitul Maniar`);
// let es1 = new exstudent('Jayraj Rathod');
s1.greet();
p1.subject();
// es1.greet();