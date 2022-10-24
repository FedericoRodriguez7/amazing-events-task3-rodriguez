let fecha = Date.parse(currentDate)

let upcomingEvents = events.filter(function (date) {
    return Date.parse(date.date) > fecha
}).sort((a, b) => a.name.localeCompare(b.name))

//Variables TASK2 y TASK3

let card = document.getElementById('cards')
let search = document.getElementById("js-search3")
let searchTexto = document.getElementById("search-text3")
let checkBox = document.getElementById("check3")

//TASK 2

function cardss(data) {
    card.innerHTML = ''
    data.forEach(item => {
        let div = document.createElement('div')
        div.className = 'card'
        div.innerHTML +=
            `<h5>${item.name}</h5> 
        <img src="${item.image}" alt="${item.name}" />
        <p> <strong>Date:</strong> ${item.date}</p>
        <p> <strong>Description:</strong> ${item.description}</p>
        <a class="more" href="./details.html?id=${item._id}">More...</a> `
        card.appendChild(div)
    })
}

cardss(upcomingEvents)

//TASK 3

//Search Bar
function searchText(text, array) {
    let arrayFilter = array.filter(event => event.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFilter
}

//Checkboxes

function filterCategory(array) {
    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    let newCheckbox = Array.from(checkbox)
    let filterCheck = newCheckbox.filter(check => check.checked)
    let checkMark = filterCheck.map(box => box.value)
    if (checkMark.length > 0) {
        let arrayFiltrado = array.filter(event => checkMark.includes(event.category))
        return arrayFiltrado
    }
    return array
}

//Events

search.addEventListener("click", () => {
    let filterText = searchText(searchTexto.value, upcomingEvents)
    let filterCat = filterCategory(filterText)
    cardss(filterCat)
})

checkBox.addEventListener("change", () => {
    let filterText = searchText(searchTexto.value, upcomingEvents)
    let filterCat = filterCategory(filterText)
    cardss(filterCat)
})