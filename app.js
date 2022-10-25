let allEvents = events.sort((a, b) => a.name.localeCompare(b.name))


//Variables TASK2 y TASK3

let cards = document.getElementById('cards')
let search = document.getElementById("js-search")
let checkBox = document.getElementById("check")
let searchTexto = document.getElementById("search-text")


// TASK 2 - Card creation
function cardss(data) {
    cards.innerHTML = ''
    data.forEach(item => {
        let div = document.createElement('div')
        div.className = 'card'
        div.innerHTML += `
        <h5>${item.name}</h5> 
        <img src="${item.image}" alt="${item.name}" />
        <p> <strong>Date:</strong> ${item.date}</p>
        <p> <strong>Description:</strong> ${item.description}</p>
        <a class="more" href="./details.html?id=${item._id}">More...</a>

    `
        cards.appendChild(div)


    })

}


cardss(allEvents)



// TASK 3


//Search bar

function searchText(text, array) {
    let arrayFilter = array.filter(event => event.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFilter
}


//Checkboxes

function filterCategory(array) {
    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    let newCheckbox = Array.from(checkbox)
    let filterCheck = newCheckbox.filter(check => check.checked)
    let checkMark = filterCheck.map(caja => caja.value)
    if (checkMark.length > 0) {
        let arrayFiltrado = array.filter(event => checkMark.includes(event.category))
        return arrayFiltrado
    }

    return array

}


//Events

search.addEventListener("click", () => {
    let filterText = searchText(searchTexto.value, allEvents)
    let filterCateg = filterCategory(filterText)
    cardss(filterCateg)
})

checkBox.addEventListener("change", () => {
    let filterText = searchText(searchTexto.value, allEvents)
    let filterCateg = filterCategory(filterText)
    cardss(filterCateg)
})














