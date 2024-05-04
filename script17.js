// program 1

let fruits = ["apple","mango","banana","grapes"]
// push()
// unshift()
// shift()
// pop()

// fruits.push("papaya")
// console.log(fruits)

// fruits.unshift("chikoo")
// console.log(fruits)

// fruits.pop()
// fruits.shift()

// program 2 
//fruits = ["apple","mango","banana","grapes"]

// let r1 = fruits.includes("banana")
// console.log(r1)

// let r2 = fruits.indexOf("Mango")
// console.log(r2)

// let r3 = fruits.at(2)
// console.log(r3)


// program 3

// map() , filter() , reduce() , forEach() ,find()
// findIndex() , some() , every()


let birthYear = [1989,1990,1992,1993]
let arr = birthYear.map(function(el,index,arr){
    return 2024 - el
})
console.log(arr)

// filter()
let marks = [11,22,33,44,222,33,44,55,66,66]
let q2 = marks.filter(function(el,index,arr){
    return el > 50 && el <= 100
})
console.log(q2)


// program 3

let numbers  = [11,22,33]
let r4 = numbers.reduce(function(acc,el,index,arr){
    return el + acc
})
console.log(r4)


// program 4
let cities = ["pune","mumbai","satara","nashik"]
cities.forEach(function(el){
    console.log(`welcome `+ el)
})

// program 5

//let numbers2 = [12,34,66,77,44,55,666]
// let r5 = numbers2.filter(function(el){
//     return el > 30
// })
// console.log(r5)

// let r6 = numbers2.find(function(el){
//     return el > 30
// })
// console.log(r6)

// let r7 = numbers2.findIndex(function(el){
//     return el > 30
// })
// console.log(r7)


// let r8 = numbers2.every(function(el){
//     return el > 10
// })
// console.log(r8)

// let r9 = numbers2.some(function(el){
//     return el > 100
// })
// console.log(r9)


// program 6

// concat()

let n = [11,22,33]
let m = [44,55,66]

let r44 = n.concat(m)
console.log(r44)


// join()

let info = ["chinmay","deshpande",7709192441]
let r33 = info.join('-')
console.log(r33)

// splice()
numbers2 = [12,34,66,77,44,55,666]
//numbers2.splice(startIndex,numberOfElementsToBeDeleted)
//numbers2.splice(2,1)
numbers2.splice(2,1,9999)

// sort()

let country = ["india","pakistan","japan","cuba"]
let ii = country.sort()
console.log(ii)

// reverse()
country.reverse()
console.log(country)


// flat()

let numbersK  = [["PUNE","NGP"],["JAIPUR","UDAIPUR"],["BHOPAL","UJJAIN"]]
let r3 = numbersK.flat()
console.log(r3)

// fill()
//        0  1  2  3  4  5
let ni = [22,33,44,55,66,77]
let r55 = ni.fill('@',1,4)
console.log(r55)

//slice()
//              0     1   2    3      4
let states  = ["MH","MP","UP","RJ","BIHAR"]
//             -5    -4   -3  - 2      -1
//states.slice(startIndex,endIndex(not included))
console.log(states.slice(2))
console.log(states.slice(1,4))
console.log(states.slice(-5))
console.log(states.slice(-5,-1))
console.log(states.slice(-5,3))
console.log(states.slice(1,-1))
console.log(states.slice(-1,-3))

// 7 days ------ 28 minutes 

