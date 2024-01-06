const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", (e) => {
   e.preventDefault()
   let weight = document.getElementById("weight").value
   let height = document.getElementById("height").value
   if (weight === "" || isNaN(weight)) {
      return result.innerHTML = "Wrong Input"
   } else if (height === "" || isNaN(height)) {
      return result.innerHTML = "Wrong Input"
   } else {
      height = height / 100
      let total = (weight / Math.pow(height, 2)).toFixed(2)
      if (total < 18.5) {
         showResult(total, "Too Skinny", "tomato")
      } else if (total >= 18.5 && total <= 24.9) {
         showResult(total, "Perfect", "green")
      } else if (total >= 24.9 && total <= 29.9) {
         showResult(total, "Fat", "orange")
      } else {
         showResult(total, "Too Fat", "red")
      }
   }
})

function showResult(bmi, message, color) {
   result.style.backgroundColor = color
   return result.innerHTML = `Result = ${bmi} (${message})`
}