let detailss = document.getElementById("detail")

function idPrint(part, container) {
    part.forEach(i => {
        container.innerHTML +=
        `
        <img src="${i.image}" alt="${i.name}">
            <article>
                <h3 class="card-title">${i.name}</h3>
                <p class="card-text">${i.description}</p>
                <h6 class="card-title">Date:</h6>
                <p class="card-text">${i.date}</p>
                <h6 class="card-title">Place:</h6>
                <p class="card-text">${i.place}</p>
                <h6 class="card-title">Capacity:</h6>
                <p class="card-text">${i.capacity}</p>
                <h6 class="card-title">Assistance:</h6>
                <p class="card-text">${i.assistance}</p>
                <h6 class="card-title">Price:</h6>
                <p class="card-text">${i.price}</p>
            </article>
            `

        })
    }


    function idPrint2(part, container) {
        part.forEach(i => {
          if(i.estimate == undefined){
            i.estimate="--"
            container.innerHTML +=
            `
            <img src="${i.image}" alt="${i.name}">
                <article>
                    <h3 class="card-title">${i.name}</h3>
                    <p class="card-text">${i.description}</p>
                    <h6 class="card-title">Date:</h6>
                    <p class="card-text">${i.date}</p>
                    <h6 class="card-title">Place:</h6>
                    <p class="card-text">${i.place}</p>
                    <h6 class="card-title">Capacity:</h6>
                    <p class="card-text">${i.capacity}</p>
                    <h6 class="card-title">Estimate:</h6>
                    <p class="card-text">${i.estimate}</p>
                    <h6 class="card-title">Price:</h6>
                    <p class="card-text">${i.price}</p>
                </article>
                `
        }
        else{
          container.innerHTML +=
          `
        <img src="${i.image}" alt="${i.name}">
            <article>
                <h3 class="card-title">${i.name}</h3>
                <p class="card-text">${i.description}</p>
                <h6 class="card-title">Date:</h6>
                <p class="card-text">${i.date}</p>
                <h6 class="card-title">Place:</h6>
                <p class="card-text">${i.place}</p>
                <h6 class="card-title">Capacity:</h6>
                <p class="card-text">${i.capacity}</p>
                <h6 class="card-title">Estimate:</h6>
                <p class="card-text">${i.estimate}</p>
                <h6 class="card-title">Price:</h6>
                <p class="card-text">${i.price}</p>
            </article>
            `
        }
    })
        
    }








    function filterId() {
        let filtro = []
        let getId = Number(location.search.slice(4))
        filtro = events.filter(e => e._id === getId)
        for(let event of filtro){

        if(event.date < currentDate){
            idPrint(filtro, detailss)
        }
        else{
            idPrint2(filtro, detailss)
        }}
    }
filterId()




