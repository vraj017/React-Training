const odd = [ 1,5,7];
const comb = [ 1,2,3,...odd];
console.log(comb);

//example of rest paramater ( if Spread Operator used as Paramater)
console.log(`example of rest paramater`)
let myfun = function(...arg){
    console.log(arg);
}
myfun();
myfun(2);
myfun(1,2,3,4,5,6);