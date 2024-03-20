// switch case without break statement
// program 1
let city = "chennai"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "lucknow":
        console.log("UP")
    default:
        console.log("incorrect city name")
}

// program 2
// switch case with break statement
let city2 = "chennai"
switch(city2){
    case "pune":
        console.log("MH")
        break 
    case "lucknow":
        console.log("UP")
        break
    case "bhopal":
        console.log("MP")
        break 
    default:
        console.log("incorrect city name")
}

// program 3
// switch with multiple case 
// let city3 = "chennai"
// switch(city3){
//     case "nagpur":
//     case "mumbai":
//         console.log("MH")
//         break
//     case "indore":
//     case "bhopal":
//         console.log("MP")
//         break 
//     case "jaipur":
//     case "udaipur":
//         console.log("RJ")
//     default:
//         console.log("incoorect city name")
// }

// program 4

let a1 = 10
let a2 = 50 
let a3 = 30
let greatest = true

switch(greatest){
    case a1 > a2 && a1 > a3:
        console.log("a1 is greater")
        break
    case a2 > a1 && a2 > a3:
        console.log("a2 is greater")
        break
    default:
        console.log("a3 is greater")
}



















