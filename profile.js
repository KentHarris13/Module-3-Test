console.log('Hello bois')



function bookR(){
    alert("The Lord of the Rings")
}

function placeR(){
    alert("Hawii")
}
function drinkR (){
    alert("Red Bull")
}

const book = document.querySelector('#book')
const place = document.querySelector('#place')
const drink = document.querySelector('#drink')

book.addEventListener('click', bookR )
place.addEventListener('click', placeR)
drink.addEventListener('click', drinkR)