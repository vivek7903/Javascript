//Imediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. 
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//  The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

//normal function declaration
function normalFunction(){
    console.log(`This is a normal function declaration.`);
};

//IIFE
(function IIFEFunction(){
    console.log(`This is an Immediately Invoked Function Expression (IIFE).`);     
})();

normalFunction(); // This is a normal function declaration.

//call stack
function one(){
    console.log(`Function one is called.`);
}
function two(){
    one();
    console.log(`Function two is called.`);
}
two();