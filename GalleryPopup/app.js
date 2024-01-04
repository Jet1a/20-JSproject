const smallImg = document.querySelectorAll(".gallery img")
const fullImg = document.querySelector(".top")
const modalEL = document.querySelector(".modal")
smallImg.forEach(img => {
    img.addEventListener("click", () => {
        const fullSize = img.getAttribute("alt")
        const path = `foods-images/full/${fullSize}.jpg`
        fullImg.src = path
        modalEL.classList.add("show")
    })
})


modalEL.addEventListener("click", (e) => {
    if (e.target.classList.contains("show")) {
        modalEL.classList.remove("show")
    }else{
        return
    }
})
