//similler to map, but filter works on contions, wil be filtering out based on conditions
//filter returns a new array as map does, it will return all those elements that matches the speficic condition that you will provode
//if the condition is true will return the element for that condtion, if false it will discard that element

let numbers = [2,1,4,5,8,10,11,13]
let evenArray = numbers.filter(function(num){
    return num%2===0
})
console.log(evenArray)
let oddArray = numbers.filter(function(num){
    return num%2!==0
})
console.log(oddArray)

//takeout all the positive values from the below array
const transationsArray = [1000,3000,4000,2000,-898,3800,-4500]
let positivenum = transationsArray.filter(function(amount){
    return amount > 0
})
console.log(positivenum)