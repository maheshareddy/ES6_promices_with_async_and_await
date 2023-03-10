// innitializing an array
let arr=[];
//fruits array, arrays are zero based indexing , linear DS
let fruits=['mango', 'apple', 'orange'];
//acca=essing perticuler element from an array
// arrays in js can store different types of data , BUT in java it is not the calse, java arrays needs same type of data as it is static DS
let appleElement=fruits[1];
// console.log(fruits);
// console.log(appleElement);

let myArray = ['A', 1 , false];
console.log(myArray);

//array methods used with Js

//1. push method
//adding an element at the end of an array
fruits.push('watermillon');
console.log(fruits);
//pop method-> removing the element at the end of the array
fruits.pop();
console.log(fruits);
//add and remove an element from the starting of an array
//1.unshift-allows you to add an element at the starting of an array
fruits.unshift("banana");
console.log(fruits);
//2.shift->remove an element from the starting of an array
fruits.shift()
console.log(fruits);