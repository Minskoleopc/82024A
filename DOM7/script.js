let headOne = document.querySelector('h1')
let inputT = document.querySelector('input')
let button = document.querySelector('button')

console.log(headOne)
console.log(inputT)
console.log(button)

button.addEventListener('click',function(){
    let clr = inputT.value
    headOne.style.color = clr
    inputT.value = ""
})