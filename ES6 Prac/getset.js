class getset{
    constructor(name){
        this.name = name;
    }
    //getter
    get personName(){
        return this.name;
    }
    //setter
    set personName(x){
        this.name = x;
    }
}
let p1 = new getset('Vraj Patel');
console.log(p1.name);

//changeing the name 
p1.name = "Jay Patel";
console.log(p1.name);