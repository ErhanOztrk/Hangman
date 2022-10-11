const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container')
const message_el = document.getElementById('succes-message')
const wrongLetters_el = document.getElementById('wrong-letters')
const items = document.querySelectorAll('.item')


const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

// function that gets random words for the game
function getRandomWord () {
    const words = ["javascript","java","phyton"];
    return words[Math.floor(Math.random()*words.length)]

}

// console.log(getRandom())

// function to show random word to player
function displayWord() {
    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <div class="letter">
            ${correctLetters.includes(letter) ? letter: ''}
        </div>
    
        `).join('')}
    
    `;
   
   const w = word_el.innerText.replace(/\n/g,'')
   if(w === selectedWord) {
    popup.style.display = 'flex';
    message_el.innerText = 'Congrulations'
    //console.log('You Win!')
   }
}

function updateWrongLetters() {
    wrongLetters_el.innerHTML = `
    ${wrongLetters.length > 0?'<h3>wrong letters</h3>':''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;


items.forEach((item,index) => {
    const errorCount = wrongLetters.length;

    if(index<errorCount) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
    })

    if(wrongLetters.length ===items.length) {
        popup.style.display = 'flex' ;
        message_el.innerText = 'You Lose'
    }
}

window.addEventListener('keydown', function(e){
    if(e.keyCode >= 65 && e.keyCode <= 90){
    const letter = e.key;
    //console.log(e.key)
    //console.log(e.keyCode)

    if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            displayWord();
        } else {
            console.log('this letter already selected')
        }
     }else  {
        if(!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
         updateWrongLetters()
     }
     }
    }
})

displayWord() 