//for loop
for (let i =0 ; i <= 10; i++) {
    const element = i;
 //   console.log(i);
    
}

//Table using for loop inside a for loop
for (let i = 0; i <=10; i++) {
    for(let j = 0;j<=10;j++){
        console.log(i + '*' + j + "=" + i*j)
    } 
}

//use of break

for (let index = 0; index < 10; index++) {
    console.log(`value of i is ${index}`);
    if(index == 5){
        break
    }
    
}

//use of continue to skip that number
for (let index = 0; index < 10; index++) {
    if(index == 5){
        continue
    }
    console.log(`value of i is ${index}`);
    
}