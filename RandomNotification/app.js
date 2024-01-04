const messages =[
    "Hello JavaScript",
    "Have a good day people",
    "Have a Great day",
    "Happy New Years",
    "Good Morning",
    "Good Night"
]
const btn = document.querySelector(".btn")
const containerEl =  document.querySelector(".container")

btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notiEl = document.createElement("div")
    notiEl.classList.add("notification")
    notiEl.innerText=randomMessage()
    containerEl.appendChild(notiEl)
    setTimeout(()=>{
        notiEl.remove()
    },3000)
}

function randomMessage(){
    return (messages[Math.floor(Math.random()*messages.length)])
}

