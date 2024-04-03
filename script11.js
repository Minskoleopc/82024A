// program 1
//                 0    1    2    3
let  birthYear = [1989,1990,1991,1992]
let ages = []
// [35,34,33,32]

for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    //console.log(2024 - birthYear[i])
    ages.push(2024 - birthYear[i])
}
console.log(ages)

// program 2
//             0  1  2  3
let numbers = [11,22,33,44]
let numbersB = []
//[12,23,34,45]
for(let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i])
    numbersB.push(numbers[i]+1)
}
console.log(numbersB)

// program 3
let marks = [11,22,33,44,522,33,44,555,66,77,888,33,444]
let above500 = []
for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 500){
        above500.push(marks[i] )
    }
}
console.log(above500)

// program 4
let markss = [11,22,33]
let total = 0
for(let i = 0 ; i < markss.length ; i++){
    //console.log(markss[i])
    total = total + markss[i]
    //       0     +   11  --------> 11
    //       11    +   22  --------> 33
    //       33    +   33  --------> 66
}
console.log(total)

let cities = ["pune","mumbai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome "+cities[i])
}


