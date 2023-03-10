//func creation, defination, declaration
function greet(){
    console.log("hello func")
}

//call a function
greet()

//reguler functions
//add
function add(a,b){//a and b are parameters of function
    console.log(a+b);
}
add(10,20)//10 and 20 are aguments to that a and b parameters

//sub
function subtract(c,d){
    console.log(c-d);
}
subtract(10,20)
//mul
function mul(e,f){
    console.log(e*f)
}
mul(10,20)
//division
function division(g,h){
    console.log(g/h);
}
division(10,20)

//function expression , more RECOMMENDED
// in js function also act as variables
//ie include a function inside a variable
let add1 = function(i,j){
    console.log(i+j)
}
add1(10,10)

//IFFE (Imeedietly invoked fucntion expression)
let mulitply = (
    function(x,y){
    console.log(x*y)
}
)(2,3)
