const myNums = [1,2,3,4,5,6,7,8,9];

const newNums = myNums.filter( (nums) => (nums > 4) )
console.log(newNums);

//another way in this when we use braces we have to use return
const newNums2 = myNums.filter((nums1) => {
    return nums1 > 3
})
console.log(newNums2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const user = books.filter( (bk) => bk.publish > 1990 && bk.genre === 'History')
  console.log(user);
  
//Map is used to add or any type of operation on array
const myNumber = [1,2,3,4,5];
const num2 = myNumber.map((num) => num + 10)
const num3 = myNumber.map((num) => {return num + 20})
console.log(num3);
console.log(num2);

myNumber.forEach(num => {
    console.log(num + 30);
})

//Chaining where we can add map
const newNum = myNumber.map((num) => num * 10).map((num) => num +1);
console.log(newNum);

