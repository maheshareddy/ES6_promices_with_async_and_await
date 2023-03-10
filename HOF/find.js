// retuns/finds the satisfied conditions  at the first place only
//find is like filter only, but it wont return every element that satisfies the condition, but it only returns the first satisfying confition only
const transationsArray = [1000,3000,4000,2000,-898,3800,-4500]
let firstWithdrawel = transationsArray.find(function(amount){
    return amount < 0
})
console.log(firstWithdrawel)