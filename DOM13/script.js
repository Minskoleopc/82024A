let ulList = document.querySelector('ul')
let inputE = document.querySelector('input')
let buttonOne = document.querySelector('#one')

console.log(ulList)
console.log(inputE)
console.log(buttonOne)

buttonOne.addEventListener('click',function(){
    let txt = inputE.value // papaya
    let liList = document.createElement('li') // <li></li>
    liList.textContent = txt // <li>Papaya</li>
    createButtons(liList)
    ulList.appendChild(liList)
    inputE.value = ''
})

function createButtons(li){
    // <button class = "up">Up</button>
    // <button class = "down">Down</button>
    // <button class = "remove">remove</button>
    let up = document.createElement('button') // <button><button>
    up.classList.add('up') // <button class = "up"></button>
    up.textContent  = "Up" // <button class = "up">Up</button>
    li.appendChild(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" // <button>Down</button>
    down.classList.add('down') //<button class = "down"></button>
    li.appendChild(down)


    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.classList.add('remove') //<button class = "remove">Remove</button>
    li.appendChild(remove)

    

}