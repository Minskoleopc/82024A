// logical operator 

// && - AND

// true   &&   true   ------> true 
// false  &&   true   ------> false
// true   &&   false  ------> false
// false  &&   false  ------> false

console.log(6 == 6 && 7 == 7)
console.log(7 == 6 && 8 != 7)
console.log(8 == 8 && 7 ==  6)
console.log(5 == 4 && 3 == 2)

// || - OR

// true    || true  ------ true 
// false   || true  ------ true
// true    || false ------ true 
// false   || false ------ false 

console.log(3 == 3 || 2 == 2)
console.log(2 != 2 || 5 == 5)
console.log(4 == 4 || 6 != 6)
console.log(5 == 6 || 7 == 8)


// Not operator =>  !

// ! True   ---> False
// ! False  ---> True

console.log(! (6 === 6))
console.log(!(6 === '6'))


// conditional statements 

// one input and multiple outcomes
// numT >  0 &&  numT <= 5  ===> 10 % discount
// numT >  5 &&  numT <= 10 ===> 20 % discount
// numT > 10                ===> 30 % discount  


let numT = 17

if(numT > 0 && numT <= 5){
    console.log("10 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}


let numberT = -17

if(numberT > 0 && numberT <= 5){
    console.log('10 % discount')
}
else if(numberT > 5 && numberT <= 10){
    console.log('20 % discount')
}
else if(numberT > 10){
    console.log('30 % discount')
}
else {
    console.log('incorrect value')
}









