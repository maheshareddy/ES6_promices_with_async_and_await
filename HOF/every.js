

const transationsArray = [-1000,-3000,-4000,-2000,-898,-3800,-4500]
let result = transationsArray.every(function(amount){
    return amount < 0
})
console.log(result)