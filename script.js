const word_el = document.getElementById('word');

// function that gets random words for the game
getRandomWord = () => {
    const words = ["javascript","java","phyton"];
    return words[Math.floor(Math.random()*words.length)]

}

// console.log(getRandom())

// function to show random word to player
function displayWord() {
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <div class="letter">
            ${letter}
        </div>
    
        `).join('')}
    
    `;
}

displayWord() 