let person = {
    name: 'ram',
    age: 23,
    phone: 1233456778
};

//acccess any value inside an object
// dot notation\
console.log(person)
console.log(person.name);//prints ram

//bracket notation using string
console.log(person['phone'])

//
let captainAmerica = {
    firstName :'steve',
    lastName: 'bla',
    isAvengr: true,
    friends: ['name1','name2','name3'],
    age: 122,
    //nested objects
    address: {
        state: "new yark",
        city: "manhatton",

    },
    address_two: {
        state: "new yark",
        city: "manhatton",

    }
    //can also create functions inside of an object
}
console.log(captainAmerica)
//access the values 1 dot notation, 2 bracket notation
console.log(captainAmerica.friends[1])
console.log(captainAmerica.address_two['city'])
captainAmerica.movies=['movie1','movie2','movie3']
console.log(captainAmerica)
captainAmerica.movies.push['movie4']
console.log(captainAmerica.movies[2])
//delete keyword
delete captainAmerica.age;
console.log(captainAmerica);
captainAmerica.isAvengr = false;
console.log(captainAmerica)
