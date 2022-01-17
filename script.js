var originalWord = "";
var hiddenWord = [];
var correctLetterCount = 0;
var remainingLives = 10;
function initiateGame() {
    document.getElementById('playGame').disabled = true;
	originalWord = document.getElementById('word').value.toUpperCase();
    for (var i = 0; i < originalWord.length; ++i) {
        hiddenWord[i] = "_";
    }
    document.getElementById('output').innerHTML = hiddenWord.join(" ");
    checkLife();
}

function checkLetter(btn) {
    document.getElementById(btn.id).disabled = true;
    if (originalWord.search(btn.value) > -1) {
        btn.className = "btn btn-success";
        for (var i = 0; i < originalWord.length; ++i) {
            if(originalWord.charAt(i) === btn.value) {
                ++correctLetterCount;
                hiddenWord[i] = btn.value;
                document.getElementById('output').innerHTML = hiddenWord.join(" ");
                checkGameWon();
            }
        }   
    } else {
        btn.className = "btn btn-danger";
        --remainingLives
        checkLife();
    }
}

function checkLife() {
    if (remainingLives === 10) {
        document.getElementById('message').className = "text-primary"
        document.getElementById('message').innerHTML = `Good luck! You have ` + remainingLives + ` lives`;
    } else if (remainingLives < 10 && remainingLives > 0) {
        document.getElementById('message').className = "text-warning"
        document.getElementById('message').innerHTML = remainingLives + ` lives remaining`;
    } else {
        document.getElementById('message').className = "text-danger"
        document.getElementById('message').innerHTML = `You lost! The word you were looking for is: ` + originalWord;
        document.getElementById('keyboard').innerHTML = "";
    }
}

function checkGameWon() {
    if (correctLetterCount === originalWord.length) {
        document.getElementById('message').className = "text-success"
        document.getElementById('message').innerHTML = `Congratulations! You WON!`;
        document.getElementById('keyboard').innerHTML = "";
    }
}


