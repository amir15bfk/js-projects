const start = document.querySelector("button")
const container = document.querySelector(".circle")
const scoreh = document.querySelector(".score")
const besth = document.querySelector(".best")
let growth = 0;
let difficulty = 1;
let l=0;
let score = 0;

if (localStorage.getItem('bestScore')===null){
    bestScore = 0
}
else {
    bestScore = JSON.parse(localStorage.getItem('bestScore'))
}

function saveBestScore(){localStorage.setItem('bestScore',JSON.stringify(bestScore))
    
}
scoreh.innerHTML = `score : ${score}`
besth.innerHTML = `best score : ${bestScore}`


function reset_point(){
    
    
    container.style.left = `${Math.floor(Math.random() * 100)}%`
    container.style.top = `${Math.floor(Math.random() * 100)}%`
    growth=1
    container.style.width = `0px`
    container.style.height = `0px`
    

}
start.addEventListener("click",(e)=>{
    e.target.style.display = "none"
    container.classList.add("show")
    l=0
    difficulty = 1
    score = 0
    scoreh.innerHTML = `score : ${score}`

    reset_point()

})
container.addEventListener("click",(e)=>{
    console.log("hi")
    difficulty+=0.1
    score += 1
    scoreh.innerHTML = `score : ${score}`
    if (score>bestScore){
        bestScore = score
        saveBestScore()
        besth.innerHTML = `best score : ${bestScore}`

    }

    l=0
    reset_point()

})
function update(){
    if(l>100){
        growth=-1
        
    }
    if(l<0){
        growth=0
        start.style.display = "block"
    }else {
        l = l+ growth*difficulty
        container.style.width = `${l}px`
        container.style.height = `${l}px` 
    }
    
}


setInterval(update,20)

