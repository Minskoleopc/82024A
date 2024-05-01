let inputText = document.querySelector('input')
let buttonOne = document.querySelector('#one')
let ul = document.querySelector('ul')

buttonOne.addEventListener('click',function(){
    let text = inputText.value // "papaya"
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text  // <li>Papaya</li>
    createButtons(newLi)
    ul.appendChild(newLi)
    inputText.value = ""

})

function createButtons(li){

    // <button class = "remove">Remove</button>
    // <button class = "up">Up</button>
    // <button class = "down">Down</button>

    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

}

ul.addEventListener('click',function(event){
    // console.log(event.target) // element
    // console.log(event.target.tagName)// tagName
    // console.log(event.target.className) // [class='classValue']

    if(event.target.tagName == "BUTTON"){

        if(event.target.className == "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(event.target.className == "up"){

            let li = event.target.parentElement
            let ul = li.parentElement
            let prevli = li.previousElementSibling
            if(prevli){
                ul.insertBefore(li,prevli)
            }
            
        }
        else if(event.target.className == "down"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextli = li.nextElementSibling
            if(nextli){
                ul.insertBefore(nextli,li)
            }

        }
    }


})
