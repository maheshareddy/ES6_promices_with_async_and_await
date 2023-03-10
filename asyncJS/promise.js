//how to produce a promise
let myPromise = new Promise(function (resolve, reject){
    const a=4
    const b=5
    setTimeout(()=>{
        if(a===b){
            resolve('the values are equal')
        }else{
            reject('values are not equal')
        }
    },2000)
})


//consuming he promise
myPromise.then(function(result){
    console.log(result)
})//fullfilled state
myPromise.catch(function(failedResult){
    console.log(failedResult)
})//reject state

//your promise willl be settled
console.log(myPromise)