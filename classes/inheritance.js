class person{
    constructor(_name, _age, _gender){
        this.name = _name
        this.age = _age
        this.gender = _gender
    }
    welcome(){
        console.log(`Welcome here ${this.name}`)
    }
}

class student extends person{
    constructor(_name,_age,_gender,_marks){
        super(_name, _age, _gender)
        this.marks=_marks
    }
    test(){
        super.welcome()
    }
}

class teacher extends person{
    constructor(_name,_age,_gender,_strength){
        super(_name,_age,_gender)
        this.studentStrength=_strength
    }
}

let student1 = new student('steve','27','M','70')
let student2 = new student('mahesha','32','M','100')
// let person1=new person('adam','24','M')
console.log(student2)

let teacher1 = new teacher('abc','40','f','88')
console.log(teacher1)

student2.test()//we can inherit the methods also