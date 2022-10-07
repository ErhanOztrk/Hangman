const word_el = document.getElementById('word');

// function that gets random words for the game
getRandom = () => {
    const words = ["javascript","java","phyton"];
    return words[Math.floor(Math.random()*words.length)]

}

console.log(getRandom())