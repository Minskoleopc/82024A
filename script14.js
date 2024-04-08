// map() , filter() , reduce() , forEach()
// find () , findIndex() , every() ,some()


let  numbers = [11,22,33,44,55,66]

// [16,27,38,49,60,71]

let q1 = numbers.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el + 5
})
console.log(q1)

// program 2
let birthYear = [2000,2001,2002,2003,2004]
//[24,23,22,21,20]
let q2 = birthYear.map(function(el,index,arr){
    return 2024 - el
})
console.log(q2)

// program 3
let marks = [44,55,66,33,44,55]
// [55,66,55]
let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

let q4 = marks.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(q4)

// program 4
let numbersA = [11,22,33]
let q5 = numbersA.reduce(function(acc,el,index,arr){
    return acc + el // acc - 11 // acc - 33 // acc - 66
},0)
console.log(q5)

// program 5

//forEach - does not return anything

let cities = ["pune","banglore","kolkata","chennai"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program 6

//              0  1  2   3  4  5  6
let numbersB = [33,44,55,66,77,55,44]
let q7 = numbersB.filter(function(el,index,arr){
    return el > 60
})
console.log(q7)

// find 
let q8 = numbersB.find(function(el,index,arr){
    return el > 60
})
console.log(q8)

// findIndex
let q9 = numbersB.find(function(el,index,arr){
    return el > 60
})
console.log(q9)

// program 7
let a1 = [1,22,33,11,22,33]
let q10 = a1.every(function(el,index,arr){
    return el > 10
})
console.log(q10)

let q11 = a1.some(function(el,index,arr){
    return el > 100
})
console.log(q11)












