// program 1
let firstName = "chinmay"
let fn = firstName.toUpperCase()
console.log(fn)

let lastName =  "Deshpande"
let ln = lastName.toLowerCase()
console.log(ln)

let fruits = "apple"
let q1 = fruits.includes('l')
console.log(q1)
let q2 = fruits.includes('pp')
console.log(q2)

// toLowerCase() , toUpperCase() , includes()

// program 2
let city = "pune"
// 0  1  2  3
// p  u  n  e
console.log(city[0])
let q3 = city.indexOf("u")
let q4 = city.indexOf("N")
console.log(q3)
console.log(q4)

// program 3
// method chaining
let firstN = "chinmay"
let q5 = firstN.toUpperCase().toLowerCase().length
// "CHINMAY"        "chinmay"       7
console.log(q5)


// program 4
let  course = "I am learning javascript"
let q6 = course.replace("javascript","python")
console.log(q6)

// program 5
let info = ["chinmay","deshpande",7709192441]
let q7 = info.join('-')
console.log(q7)
// ["chinmay","deshpande","7709192441"]
let info2 = q7.split('-')
console.log(info2)

// program 6
//trimStart()
let city2  = " goa "
console.log(city2.length)
let q8 = city2.trimStart()
console.log(q8)
//trimEnd()
city2  = " goa "
console.log(city2.length)
let q9 = city2.trimEnd()
console.log(q9.length)

//trim()
city2  = " goa "
console.log(city2.length)
let q10 = city2.trim()
console.log(q10.length)











