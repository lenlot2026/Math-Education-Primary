// State
let score = 0;
let currentQuestion = 1;
const totalQuestions = 10;
let currentAnswer = "";

// Shapes Dictionary
const shapes = [
    { name: 'រង្វង់', svg: '<circle cx="100" cy="100" r="80" fill="#ec4899" />' },
    { name: 'ការេ', svg: '<rect x="20" y="20" width="160" height="160" fill="#3b82f6" />' },
    { name: 'ចតុកោណកែង', svg: '<rect x="10" y="50" width="180" height="100" fill="#10b981" />' },
    { name: 'ត្រីកោណ', svg: '<polygon points="100,20 180,180 20,180" fill="#f59e0b" />' },
    { name: 'ពងក្រពើ', svg: '<ellipse cx="100" cy="100" rx="90" ry="50" fill="#8b5cf6" />' },
    { name: 'ឆកោណ (Hexagon)', svg: '<polygon points="100,10 180,55 180,145 100,190 20,145 20,55" fill="#14b8a6" />' },
    { name: 'ផ្កាយ', svg: '<polygon points="100,10 120,70 190,70 135,110 155,180 100,135 45,180 65,110 10,70 80,70" fill="#fcd34d" />' }
];

// DOM
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const endScreen = document.getElementById('end-screen');
const scoreEl = document.getElementById('score');
const qNumEl = document.getElementById('question-num');
const finalScoreEl = document.getElementById('final-score');
const shapeSvg = document.getElementById('shape-svg');
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

    // Pick random target
    const targetItem = shapes[Math.floor(Math.random() * shapes.length)];
    currentAnswer = targetItem.name;
    shapeSvg.innerHTML = targetItem.svg;

    // Generate options
    let options = [currentAnswer];
    let dictCopy = [...shapes].filter(item => item.name !== currentAnswer);
    
    dictCopy.sort(() => Math.random() - 0.5);
    
    options.push(dictCopy[0].name);
    options.push(dictCopy[1].name);
    options.push(dictCopy[2].name);

    // Shuffle options
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
