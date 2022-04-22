// document.addEventListener('DOMContentLoaded', () => {
   

//     const cardArray = [
//         { name: '95', url: './img/air95.jpg' },
//         { name: '95', url: './img/air95.jpg' },
//         { name: 'dunk', url: './img/dunk.png' },
//         { name: 'dunk', url: './img/dunk.png' },
//         { name: 'gtx', url: './img/img.png' },
//         { name: 'gtx', url: './img/img.png' },
//         { name: 'tailwind', url: './img/tailiwind.jpg' },
//         { name: 'tailwind', url: './img/tailiwind.jpg' },
//         { name: 'tailwind5', url: './img/tailwind5.jpg' },
//         { name: 'tailwind5', url: './img/tailwind5.jpg' },
//         { name: 'tn', url: './img/tn.png' },
//         { name: 'tn', url: './img/tn.png' },
//     ]
//     cardArray.sort(() => 0.5 - Math.random())


//     const grid = document.querySelector('.grid')
//     const resultDisplay = document.querySelector('#result')
//     var cardsChosen = [95, 95]
//     var cardsChosenId = [0]
//     var cardsWon = []
//     createBoard()

//     function createBoard(){
//         for(let i = 0; i < cardArray.length; i++){
//             var card = document.createElement('img') 
//             card.setAttribute('src', './img/blank.jpg')
//             card.setAttribute('data-id', i)
//             card.addEventListener('click', flipCard)

//             grid.appendChild(card)

//         }
//     }

//     function checkForMatch(){
//         var cards = document.querySelectorAll('img')
//         const optionOneId = cardsChosenId[0]
//         const optionTwoId = cardsChosenId[1]
//         if ( optionOneId[0] === optionTwoId[1]){
//             cards[optionOneId].setAttribute('src', './img/win.png' )
//             cards[optionTwoId].setAttribute('src', './img/win.png' )
//             alert('good')
//             cardsWon.push(cardsChosen)
//         } else {
//             cards[optionOneId].setAttribute('src', './img/blank.jpg' )
//             cards[optionTwoId].setAttribute('src', './img/blank.jpg' )
//         }
//         cardsChosen = []
//         cardsChosenId = []
//         resultDisplay.textContent = cardsWon.length
//         if(cardsWon.length === cardArray.length/2){
//             resultDisplay.textContent = "gg"
//         }
//     }

//     function flipCard() {
//         console.log(this.getAttribute('data-id'))
//         var cardId = this.getAttribute('data-id')
//         cardsChosen.push(cardArray[cardId].name)
//         cardsChosenId.push(cardId)
//         this.setAttribute('src', cardArray[cardId].url)
//         if (cardsChosen.length === 2){
//             setTimeout(checkForMatch, 1500)
//         }

//     }
// })




// // let card = document.createElement('div');
// // card.innerHTML = "ss";
// // card.className = '.card'
// // document.body.append(card)




// start menu

const start = document.querySelector('.startGame')
const gameWindow = document.querySelector('.grid')

start.addEventListener('click' , () => {
    start.classList.add('turnLeft')
    gameWindow.classList.add('turnLeft')
    setTimeout(startGame, 3000)
})

function startGame(){
    let elem = document.createElement('div')
    elem.className = 'grid'
    document.body.appendChild(elem)
    console.log('finish')
}

// end start menu


// main game start
document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
                { name: '95', url : './img/air95.jpg' },
                { name: '95', url: './img/air95.jpg' },
                { name: 'dunk', url: './img/dunk.png' },
                { name: 'dunk', url: './img/dunk.png' },
                { name: 'gtx', url: './img/img.png' },
                { name: 'gtx', url: './img/img.png' },
                { name: 'tailwind', url: './img/tailiwind.jpg' },
                { name: 'tailwind', url: './img/tailiwind.jpg' },
                { name: 'tailwind5', url: './img/tailwind5.jpg' },
                { name: 'tailwind5', url: './img/tailwind5.jpg' },
                { name: 'tn', url: './img/tn.png' },
                { name: 'tn', url: './img/tn.png' },
            ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './img/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './img/blank.jpg')
        cards[optionTwoId].setAttribute('src', './img/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        
        cards[optionOneId].setAttribute('src', './img/win.png')
        cards[optionTwoId].setAttribute('src', './img/win.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', './img/blank.jpg')
        cards[optionTwoId].setAttribute('src', './img/blank.jpg')
        
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].url)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()

})
// main game end