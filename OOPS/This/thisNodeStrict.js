//this keyword with node using strict
'use strict'
console.log(this) //1. gives empty obj {}

//2. inside a fucntion 
//gives undefined
function showValue(){
    console.log(this) 
}
showValue()

//3. function inside an obj
//gives you the object itself
let myObj = {
    name : 'adam',
    fn: function(){
        console.log(this.name)
    }
}
myObj.fn()

//4. fun inside object-fun iniside function
//gives undefined
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