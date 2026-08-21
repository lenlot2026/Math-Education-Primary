// State
let score = 0;
let timeLeft = 30;
let timerInterval;
let currentAnswer = 0;

// DOM
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const endScreen = document.getElementById('end-screen');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const finalScoreEl = document.getElementById('final-score');

const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const operatorEl = document.getElementById('operator');
const optionBtns = document.querySelectorAll('.option-btn');

document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-restart').addEventListener('click', startGame);

optionBtns.forEach(btn => {
    btn.addEventListener('click', handleOptionClick);
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreEl.textContent = score;
    timeEl.textContent = '៣០'; // Khmer numeral or just 30
    
    showScreen('play-screen');
    generateEquation();
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        // Convert to Khmer digits for display if preferred, using standard digits here for simplicity
        timeEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function generateEquation() {
    // Reset buttons
    optionBtns.forEach(btn => {
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });

    const isAddition = Math.random() > 0.5;
    let num1, num2;

    if (isAddition) {
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        currentAnswer = num1 + num2;
        operatorEl.textContent = '+';
    } else {
        // Subtraction: ensure num1 >= num2 to avoid negative numbers for kids
        num1 = Math.floor(Math.random() * 20) + 10;
        num2 = Math.floor(Math.random() * num1) + 1;
        currentAnswer = num1 - num2;
        operatorEl.textContent = '-';
    }

    num1El.textContent = num1;
    num2El.textContent = num2;

    // Generate options
    let options = [currentAnswer];
    while (options.length < 4) {
        let wrongAnswer = currentAnswer + (Math.floor(Math.random() * 10) - 5);
        if (wrongAnswer !== currentAnswer && wrongAnswer >= 0 && !options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    options.forEach((opt, index) => {
        optionBtns[index].textContent = opt;
    });
}

function handleOptionClick(e) {
    const btn = e.target;
    const selectedAnswer = parseInt(btn.textContent);

    if (selectedAnswer === currentAnswer) {
        btn.classList.add("correct");
        score++; if(window.SoundFX) SoundFX.play("correct");
        scoreEl.textContent = score;
        setTimeout(generateEquation, 300);
    } else {
        btn.classList.add("wrong"); if(window.SoundFX) SoundFX.play("wrong");
        score = Math.max(0, score - 1); // Optional penalty
        scoreEl.textContent = score;
        // Optionally show correct one
        optionBtns.forEach(b => {
            if (parseInt(b.textContent) === currentAnswer) b.classList.add("correct");
        });
        setTimeout(generateEquation, 600);
    }
}

function endGame() {
    clearInterval(timerInterval);
    finalScoreEl.textContent = score;
    showScreen('end-screen');
}
