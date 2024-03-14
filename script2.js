let a = 10 
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let s = 100
let t  = 50

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// 10 -- 50 lines

// program 2 
function Calculator(x,y){
     console.log(x+y)
     console.log(x-y)
     console.log(x*y)
     console.log(x/y)
     console.log(x%y)   
}
Calculator(4,2)
Calculator(6,3)

// program 3

// function without parameter and without return  
function addA(){
    console.log(9+9)
}
addA()
addA()
addA()

// function with parameter and without return type 
function addB(x,y){
    console.log(x+y)
}
addB(3,4)
addB(13,3)
addB(13,6)

// function with parameter and with return type 
// 100 given 
// 100 shown

// function - keyword
// addC - function Name 
// () - parenthesis
// x,y - parameter
// {} - blocks
// {
    // statements
//}
//addC(12,3) calling the function 
// 12,3 - arguments

function addC(x,y){
    return x + y
}
let q = addC(12,3)
console.log(q+q) // 30
console.log(q/q) // 1
console.log(q-4) // 11

// function declartion 
function sub(x,y){
    return x - y
}
let q2 = sub(12,4)
console.log(q2)

// function expression 
let sub2 = function(x,y){
    return x - y
}
let q3 = sub2(12,4)
console.log(q3)

// arrow function

let sub3 = (x,y)=>{
    return x - y
}
let q4 = sub3(12,4)
console.log(q4)


let sub4 = (x,y)=> x - y
let q5 = sub4(12,4)
console.log(q5)