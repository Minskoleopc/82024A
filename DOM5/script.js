//<h1 id="one" class="two" name="nm">HeadingOne</h1>

let byId = document.querySelector('#one')
let byClass = document.querySelector('.two')
let byAttribute  = document.querySelector('h1[name = "nm"]')
let byTagName = document.querySelector('h1')

console.log(byId)
console.log(byClass)
console.log(byAttribute)
console.log(byTagName)


byId.addEventListener('click',function(){
    byId.style.color = "green"
})