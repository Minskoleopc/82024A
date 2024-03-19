// one input and multiple outcomes  -- conditional statements 

let numT = 17

if (numT > 0 && numT <= 5) {
    console.log("10 % discount")
}
if (numT > 5 && numT <= 10) {
    console.log("20 % discount")
}
if (numT > 10) {
    console.log("30 % discount")
}

// program 2

let numTb = -17

if (numTb > 0 && numTb <= 5) {
    console.log("10 % discount")
}
else if (numTb > 5 && numTb <= 10) {
    console.log("20 % discount")
}
else if (numTb > 10) {
    console.log("30 % discount")
}
else {
    console.log("incorrect input")
}

// program 3

let marks = 56

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade C")
// }


if (marks > 90) {
    console.log("Grade A")
}
else if (marks >= 75) {
    console.log("Grade B")
}
else if (marks >= 65) {
    console.log("Grade C")
}
else {
    console.log("please try again !")
}


// program 4 
let a1 = 10 
let a2 = 50

if(a1 > a2){
    console.log("a1 is greater")
}
else {
    console.log("a2 is greater")
}

// program 5

let x1 = 10 
let x2 = 50
let x3 = 200

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}

// program 5

let s = 10
let t = 50

if(s > t){
    console.log("s is greater")
}
else {
    console.log("t is greater")
}

// tenary operator
s > t ? console.log("s is greater"):console.log("t  is greater")



// program 6

let age = 17
let q1 = age >= 18 ?"can drive":"cannot drive"
console.log(q1)





