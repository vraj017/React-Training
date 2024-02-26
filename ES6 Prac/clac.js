// Basic Calculator 
class clac{
    constructor(no1,no2){
        this.no1 = no1;
        this.no2 = no2;
    }

    getSum(){
        var s = this.no1+this.no2;
        console.log(`Sum is ${s}`);
    }
    getSub(){
        var sub = this.no1-this.no2;
        console.log(`Sub is ${sub}`);
    }
    getMul(){
        var mul = this.no1*this.no2;
        console.log(`Mul is ${mul}`);
    }
    getDiv(){
        var div = this.no1/this.no2;
        console.log(`Div is ${div}`);
    }
}
let clac1 = new clac(5,2);
//calling methods
clac1.getSum();
clac1.getSub();
clac1.getMul();
clac1.getDiv();