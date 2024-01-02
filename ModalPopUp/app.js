const openEl = document.querySelector(".open-btn")
const closeEl = document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal-container")

openEl.addEventListener("click",()=>{
    modalContainer.classList.add("show")
})
closeEl.addEventListener("click",()=>{
    modalContainer.classList.remove("show")
})