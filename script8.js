//program 1
let i1 = 1
while(i1 <= 5){
    console.log(i1)  // 1 // 2 // 3
    if(i1 == 3){
        break
    }
    i1 = i1 + 1  // 2 // 3
}
// program 2
let i2 = 1
while(i2 <= 5){
    if(i2 == 3){
        break
    }
    console.log(i2) //1 // 2
    i2 ++ // 2 // 3
}

// program 3
let i3 = 5
while(i3 >= 1){
    console.log(i3) // 5 // 4 // 3 // 2
    if(i3 == 2){
        break
    }
    i3 -- // 4 // 3 // 2
}

// program 4
let i4 = 1
while(i4 <= 5){
    if(i4 == 3 ){
        i4 = i4 + 1 // 4
        continue
    }
    console.log(i4)  //1  // 2 // 4 // 5
    i4 = i4 + 1   // 2 // 3 // 5 // 6
}





