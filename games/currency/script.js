// State
let score = 0;
let currentQuestion = 1;
const totalQuestions = 10;
let currentAnswer = 0;

// Riel denominations
const bills = [
    { value: 100, color: '#f59e0b' },
    { value: 500, color: '#ef4444' },
    { value: 1000, color: '#3b82f6' },
    { value: 5000, color: '#10b981' },
    { value: 10000, color: '#6366f1' }
];

// DOM
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const endScreen = document.getElementById('end-screen');
const scoreEl = document.getElementById('score');
const qNumEl = document.getElementById('question-num');
const finalScoreEl = document.getElementById('final-score');
const moneyContainer = document.getElementById('money-display');
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
    currentQuestion = 1;
    scoreEl.textContent = score;
    qNumEl.textContent = currentQuestion;
    
    showScreen('play-screen');
    generateQuestion();
}

function formatRiel(amount) {
    return amount.toLocaleString() + ' ៛';
}

function generateQuestion() {
    if (currentQuestion > totalQuestions) {
        endGame();
        return;
    }

    qNumEl.textContent = currentQuestion;
    
    optionBtns.forEach(btn => {
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });

    moneyContainer.innerHTML = '';
    currentAnswer = 0;

    // Generate 2 to 5 random bills
    const numBills = Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < numBills; i++) {
        const randomBill = bills[Math.floor(Math.random() * bills.length)];
        currentAnswer += randomBill.value;
        
        const billEl = document.createElement('div');
        billEl.className = 'bill';
        billEl.style.backgroundColor = randomBill.color;
        billEl.textContent = randomBill.value.toLocaleString();
        moneyContainer.appendChild(billEl);
    }

    // Generate options
    let options = [currentAnswer];
    while(options.length < 4) {
        // Generate random plausible wrong answers
        let offset = [100, -100, 500, -500, 1000, -1000][Math.floor(Math.random() * 6)];
        let wrAns = currentAnswer + offset;
        if(wrAns > 0 && !options.includes(wrAns)) {
            options.push(wrAns);
        }
    }

    // Shuffle
    options.sort(() => Math.random() - 0.5);
    options.forEach((opt, index) => {
        optionBtns[index].textContent = formatRiel(opt);
        // store the raw value for checking
        optionBtns[index].dataset.val = opt;
    });
}

function handleOptionClick(e) {
    const btn = e.target;
    const selectedAnswer = parseInt(btn.dataset.val);

    if (selectedAnswer === currentAnswer) {
        btn.classList.add("correct");
        score++; if(window.SoundFX) SoundFX.play("correct");
        scoreEl.textContent = score;
    } else {
        btn.classList.add("wrong"); if(window.SoundFX) SoundFX.play("wrong");
        optionBtns.forEach(b => {
            if (parseInt(b.dataset.val) === currentAnswer) b.classList.add("correct");
        });
    }

    optionBtns.forEach(b => b.disabled = true);

    setTimeout(() => {
        currentQuestion++;
        generateQuestion();
    }, 1200);
}

function endGame() {
    finalScoreEl.textContent = score;
    showScreen('end-screen');
}
