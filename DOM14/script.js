let ulList = document.querySelector('ul')
let buttonAdd = document.querySelector('#one')
let inputText  = document.querySelector('input')

buttonAdd.addEventListener('click',function(){
    let txt = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = txt // <li>Papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""

})

function createButtons(li){
    // <button class = "remove">Remove</button>
    // <button class = "up">Up</button>
    // <button class = "down">Remove</button>
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

ulList.addEventListener('click',function(event){
    //console.log(event.target) // element
    //console.log(event.target.tagName) // tagName
    //console.log(event.target.className)

    if(event.target.tagName == "BUTTON"){

        if(event.target.className == "remove"){
            let li = event.target.parentElement
            let ulList  = li.parentElement
            ulList.removeChild(li)
        }
        else if (event.target.className == "up"){

        }
        else if(event.target.className == "down"){

        }
    }



})