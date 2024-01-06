const container = document.querySelector(".container")
const rows = 3
const columns = 3


function randomNumber(){
   return Math.floor(Math.random()*500) // 0 - 499
}

for (let i = 0; i < rows*columns; i++) {
   //link
   const url = `https://source.unsplash.com/random/${randomNumber()}`
   //show img
   const imgEl = document.createElement("img")
   imgEl.src = url
   container.appendChild(imgEl)
}
randomNumber()