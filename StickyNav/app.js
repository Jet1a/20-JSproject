const nav = document.querySelector(".nav")
window.addEventListener("scroll",stickyNavbar)

function stickyNavbar(){
    if(window.scrollY>nav.offsetHeight+150){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
}