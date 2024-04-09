// push()

let names = ["chinmay","ram","sham"]
names.push("sarika")
console.log(names)

// pop()
names.pop()
console.log(names)

// shift()
names.shift("sachin")
console.log(names)

// unshift()
names.unshift("ninad")
console.log(names)

// indexof()
let q1 = names.indexOf('ram')
console.log(q1)

// includes()
let a = names.includes('sham')
console.log(a)

// contact()

let fruits = ["apple","mango","banan"]
let fruits2  = ["grapes","watermelon","papaya"]
let q11 = fruits.concat(fruits2)
console.log(q11)

// slice()
//              0         1         2        3        4
let cities = ["pune","banglore","kolkata","chennai","rajkot"]
//              -5      -4         -3       -2         -1
//cities.slice(startIndex,endIndex (not included))
let a11 = cities.slice(3)
console.log(cities.slice(1,4))
console.log(cities.slice(0,-1))
console.log(cities.slice(-4,-1))
console.log(cities.slice(1,-1))
console.log(cities.slice(-3))
console.log(cities.slice(-1,-4))

// splice()

// sort()
let vegetables = ["tomato","potato","brinjal"]
vegetables.sort()
console.log(vegetables)

// flat()
//                   0                      1                  2
//               0         1         0          1          0         1
let states = [["Nagpur","Wardha"],["Jaipur","Udaipur"],["Lucknow","Kanpur"]]
console.log(states[0][0])
console.log(states[2][0])
console.log(states[2][1])
let q3 = states.flat()
console.log(q3)

// reverse()
let marks = [11,22,33]
let b1 = marks.reverse()
console.log(b1)

// join()

let info  = ["chinmay","shirish",7709192441]
let b2 = info.join("@")
console.log(b2)

// at()

// map()

// filter()

// reduce()

// forEach()

// some()

// every()

// find()

// findIndex()
