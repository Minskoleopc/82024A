// program 1

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// program 2
// for loop and while loop

// syntax

// for(intialialzation;conditionCheck;increment/decrement){
//     // statement
// }

for(let i = 1 ; i <= 5 ; i++ ){ // 2 // 3 // 4 // 5 // 6
    console.log(i) // 1 // 2 // 3 // 4 // 5
}
// 1 <= 5 --- True
// 2 <= 5 --- True
// 3 <= 5 --- True
// 4 <= 5 --- True
// 5 <= 5 ---- True

// program 2
for(let i = 1 ; i <= 3 ; i++){ // 2  // 3 // 4
    console.log(i) // 1 // 2 // 3
}

// program 3
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log("hello") // hello // hello // hello
}

// program 4
for(let i = 5 ; i >= 0 ; i--){ // 4 // 3 // 2 // 1 // 0 -1
    console.log(i)  // 5 // 4 // 3 // 2 // 1 // 0
}

// program 5
for(let i = 1 ; i <= 10 ; i++){ 
    console.log(i*2) 
}

// program 6
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4  // 6 ------ 22
    console.log(i) //2 // 4 ------------- 20
}


// program 1
// for(intialization ; conditionCheck ; increment/decrement){
    // statements
//}

// print 1 to 3 2 times
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log(i) // 1 // 2  // 3
}

// print "hello 3 times"
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log("hello") // "hello" // "hello" // "hello"
}

// print 1 to 5
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    console.log(i) // 1 // 2  // 3 // 4// 5
}

// print 5 to 1
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// table of 2 
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 ------- 22
    console.log(i) // 2 // 4 ----------- 20
}
// table of 5 in reverse 

for(let i = 50 ; i >= 5 ; i = i - 5){ // 45 // 40 // 35 ------ 0
    console.log(i) // 50 // 45 // 40 ---------- 5
}

//for with break statement 

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1 // 2
}


for(let i = 1 ; i <= 5 ; i++){  // 2 // 3
    console.log(i)  // 1 //2 // 3
    if(i == 3){
        break
    }
    
}

for(let i  = 5 ; i >= 1 ; i--){
    if(i == 3){
        break
    }
    console.log(i)
}

// continue with break statement
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 1 // 2 // 4 // 5
}

// while 




















