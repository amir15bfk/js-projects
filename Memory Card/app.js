const section  = document.querySelector('section')
const playerLivesCount = document.querySelector("span")
let playerLives = 6

playerLivesCount.innerHTML = playerLives

const getData = () => [
    {imgSrc:'./images/1.png',name:"5bich"},
    {imgSrc:'./images/2.jpeg',name:"alkindi"},
    {imgSrc:'./images/3.png',name:"cscc"},
    {imgSrc:'./images/4.png',name:"gdg"},
    {imgSrc:'./images/5.png',name:"itc"},
    {imgSrc:'./images/6.jpeg',name:"soai"},
    {imgSrc:'./images/1.png',name:"5bich"},
    {imgSrc:'./images/2.jpeg',name:"alkindi"},
    {imgSrc:'./images/3.png',name:"cscc"},
    {imgSrc:'./images/4.png',name:"gdg"},
    {imgSrc:'./images/5.png',name:"itc"},
    {imgSrc:'./images/6.jpeg',name:"soai"}
]
const randomize = () => {
    const cardDate = getData()
    cardDate.sort(()=> Math.random()-0.5)
    return cardDate
}

const cardGenerator = () => {
    const cardDate = randomize()
    
    cardDate.forEach((item,index)=> {
        const card = document.createElement("div")
        const face = document.createElement("img")
        const back = document.createElement("div")
        card.classList = "card"
        face.classList = "face"
        back.classList = "back"

        face.src = item.imgSrc
        card.setAttribute('name',item.name)
        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)
        card.addEventListener('click',(e)=>{
            card.classList.add("toggleCard")
            checkCards(e)
        })
    })
    
}
const checkCards = (e) => {
    const clickedCard = e.target
    clickedCard.classList.add('flipped')
    const flippedCards = document.querySelectorAll('.flipped')
    
    if (flippedCards.length===2){
        if (flippedCards[0].getAttribute("name") ===flippedCards[1].getAttribute("name")){
            console.log("match")
            flippedCards[0].classList.add('Done')
            flippedCards[0].classList.remove('flipped')
            flippedCards[1].classList.add('Done')
            flippedCards[1].classList.remove('flipped')
            
        }else {
            console.log("wrong")
            playerLives-=1
            if (playerLives<0){
                restart()
            }else {
              playerLivesCount.innerHTML = playerLives  
            
            
            flippedCards[0].classList.remove('flipped')
            
            flippedCards[1].classList.remove('flipped')
            setTimeout(function(){
                flippedCards[0].classList.remove('toggleCard')
                flippedCards[1].classList.remove('toggleCard')
            },1000)
        }
            
        }
        
    }
}

const restart = () => {
    let cardData = randomize()
    let faces = document.querySelectorAll(".face")
    let cards = document.querySelectorAll(".card")
    section.style.pointerEvents ='none'
    cards.forEach((item) => {
        item.classList.remove('toggleCard')
    })
    setTimeout(function(){

    
    cardData.forEach((item,index) => {
        faces[index].src = item.imgSrc
        cards[index].setAttribute('name',item.name)

        cards[index].classList.remove('flipped')
        cards[index].classList.remove('Done')

        playerLives = 6
        playerLivesCount.innerHTML = playerLives 
    })
    section.style.pointerEvents ='all'

},1000)
}
document.querySelector('button').addEventListener('click',() => {
    restart()
})

cardGenerator()