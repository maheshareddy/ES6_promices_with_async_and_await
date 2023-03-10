//map is very similler to forEach 
//map will loop through every element of your array and will perform specific operations that you have prvided
let arr = [1,2,3,4,5]
let squaredArray = arr.map(function(num){//map will go over every function and return us the squared value
    return num*num
})
//map method will allways return you a new array with your results
//map will return array always, where as forEach will not return any array
console.log(squaredArray)


//change rupees in to dollers (minus values are withdrawalls)
const transationsArray = [1000,3000,4000,2000,-898,3800,-4500]
const inrToDoller = 80
let transactionInDollers = transationsArray.map(function(amount){
    return (amount/80).toFixed();
})
console.log(transactionInDollers)