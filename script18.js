// program 1

let firstName = 'chinmay'
let lastName = "deshpande"
let middleName = `shirish`

// string stores the value by index ???

let city = "pune"
// 0    1    2    3
// p    u    n    e
console.log(city[0])

// immutable
//city[0] = "y"
//console.log(city)

// program 2
// string concat
let fn = "tanmay"
let ln = "deshpande"
console.log("My firstName is " + fn + " my lastName is " + ln)
console.log(`My firstName is ${fn} my lastName is ${ln}`)

// program 3
// number + string -------> string 
// string + string -------> string 
// number + number -------> number 
// string + number -------> string

let a = 10
let b = 5
let c = "hello"

console.log(a + b + c)
// number + number + string
// 15 + "hello"
//   15hello
console.log(c + a + b)
// string + number + number
//       string + number 
// string
//'hello10'+5
// hello105

console.log(a + c + b)
//number + string + number
// 10hello5

// loop

let city2 = "chandrapur"
// 0  1  2  3  4  5  6  7  8  9
// c  h  a  n  d  r  a  p  u  r

// print all characters  // using - for 

for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    //console.log(city2[i])
}

// print all characters in reverse using - for 
for(let i = city2.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(city2[i])
}

// using while loop
let i1 = 1
while(i1 < city2.length){
    console.log(i1)
    console.log(city2[i1])
    i1 = i1 + 1
}

// Object --- properties and methods











