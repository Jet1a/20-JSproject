const timeEl = document.querySelector(".time")
const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const resetBtn = document.querySelector(".reset")
//Time
let [milliseconds,seconds,minutes,hours] = [0,0,0,0]
let timer = null

startBtn.addEventListener("click",startTimer)
pauseBtn.addEventListener("click",pauseTimer)
resetBtn.addEventListener("click",resetTimer)

function startTimer(){
   if(timer!=null){
      clearInterval(timer)
   }
   timer = setInterval((displayTime) => {
      milliseconds += 10
      if(milliseconds == 1000){
         seconds++
         milliseconds = 0
         if(seconds == 60){
            minutes++
            seconds = 0
            if(minutes == 60){
               hours++
               minutes = 0
            }
         }
         
      }
      
      timeEl.innerHTML = `
         ${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds }:${milliseconds}
      `
   }, 10);
}

function pauseTimer(){
   clearInterval(timer)
}

function resetTimer(){
   clearInterval(timer)
   milliseconds = 0
   seconds = 0
   minutes = 0
   hours = 0
   timeEl.innerHTML = "00:00:00:000"
}