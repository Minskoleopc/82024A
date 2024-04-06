
// map , filter , reduce , forEach 
// find , findIndex, every ,some


let birthYear = [2000,2001,2002,2003]
let q1 = birthYear.map(function(el,index,arr){
    return  2024 - el
})
console.log(q1)

let numbers = [1,2,3,4,5,6,7,8,9,10]
let q2 = numbers.map(function(el,index,arr){
    return el * 10
})
console.log(q2)

// filter 

let marks = [78,80,65,88,99,23,55]
// [80,88,99]
let q3 = marks.filter(function(el,index,arr){
    return el >= 80
})
console.log(q3)

// reduce 
let  numbersB = [11,22,33]
let q4 = numbersB.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q4)

// forEach 
let cities = ["pune","mumbai","banglore","kolkata"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// find
//              0  1  2  3  4  5  6 
let numberC = [56,77,83,44,55,66,77]
let q5 = numberC.filter(function(el){
    return el > 70
})
console.log(q5)


let q6 = numberC.find(function(el,index,arr){
    return el > 70
})
console.log(q6)

let q7 = numberC.findIndex(function(el,index,arr){
    return el > 70
})
console.log(q7)

// every 
let  n = [22,33,44,5,66,77,88]
let q22 = n.every(function(el,index,arr){
    return el > 10
})
console.log(q22)

// some
let q33 = n.some(function(el,index,arr){
    return el > 400
})
console.log(q33)

// map() , filter() , reduce() , forEach() , findIndex() , find(), some() , each()

// 9.00 am -----> 
// 8.00 pm -----> 










