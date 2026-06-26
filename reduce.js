const cart = [300,400,700,800];

const Total = cart.reduce(function (acc,currVal) {
    console.log(`acc value is ${acc} current value is ${currVal}`)
    return acc + currVal
},0)

const price = cart.reduce((acc,currVal) =>
acc + currVal)
console.log(price);

const course = [{
    itemName : "js",
    price : 2999,
},{
    itemName : "python",
    price : 3000,
},{
    itemName : "Mern stack",
    price : 5000,
},]

const coursePrice = course.reduce((acc,currVal) =>
acc + currVal.price ,0)
console.log(coursePrice);

/*for...of → of = values
for...in → in = keys/indexes
forEach() → Do something
map() → Modify every element
filter() → Filter unwanted elements
reduce() → Reduce many into one*/
