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

//hosting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

console.log(x); //undefined
var x = 10;

// In the above code, the declaration of 'x' is hoisted to the top, but its assignment is not. Therefore, when we try to log 'x' before the assignment, it returns 'undefined' instead of throwing an error.

// However, with 'let' and 'const', hoisting behaves differently. They are hoisted but not initialized, which means that accessing them before their declaration will result in a ReferenceError.

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;

// In summary, while 'var' allows for hoisting and can lead to unexpected behavior, 'let' and 'const' provide block scope and do not allow access before declaration, making them safer choices for variable declarations in modern JavaScript. 