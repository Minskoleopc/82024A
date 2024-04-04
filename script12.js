// map() , filter() , forEach(), reduce()

let birthYear = [1989,1990,1991,1992]
// [35,34,33,32]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    // console.log(i)
    // console.log(birthYear[i])
    // console.log(2024 - birthYear[i])
    ages.push(2024 - birthYear[i])
}
console.log(ages)

let q2 = birthYear.map(function(el,index,arr){
   // console.log(el,index,arr)
   return 2024 - el
})
console.log(q2)

let numbers = [11,22,33,44,55]
//[12,23,34,45,56]
let q3 = numbers.map(function(el,index,arr){
    return el + 1
})
console.log(q3)

// program 2

let marks = [55,66,77,22,44,88,99]
let above70 = []
for(let i = 0 ; i < marks.length ; i++){
    console.log(i)
    console.log(marks[i])
    if(marks[i] > 70){
        above70.push(marks[i])
    } 
}
console.log(above70)
let q4 = marks.filter(function(el,index,arr){
    return el > 70
})
console.log(q4)

let transactions  = [11,22,33,55,66,77,-88,77,90,-56,88]
let deposit = transactions.filter(function(el){
    return el > 0
})
console.log(deposit)

let withdrawl = transactions.filter(function(el){
    return el < 0
})
console.log(deposit)
console.log(withdrawl)


// program 3

let mks = [11,22,33]
let total = 0
for(let i = 0 ; i < mks.length ; i++){
    total = total + mks[i]
}
console.log(total)
let q5 = mks.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q5)

let cities = ["pune","mumbai","banglore"]

for(let  i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome "+ cities[i])
}
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})



