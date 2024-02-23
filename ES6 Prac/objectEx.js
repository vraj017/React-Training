//Basic Object 
let person = {
fname:"vraj",
age: 23,
}
//print fname.
console.log(person.fname);
// check lname is there in object or not 
console.log('lname' in person);
//adding lname is person
person.lname = `Patel`;
// now print fname and lname
console.log(person.fname,person.lname);
// delete the lname from person
console.log(`// delete the lname from person `);
delete person.lname;
//loop in object 
console.log(`//loop in object `);
for (i in person){
    console.log(i+person[i]);
}
//get object key
console.log(Object.keys(person));
