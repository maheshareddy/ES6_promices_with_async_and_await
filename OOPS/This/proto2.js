function Person (_name, _age){
    this.name = _name
    this.age = _age

    // this.getNameAndAge = function(){
    //     console.log(`I am ${this.name} and my age is ${this.age}`)
    // }
}
Person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

let person1 = new Person('mahesh', 30)
let person2 = new Person('ram', 20)
console.log(person1.getNameAndAge())
console.log(person2)