//this keyword on browser non strict
//1. returns a window object in key: value pairs
// console.log(this)

//2. using a function
// again gets the window object
// function showValue(){
//     console.log(this)
// }
// showValue()

//3. obj-fun-this
//we get the object itself
// let myObj = {
//     name : 'adam',
//     fn: function(){
//         console.log(this.name)
//     }
// }
// myObj.fn()

//4. obj-fun-fn-this
//we get the window object
let myObj2 ={
    name: 'steve',
    fn1 : function(){
        function fn2(){
            console.log(this)
        }
        fn2()
    }
}
myObj2.fn1()
