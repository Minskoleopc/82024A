let x = 10 
console.log(x)
x  = 1000
console.log(x)

const h = 1000
console.log(h)
//h = 99

// program 2 
// let and const are blocked scope
{
    let z = 100
    console.log(z)
}

// program 3

let q = 8 
let r = 4

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)


let s = 10
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// 10 pair -- 50 lines DRY 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,3)
Calculator(10,5)
