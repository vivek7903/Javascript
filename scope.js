//there are two types of scope: global and local

//global scope 
var a = 1;
let b =2;
const c = 3;

function sum(){
    console.log(a+b+c);
}
sum();

//local scope
function sum2(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(a+b+c);
}
sum2();

console.log(a); //1
 console.log(b); //error
console.log(c); //error

//the reason we don't usually use var is because of its function scope, which can lead to unexpected behavior. 
// let and const have block scope, which is generally more predictable and easier to manage.

