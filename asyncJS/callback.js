// A callback is a function that can be passed to another func as an argument
// function printName(name,cb,cb2){
//     console.log(name)
//     cb('callback reddy')
//     cb2()
// }
// printName('Mahesha', printTagline, printNumber)

// function printTagline(tagline){
//     console.log(tagline)
// }

// //
// function printNumber(){
//     console.log(Math.random())//math.randon creates number between 0 to 1
// }

//calculator
function calculator(add,sub,mul,div){
    add(2,3)
    sub(10,20)
    mul(2,2)
    div(5,10)
}

function addition(a,b){
    console.log(a + b);
}
function subtraction(a,b){
    console.log(a-b);
}
function multiplication(a,b){
    console.log(a * b);
}
function division(a,b){
    console.log(a / b);
}

calculator(addition, subtraction, multiplication,division)
