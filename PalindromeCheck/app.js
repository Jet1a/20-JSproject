const textInput = document.getElementById("text-input")
const resultEl  = document.getElementById("result")
const checkBtn = document.getElementById("check-btn")

const reversedInput = (text) =>{
   return text.split("").reverse().join("").replace(/[\p{P}$+<=>^`|~\s]/gu, "")
}
const cleanText = (text) =>{
   return text.trim().toLowerCase().replace(/[\p{P}$+<=>^`|~\s]/gu, "")
}
const palindromeCheck = () =>{
   if(textInput.value.trim() === "") return alert("Please input a value")
   const textEl = cleanText(textInput.value)
   const reversed = reversedInput(textEl)

   if (textEl === reversed) {
      resultEl.innerHTML = `<p><strong>${textInput.value}</strong> is a palindrome</p>`;
   } else {
      resultEl.innerHTML = `<p><strong>${textInput.value}</strong> is not a palindrome</p>`;
   }
}

checkBtn.addEventListener("click",palindromeCheck)
