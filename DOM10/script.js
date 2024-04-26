
let headOne = document.querySelector('h1')
let button = document.querySelector('button')
let inputText = document.querySelector('input')

button.addEventListener('click',function(){
    let clr = inputText.value
    headOne.style.color = clr
    inputText.value = ""

})