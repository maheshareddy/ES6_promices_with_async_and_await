//this keyword with node non strict mode
//console log this keyword, what output

console.log(this) // with node it returns {} , ie an emplty object

//inside function
function showValue(){
    console.log(this) //this inside a function prints the global object
}
showValue() //return global object, inside it there are global objects are defined

//inside an object and define a fucntion
//object inside an object we defined a fn from this fn we are seeing the value of this, it prints the object itself
let myObj = {
    name : 'adam',
    fn: function(){
        console.log(this.name)
    }
}
myObj.fn()

//function inside a function
//we again get global object
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



