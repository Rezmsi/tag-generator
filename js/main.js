let input = document.querySelector('.input')
let mother = document.querySelector('.mother')
let remining = document.querySelector('.remining')
let removeAll = document.querySelector('.removeAll')
let index=0

input.addEventListener('keydown', (event)=>{

    if(event.keyCode === 13 && index<7){

        let splitArray=input.value.split(',')
        splitArray.forEach((tag) => {
            index++

            mother.insertAdjacentHTML('afterbegin',`
            <span class="tag-add">${tag}
            <img class="x-img" onclick="removeHandler(this)" src="src/img/x-mark.png">
            </span>
            `)
        });
        input.value=''
        remining.innerHTML=`${7-index} Tags are remaining`
    }
})

removeAll.addEventListener('click', ()=>{

    index=0
    remining.innerHTML=`${7-index} Tags are remaining`
    input.value=''

    for(let i=0 ; i<Array.from(mother.children).length-1;){
        Array.from(mother.children)[i].remove()
    }
})

function removeHandler(event){
    index--
    remining.innerHTML=`${7-index} Tags are remaining`
    event.parentElement.remove()
}