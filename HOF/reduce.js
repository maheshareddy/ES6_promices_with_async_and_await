//Reduce actually reduce the array element in such a result that will give you one single output
let arr = [1,2,3,4,5,6]
//reduce adds each element = 21
// addition
let addition = arr.reduce(function(acc, values){
    let updatedSum = acc + values
    return updatedSum
},0)//0 is accumulator initially
console.log(addition)

//multiplication
let multiplication = arr.reduce(function(acc, values){
    let updatedmul = acc * values
    return updatedmul
},1)//0 is accumulator initially
console.log(multiplication)
