function placeOrder(drink){
    return new Promise((resolve, reject) => {
        if(drink==='coffee'){
            resolve('Order for coffee recived')
        }else{
            reject('Other orders rejected')
        }
    })
}
function processOrder(order){
    return new Promise((resolve) => {
        console.log('order is been processed')
        resolve(`${order} and is serverd`)
    })
}
// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processedOrder){
//     console.log(processedOrder)
// })//chaining of promise
// .catch(function(err){
//     console.log(err)
// })//this was the solution with promices


//to handle larger chain we use async Await - keywords
//also with try & catch for error handling
async function serveOrder(){
    try{
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced)
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    }catch(error){
        console.log(error)
    }
}
//finally call the serveOrder function
serveOrder()
