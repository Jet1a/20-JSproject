window.onscroll = ()=>scrollProgress()
const progressEl = document.querySelector(".progress")
function scrollProgress(){
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = 100 * (scrollTop / pageHeight)
    progressEl.style.visibility = "visible"
    progressEl.style.width = scrollPercentage+"%"
    
}