const form = document.getElementById('form')
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')


const checkValid = (str, int) => {
   let error = '';

   if (!str || str.match(/[e.]/g)) {
      error = `Please enter a valid number.`
   } else if (int > 3999) {
      error = `Please enter a number less than or equal to 3999.`
   } else if (int < 1) {
      error = `Please enter a number greater than or equal to 1.`
   } else {
      return true;
   }

   output.innerText = error;
   output.classList.add('alert')

   return false
}

const clearOutput = () => {
   output.innerHTML = '';
   output.classList.remove('alert')
}


function convertRoman(num) {
   const romanObj = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
   }

   let roman = '';

   for (let i in romanObj) {
      while (num >= romanObj[i]) {
         roman += i
         num -= romanObj[i]
      }
   }

   return roman

}

convertBtn.addEventListener('click', (e) => {
   e.preventDefault()
   updateUi()
})


const updateUi = () => {
   const numStr = document.getElementById('number').value;
   const int = parseInt(numStr, 10);

   output.classList.remove('hidden')

   clearOutput()

   if (checkValid(numStr, int)) {
      output.innerText = convertRoman(int)
   }
}
