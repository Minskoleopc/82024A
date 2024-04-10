let names = ["chinmay","satish","sarika","raj","ramesh"]
let q1 = names.pop()
console.log(q1)
console.log(names)

names.shift()
console.log(names)

// splice()
//              0          1        2        3      4
// let country = ["india","srilanka","nepal","cuba","nepal"]
// //country.splice(startIndex, numberofElementToBeRemoved)
// country.splice(1,1)
// console.log(country)

// program 2

// let languages = ["hindi","marathi","sankrit","gujarati"]
// languages.splice(1,2,"kannad","bengali")
// console.log(languages)


// program 3
//            fn          ln      rn  ag
let info = ["chinmay","deshpande",34,56]

let info2 = {
    // property:value
    // property:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:56
}

//          0       1        2       3
fruits = ["apple","mango","banana","grapes"]
console.log(fruits)
// retrive 
console.log(fruits[0])
// update 
fruits[1] = "banana"
console.log(fruits)
// add 
fruits.push("papaya")
fruits.unshift('grapes')
// delete
fruits.pop()
fruits.shift()
fruits.splice(2,1)

info2 = {
    // property:value
    // property:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:56
}

//retrive  ---- dot notation / bracket notatation
console.log(info2.firstName)
console.log(info2['firstName'])
//update  -----  dot notation and bracket notation
info2.firstName = "tanmay"
info2['rollNo'] = 23
console.log(info2)
// add    -----  dot notation and bracket notation
info2.lastName = "dani"
info2.city = "pune"
info2['language'] = "marathi"
console.log(info2)
// delete  -----  dot notation and bracker
delete info2.city
delete info2['age']
console.log(info2)

let vehicle = {
    color:"red",
    type:"sedane"
}
//console.log(vehicle[0])

console.log(vehicle.color)
vehicle.color = "blue"
vehicle.reNo = 123
delete vehicle.type
console.log(vehicle)

console.log(vehicle['color'])
vehicle['type'] = "SUV"
vehicle['city'] = "mumbai"
delete vehicle['color']