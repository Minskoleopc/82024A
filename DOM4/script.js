//<h1 id = "one" class = "two" name = "nm">Chinmay</h1>

// id 
// Css Selector
let byId = document.querySelector('#one')
console.log(byId)

// class 
let byClass = document.querySelector('.two')
console.log(byClass)

// attribute
// tagName[attribute = "value"]
let byAttr = document.querySelector('h1[name ="nm"]')
console.log(byAttr)

// tagName
let byTagName = document.querySelector('h1')
console.log(byTagName)

// <p id = "four" class = "five" name = "six">para</p>

// Css selector
let byId2 = document.querySelector('#four')
let byClassName = document.querySelector('.five')
let byName = document.querySelector('p[name="six"]')
let byTagNamee = document.querySelector('p')


console.log(byId2)
console.log(byClassName)
console.log(byName)
console.log(byTagNamee)



