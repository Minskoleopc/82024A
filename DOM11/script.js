//<h1>Hello</h1> - element ----  obj ----- properties and method
 
// selecting  the element 

let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')
console.log(headOne.textContent)
//headOne.textContent  = "Bye"
buttonOne.addEventListener('click',function(){
    headOne.textContent = "Bye" 
})


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// console.log(info.firstName)
// info.firstName = "ankurk"
