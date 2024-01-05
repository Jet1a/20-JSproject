const containerEl = document.querySelector("#container")
const getCountries = async() =>{
    const url = 'https://restcountries.com/v2/all'
    const res = await fetch(url)
    const item = await res.json()
    item.forEach(element=>{
        createCard(element)
    })
}

const createCard = (data) =>{
    const cardEl = document.createElement("div")
    cardEl.classList.add("country")
    const contentHTML=`
        <div class="img-container">
            <img src="${data.flag}"/>
        </div>
        <div class="info">
            <h3 class="name">${data.name}</h3>
            <small>Capital: <span>${data.capital}</span></small>
        </div>
    `
    cardEl.innerHTML = contentHTML
    containerEl.appendChild(cardEl)
}

getCountries()