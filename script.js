const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container')
const message_el = document.getElementById('succes-message')
const wrongLetters_el = document.getElementById('wrong-letters')
const items = document.querySelectorAll('.item')
const message =  document.getElementById('message')
const playAgainBtn = document.getElementById('play-again')

const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();

// function that set up the random words
function getRandomWord() {
    const words = ["javascript","java","html","css","react","spring"];
    return words[Math.floor(Math.random()*words.length)]

}

// console.log(getRandom())

// function that adds a div element and display the correct letters.
const displayWord =()=> {
    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <div class="letter">
            ${correctLetters.includes(letter) ? letter: ''}
        </div>
    
        `).join('')}
    
    `;
   
    // popup congrulations message
   const guessWord = word_el.innerText.replace(/\n/g,'')  // replace method :see the letters as a row
   if(guessWord === selectedWord) {
    popup.style.display = 'flex';  // make popup message visible
    message_el.innerText = 'Congrulations'
    //console.log('You Win!')
   }
}

//function to create h element and add the wrong letters to the list , display them to player
const updateWrongLetters=()=> {
    wrongLetters_el.innerHTML = `
    ${wrongLetters.length > 0?'<h3>wrong letters</h3>':''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

// with foreach method ; display the man's body parts if player selects the wrong letter
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

//function to  add show class to display a message if player select the same letter more than once
const displayMessage = () => {    
    message.classList.add('show');

    setTimeout(function() {
        message.classList.remove('show');
    }, 2000);
}


playAgainBtn.addEventListener('click',function() {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();

    popup.style.display = 'none';

})


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
            displayMessage()
            // console.log('this letter has already selected')
        }
     }else  {
        if(!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
         updateWrongLetters()
     }
     else {
        displayMessage();
     }
     }
    }
})

displayWord() 