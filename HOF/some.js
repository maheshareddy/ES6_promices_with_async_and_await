//some basically returns true if even one or more elements statisfies the condition
const transationsArray = [-1000,-3000,-4000,-2000,-898,-3800,-4500]
let result = transationsArray.some(function(amount){
    return amount > 0
})
console.log(result)