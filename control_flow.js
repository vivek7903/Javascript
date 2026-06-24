const value = 9;

//if else statement
if(value < 10){
    console.log("Value is less than 10");
}else{
    console.log("Value is greter than 10");
    
}

//Switch case
const month = 9;
switch (month) {
    case 1:
        console.log("januaray");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("september")
        break;
}

//Truthy and falsy value these are the value jisko hum maan lete bina compare kiye
//Truthy value : "0",'false'," ",{},function(){}

//Falsy value : false ,0 ,-0 ,BigInt 0n ,"",null,undefined,NaN

//To check if the array is empty
const username =[];
if(username.length ===0){
    console.log("array is empty");
}

//To check if the object is empty
const Obj1 = {};
if(Object.keys(Obj1).length ===0){
    console.log("Object is empty");
}

//Null Coalescing Operator (??) : null undefined

let Val1 ;
//Val1 = 5 ?? 10; //the first value will be printed
Val1 = null ?? 10;

console.log(Val1);

console.log(Boolean(""));
console.log(Boolean("Vivek"));
console.log(Boolean(0));
console.log(Boolean(1));
