let myObj = {}
console.log(myObj)

let person1 = {
    name: 'xyz',
    age: 25
}
console.log(person1.hasOwnProperty('name'))

//constructor fn
function person(_name, _age){
    this.name=_name
    this.age=_age
}
let person2 = new person('steve','30')
console.log(person2)