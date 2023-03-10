// const fs = require('fs')

// console.log('before')

// let data=fs.readFileSync('./data/f1.txt')
// console.log('the data from file1 is this=>' + data)

// console.log('after')

//asynchronous execution 
console.log('before')
fs.readFile('f1.txt', cb);
    if (error){
        console.log(error);
    }else{
        console.log('i am file1 data' + data)
    }
fs.readFile('f2.txt', cb);
    if(error){
        console.log(error);
    }else{
        console.log('i am file2 data' +data)
    }
console.log('after')
//output will be 
//before
// after
// file1data
// file2data ** but the order can be anything

//to maintain the exact order, so keep the file2data inside the cb1 function like below
console.log('before')
fs.readFile('f1.txt', cb);
function cb2(error, data){  
if (error){
        console.log(error);
    }else{
        console.log('i am file1 data' + data)
        fs.readFile('f2.txt', cb);//this will execute in order
    }
}
function cb2(error, data){
    if(error){
        console.log(error);
    }else{
        console.log('i am file2 data' +data)
    }
}
console.log('after')
