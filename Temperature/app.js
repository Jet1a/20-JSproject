const celciusInput = document.querySelector("#celcius")
const fahrenheitInput = document.querySelector("#fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const tempInputs = document.querySelectorAll("input")

tempInputs.forEach(input=>{
    input.addEventListener("input",(e)=>{
        let tempValue =parseInt(e.target.value)
        let inputName = e.target.name
        
        if(e.target.value === ""){
            celciusInput.value = null
            fahrenheitInput.value = null
            kelvinInput.value = null
            return
        }
        //Converter
        if(inputName === "celcius"){
            // C -> F
            let fahrenheit = tempValue * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2)
            // C -> K
            let kelvin = tempValue + 273
            kelvinInput.value = kelvin.toFixed(2)
        }else if(inputName === "fahrenheit"){
            // F -> C
            let celcius = (tempValue - 32) / 1.8
            celciusInput.value = celcius.toFixed(2)
            // F -> K
            let kelvin = (tempValue-32)/1.8 + 273
            kelvinInput.value = kelvin.toFixed(2)
        }
        else if(inputName === "kelvin"){
            // K -> F
            let fahrenheit = ((tempValue - 273) * 1.8) +32
            fahrenheitInput.value = fahrenheit.toFixed(2)
            // C -> K
            let celcius = tempValue - 273
            celciusInput.value = celcius.toFixed(2)
        }
    })
})