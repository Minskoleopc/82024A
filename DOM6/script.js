let buttonByTagName = document.querySelector('button')
let headingByName = document.querySelector('h1')

console.log(buttonByTagName)
console.log(headingByName)


buttonByTagName.addEventListener('click',function(){
    headingByName.style.color = "red"
})