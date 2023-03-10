let arr = [
    {name: "A", age: 14, gender: 'M'},
    {name: "B", age: 23, gender: 'F'},
    {name: "C", age: 25, gender: 'M'},
    {name: "D", age: 35, gender: 'F'},
    {name: "E", age: 45, gender: 'M'},
    {name: "F", age: 67, gender: 'F'},
    {name: "G", age: 78, gender: 'M'},
    {name: "H", age: 89, gender: 'F'}
]

//take out age of all M using map and fileter
let males = arr.filter(function(obj){
    // if (obj.gender === 'M')
    return obj.gender=='M'
}).map(function(obj){
    return obj.age
})
// let maleAges = males.map(function(obj){
//     return obj.age
// })
console.log(males)
// console.log(maleAges)