// State
let score = 0;
let timeLeft = 60; // 60 seconds for multiplication
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
    timeLeft = 60;
    scoreEl.textContent = score;
    timeEl.textContent = timeLeft;
    
    showScreen('play-screen');
    generateEquation();
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function generateEquation() {
    optionBtns.forEach(btn => {
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });

    // 70% chance of multiplication, 30% chance of division
    const isMultiplication = Math.random() > 0.3;
    let num1, num2;

    if (isMultiplication) {
        // Multiplication 1-12
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        currentAnswer = num1 * num2;
        operatorEl.textContent = '×';
    } else {
        // Division: ensure clean division
        num2 = Math.floor(Math.random() * 11) + 2; // divisor 2-12
        currentAnswer = Math.floor(Math.random() * 12) + 1; // answer 1-12
        num1 = currentAnswer * num2; // dividend
        operatorEl.textContent = '÷';
    }

    num1El.textContent = num1;
    num2El.textContent = num2;

    // Generate options
    let options = [currentAnswer];
    while (options.length < 4) {
        // Generate plausible wrong answers
        let wrongAnswer;
        if (isMultiplication) {
            let offset = (Math.floor(Math.random() * 5) + 1) * (Math.random() > 0.5 ? 1 : -1);
            wrongAnswer = currentAnswer + offset * Math.min(num1, num2); // Off by one multiple
            if (wrongAnswer <= 0) wrongAnswer = currentAnswer + (Math.floor(Math.random() * 10) + 1);
        } else {
            wrongAnswer = currentAnswer + (Math.floor(Math.random() * 6) - 3);
        }
        
        if (wrongAnswer !== currentAnswer && wrongAnswer > 0 && !options.includes(wrongAnswer)) {
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
        score += 2; // more points for multiplication
        scoreEl.textContent = score;
        setTimeout(generateEquation, 300);
    } else {
        btn.classList.add("wrong"); if(window.SoundFX) SoundFX.play("wrong");
        score = Math.max(0, score - 1);
        scoreEl.textContent = score;
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
