let numArr = [1,2,3,4,5,6]

// write a function that will take this array as an arg and will return the square of each element
// function square(array) {
//     for(let i=0; i<array.length; i++){
//         console.log(array[i]*array[i])
//     }
// } 
// return square(numArr)

//we donot need to write functions like this, instead higher order funstions will help here, HOF are inbuilt in JS
//HOF are the functions that functons that operates on another functions
//****higher order functions will only work with arrays, can not work with any other data type */

//forEach
numArr.forEach(function(num){
    console.log(num*num)
})

