const count = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup",()=>{
    count.innerHTML = input.value.length
})

let txt = "I love banana"
let x  = txt.s