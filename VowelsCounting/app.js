const count = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup",()=>{
    let word = input.value.toLowerCase()
    let vowelCount = 0
    for (let index = 0; index < word.length; index++) {
        let letter = word[index]
        if(letter.match(/([a,e,i,o,u])/)){
            vowelCount++;
        }
    }
    count.innerHTML = `${vowelCount}`
})