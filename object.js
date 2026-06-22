const obj ={
    name: "vivek",
    age:22,
    salary:20000,
}
console.log(obj.name);
console.log(obj["age"]);

//to modify the value of the object
obj.salary=30000;
console.log(obj.salary);
//to add new property in the object
obj.city ="delhi";
console.log(obj.city);

//to delete the propertry from the object
delete obj.age;
console.log(obj.age);

console.log(obj);

//to freeze the object which means we cannot modify the object
Object.freeze(obj);
obj.salary=40000; //this will not work
console.log(obj.salary);

//functions
const person ={function(){
    console.log(`hello ${this.name}`)
}}
console.log(person.function())

//to create a singleton object
const newObject = Object();
console.log(newObject);

//to add a property to the object
newObject.name ="Vivek";
console.log(newObject.name);

//to delete the property from the object
delete newObject.name;
console.log(newObject.name);

//we can also create an object using the constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
}
const person1 = new Person("Vivek",22);
console.log(person1.name);
console.log(person1.age);

//to merge two objects
const obj1 ={a:1,b:2};
const obj2 ={c:3,d:4};
const mergedObj = Object.assign({},obj1,obj2);
console.log(mergedObj);

//to get the keys of the object
console.log(Object.keys(mergedObj));

//to get the values of the object
console.log(Object.values(mergedObj));

//to merge two objects using spread operator
const mergedObj2 = {...obj1,...obj2};
console.log(mergedObj2);