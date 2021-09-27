
const h_span = document.getElementById("h")
const m_span = document.getElementById("m")
const s_span = document.getElementById("s")

function add0(i){
    if(i<10){
        return "0"+i
    }
    return i
}

function update(){
    const date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    h_span.innerText= add0(h)
    m_span.innerText= add0(m)
    s_span.innerText= add0(s)
}
update()

setInterval(update,1000)