// State
let score = 0;
let currentQuestion = 1;
const totalQuestions = 10;
let currentAnswer = ""; // e.g. "10:30"

// DOM
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const endScreen = document.getElementById('end-screen');
const scoreEl = document.getElementById('score');
const qNumEl = document.getElementById('question-num');
const finalScoreEl = document.getElementById('final-score');
const optionBtns = document.querySelectorAll('.option-btn');

const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const clockMarkers = document.getElementById('clock-markers');

// Init Clock Markers
function initClock() {
    for (let i = 1; i <= 12; i++) {
        const angle = i * 30;
        const radian = (angle - 90) * (Math.PI / 180);
        const x1 = 100 + 80 * Math.cos(radian);
        const y1 = 100 + 80 * Math.sin(radian);
        const x2 = 100 + 90 * Math.cos(radian);
        const y2 = 100 + 90 * Math.sin(radian);
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#1e293b');
        line.setAttribute('stroke-width', i % 3 === 0 ? '4' : '2');
        clockMarkers.appendChild(line);
    }
}
initClock();

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

function formatTime(h, m) {
    return `${h}:${m.toString().padStart(2, '0')}`;
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

    // Generate random time
    const h = Math.floor(Math.random() * 12) + 1; // 1 to 12
    const m = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
    currentAnswer = formatTime(h, m);

    // Update Clock SVG Hands
    const hAngle = (h % 12) * 30 + (m / 60) * 30;
    const mAngle = m * 6;
    
    // Transform origin is 100 100
    hourHand.setAttribute('transform', `rotate(${hAngle} 100 100)`);
    minuteHand.setAttribute('transform', `rotate(${mAngle} 100 100)`);

    // Generate options
    let options = [currentAnswer];
    while(options.length < 4) {
        let wrH = Math.floor(Math.random() * 12) + 1;
        let wrM = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
        let wrTime = formatTime(wrH, wrM);
        if(!options.includes(wrTime)) {
            options.push(wrTime);
        }
    }

    // Shuffle
    options.sort(() => Math.random() - 0.5);
    options.forEach((opt, index) => {
        optionBtns[index].textContent = opt;
    });
}

function handleOptionClick(e) {
    const btn = e.target;
    const selectedAnswer = btn.textContent;

    if (selectedAnswer === currentAnswer) {
        btn.classList.add("correct");
        score++; if(window.SoundFX) SoundFX.play("correct");
        scoreEl.textContent = score;
    } else {
        btn.classList.add("wrong"); if(window.SoundFX) SoundFX.play("wrong");
        optionBtns.forEach(b => {
            if (b.textContent === currentAnswer) b.classList.add("correct");
        });
    }

    optionBtns.forEach(b => b.disabled = true);

    setTimeout(() => {
        currentQuestion++;
        generateQuestion();
    }, 1000);
}

function endGame() {
    finalScoreEl.textContent = score;
    showScreen('end-screen');
}
