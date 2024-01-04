window.onscroll = () => scrollProgress()
const progressEl = document.querySelector(".progress")
const topEl = document.querySelector(".top")
const root = document.documentElement
const nav = document.querySelector(".nav")

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = 100 * (scrollTop / pageHeight)
    progressEl.style.visibility = "visible"
    progressEl.style.width = scrollPercentage + "%"
}

document.addEventListener("scroll", showBtn)

function showBtn() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = 100 * (scrollTop / pageHeight)
    if(scrollPercentage >= 70){
        topEl.classList.add("show-btn")
    }else{
        topEl.classList.remove("show-btn")
    }
}

topEl.addEventListener("click",backToTop)

function backToTop(){
    root.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

window.addEventListener("scroll",stickyNavbar)

function stickyNavbar(){
    if(window.scrollY > nav.offsetHeight+150){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
}
