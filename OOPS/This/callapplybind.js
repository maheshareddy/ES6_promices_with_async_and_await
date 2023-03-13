//write a function globally to easy access 
let printDetails = function(city, power){
    console.log(`My name is ${this.firstName} ${this.lastName} abd my age is ${this.age} from ${city} and ${power}`)
}

let person1 = {
    firstName : "ram",
    lastName : 'reddy',
    age: 102,
    // city:'nw',
    // printDetails : function(){
    //     console.log(`My name is ${this.firstName} ${this.lastName} abd my age is ${this.age}`)
    // }
}
let person2 = {
    firstName : "mahesh",
    lastName : 'A',
    age: 10,
    // printDetails : function(){
    //     console.log(`My name is ${this.firstName} ${this.lastName} abd my age is ${this.age}`)
    // }
}

//call method, when using call, the ags of an array can be used without an array
//or call method will actually help you to borrow a function from another object or you can also write a function globally
// printDetails.call(person2, "blr", "ironman")

//apply method ->  the only difference is that pass the ags inside an array
// printDetails.apply(person2, ["blr", "ironman"])

//bind -> just a method which actually allows you to store your fucntion on a different varaible
// so that you call it at a later stage of time when ever you require that perticuler output
let myFun = printDetails.bind(person2, "blr", "ironman")
console.log(myFun) // o/p is [Function: bound printDetails]
//now call the myfun    
myFun()

// person1.printDetails()
// person2.printDetails()