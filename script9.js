
let a = 10
console.log(a)
console.log(typeof 10)

let b = "chinmay"
console.log(b)
console.log(typeof b)

let c = true
console.log(c)
console.log(typeof c)


// program 1 
//             0         1         2        3      4
let names = ["sarika","poorva","sanchita","raj","ramesh"]
// array stores the value by index
console.log(names[0])
console.log(names[1])
names[2] = "pranali"
console.log(names)

// loop
for(let i = 0 ; i < names.length; i++){ 
    console.log(names[i]) 
}

// i - 0
// i - 1
// i - 2
// i - 3
// i - 4

for(let i = names.length-1 ; i >= 0 ; i-- ){
    //console.log(i)
    console.log(names[i])
}

//              0  1  2  3
let numbers = [11,22,33,44]
for(let i = numbers.length-1 ; i >= 0 ; i--){
    console.log(numbers[i])
}

// push ()
// action - add the element to the last
// return - mew length of array

let cities = ["pune","mumbai",'banglore',"kolkata"]
let q1 = cities.push('nagpur')
console.log(q1)
console.log(cities)

// unshift()
// Action - add the element at the start of array 
// Return - new length of array

let fruits = ["apple","mango","banana","grapes"]
let q2 = fruits.unshift('chikoo')
console.log(q2)
console.log(fruits)

// pop()
// Action - removes the last element 
// return - return the same element 
//            0  1  2  3  4
let marks = [11,22,33,44,55]
let q3 = marks.pop()
console.log(marks)
console.log(q3)

// shift()
let state = ["MH","MP","UP"]
let q4 = state.shift()
console.log(q4)
console.log(state)

// shift() , unshift() , push(), pop()

// includes()
let flowers = ["lily","jasmine","rose","sunflowe"]
let q5 = flowers.includes('Rose')
console.log(q5)

// indexOf()
let q6 = flowers.indexOf('Lily')
console.log(q6)

// at()
flowers = ["lily","jasmine","rose","sunflower"]
let q7 = flowers.at(2)
console.log(q7)

// push() , unshift(), pop(), shift(), includes() , indexOf(), at()



















