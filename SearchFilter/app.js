const result = document.getElementById("result");
const filter = document.getElementById("filter")
const listItem = [];

filter.addEventListener("input",(e)=>{
    const search = e.target.value.toLowerCase()
    listItem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search)){
            item.classList.remove("hide")
        }else{
            item.classList.add("hide")
        }
    })
})

async function getData() {
  const url = "https://restcountries.com/v2/all";
  const res = await fetch(url);
  const item = await res.json();
  result.innerHTML = "";
  item.forEach((element) => {
    const li = document.createElement("li");
    listItem.push(li);
    li.innerHTML = `
        <img src="${element.flag}">
        <div class="info">
            <h4>${element.name}</h4>
            <p>${formatNumber(element.population)}</p>
        </div>
        `;
    result.appendChild(li);
  });
}
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
getData();
