

// // push()
// // Action 
// // Return type 

// let names = ["chinmay","sarika","sachin","ramesh"]
// let s1 = names.push('poorva')
// console.log(s1)
// console.log(names)

// // unshift()

// let s2 = names.unshift("amol")
// console.log(s2)
// console.log(names)

// // pop()
// // [ 'amol', 'chinmay', 'sarika', 'sachin', 'ramesh', 'poorva' ]
// let s3 = names.pop()
// console.log(s3)
// console.log(names)

// // shift()
// //[ 'amol', 'chinmay', 'sarika', 'sachin', 'ramesh' ]
// let s4 = names.shift()
// console.log(s4)
// console.log(names)

// // includes()
// let s5 = names.includes("raj")
// let s6 = names.includes("sarika")
// console.log(s5)
// console.log(s6)
// console.log(names)
// // [ 'chinmay', 'sarika', 'sachin', 'ramesh' ]

// // indexOf()
// let s7 = names.indexOf('sachin')
// let s8 = names.indexOf('Sachin')
// console.log(s7)
// console.log(s8)

// // at()
// //[ 'chinmay', 'sarika', 'sachin', 'ramesh' ]
// let s9  = names.at(2)
// console.log(s9)
//                 0    1    2    3
let birthYear =  [1989,1990,1991,1992]
let ages = [] //[35,34,33,32]
// [35,34,33,32]
for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2024 - birthYear[i])
    ages.push(2024 - birthYear[i])
}
console.log(ages)

//program 2
//            0  1  2  3  4
let marks = [77,89,44,66,77]
let above70 = []

for(let i = 0 ; i < marks.length ; i++){
    // console.log(i)
    // console.log(marks[i])
    if(marks[i] > 70){
        above70.push(marks[i])
    }
}
console.log(above70)

// program 3 
let numbers = [11,22,33] // 66
let total = 0
for(let i = 0 ; i < numbers.length ; i++){
    // console.log(i)
    // console.log(numbers[i])
    total = total + numbers[i]
    //       0    +     11   ------ 11
    //       11   +     22   ------ 33
    //       33   +      33   ------ 66
}
console.log(total)

// program 4 
let cities = ["nagpur","pune","wardha","delhi"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome "+ cities[i])
}

