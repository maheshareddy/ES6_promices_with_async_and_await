// class CarTest{
//     //instance properties 
//     //name, color, topSpeed, brand
//     //instance methods
//        //drive a car
//        //speedup a car
//        //slowdown
    
// }


class Car {
    constructor(_name, _color, _topSpeed){
        this.name= _name,
        this.color= _color,
        this.topSpeed= _topSpeed
    }
    //methods
    drive(){
        console.log(`I am driving at ${this.topSpeed}`)
    }
    colorfull(){
        console.log(`my car color is ${this.color}`)
    }
}
let car1 = new Car('baleno','red',450)
let car2 = new Car('BMW','blue',5677)
// console.log(car1)
// console.log(car2)
car1.drive()
car1.colorfull()