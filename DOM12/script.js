let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('button')


buttonOne.addEventListener('click',function(){
    let txt = inputText.value //"papaya"
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = txt                  // <li>papaya</li>
    ulList.appendChild(newLi)
    inputText.value = ""
})