let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const comScore_span = document.getElementById("com-score")
const scoreBord_div = document.querySelector(".score-bord")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

function getDiv(u){
    switch(u){
        case 0:
            return rock_div
        case 1:
            return paper_div
        case 2:
            return scissors_div
    }
}

function win(u){
    let choice =  getDiv(u)
    userScore++;
    userScore_span.innerText = userScore
    choice.classList.add("green-glow")
    setTimeout(function(){choice.classList.remove("green-glow")},500)
}
function lose(u){
    let choice =  getDiv(u)
    computerScore++;
    comScore_span.innerText = computerScore
    choice.classList.add("red-glow")
    setTimeout(function(){choice.classList.remove("red-glow")},500)
}
function draw(u){
    let choice =  getDiv(u)
    choice.classList.add("gray-glow")
    setTimeout(function(){choice.classList.remove("gray-glow")},500)
}


function game(u){
    const choices = ["rock","paper","scissors"]
    let c = Math.floor(Math.random()*3)
    

    if (u==c){
        result_div.innerHTML = choices[u]+" with "+choices[c]+",draw!"
        draw(u)
    }
    if (u==0 && c==1){
        result_div.innerHTML = choices[c]+" cover "+choices[u]+", you lose!"
        lose(u)
    }
    if (u==1 && c==0){
        result_div.innerHTML = choices[u]+" cover "+choices[c]+", you win!"
        win(u)
    }
    if (u==1 && c==2){
        result_div.innerHTML = choices[c]+" cut "+choices[u]+", you lose!"
        lose(u)
    }
    if (u==2 && c==1){
        result_div.innerHTML = choices[u]+" cut "+choices[c]+", you win!"
        win(u)
    }
    if (u==2 && c==0){
        result_div.innerHTML = choices[c]+" break "+choices[u]+", you lose!"
        lose(u)
    }
    if (u==0 && c==2){
        result_div.innerHTML = choices[u]+" break "+choices[c]+", you win!"
        win(u)
    }

}
rock_div.addEventListener('click',function(){
    game(0)
})
paper_div.addEventListener('click',function(){
    game(1)
})
scissors_div.addEventListener('click',function(){
    game(2)
})

