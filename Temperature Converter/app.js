const c = document.querySelector("#celcius > input")
const f = document.querySelector("#fahrenheit > input")
const k = document.querySelector("#kelvin > input")

c.addEventListener(
    "input"
    ,function(){
        let temp = c.value
        if (temp==""){
            f.value = ""
            k.value = ""
        }else {
            f.value = temp * (9/5) + 32
            k.value = parseFloat(temp) + 273.15
        }
        
    }
)
f.addEventListener(
    "input"
    ,function(){
        let temp = f.value
        if (temp==""){
            c.value = ""
            k.value = ""
        }else {
            c.value = (parseFloat(temp) -32) *(5/9)
            k.value = parseFloat(c.value) + 273.15
        }
    }
)
k.addEventListener(
    "input"
    ,function(){
        let temp = k.value
        if (temp==""){
            c.value = ""
            f.value = ""
        }else {
            c.value = Math.round(temp - 273.15,2)
            f.value = Math.round((parseFloat(c.value) -32) *(5/9),2)
        }
    }
)