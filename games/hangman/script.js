// State
let score = 0;
let currentQuestion = 1;
const totalQuestions = 10;
let currentAnswer = "";

// Dictionary
const dictionary = [
    { pic: '🍎', word: 'ប៉ោម', missing: 'ប៉ោ', options: ['ប៉ោ', 'ពោ', 'បោ', 'ប៉ា'] },
    { pic: '🚗', word: 'ឡាន', missing: 'ឡា', options: ['ឡា', 'លា', 'រា', 'ហ្គា'] },
    { pic: '🏠', word: 'ផ្ទះ', missing: 'ផ្ទ', options: ['ផ្ទ', 'ផ្ត', 'ភ្ទ', 'ផ្ល'] },
    { pic: '🌳', word: 'ឈើ', missing: 'ឈើ', options: ['ឈើ', 'ឆើ', 'ជ្រើ', 'ជើ'] },
    { pic: '🐟', word: 'ត្រី', missing: 'ត្រី', options: ['ត្រី', 'ក្ដី', 'ព្រី', 'ចី'] },
    { pic: '🐘', word: 'ដំរី', missing: 'ដំ', options: ['ដំ', 'តំ', 'ឌំ', 'ថំ'] },
    { pic: '🍌', word: 'ចេក', missing: 'ចេ', options: ['ចេ', 'ចែ', 'ជេ', 'ឆេ'] },
    { pic: '📖', word: 'សៀវ', missing: 'សៀ', options: ['សៀ', 'ស៊ៀ', 'ស៊ី', 'សេ'] },
    { pic: '✏️', word: 'ខ្មៅ', missing: 'ខ្មៅ', options: ['ខ្មៅ', 'ខ្មោ', 'ក្មៅ', 'ខ្លៅ'] },
    { pic: '🌺', word: 'ផ្កា', missing: 'ផ្កា', options: ['ផ្កា', 'ផ្គា', 'ផ្លា', 'ហ្កា'] }
];

// DOM
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const endScreen = document.getElementById('end-screen');
const scoreEl = document.getElementById('score');
const qNumEl = document.getElementById('question-num');
const finalScoreEl = document.getElementById('final-score');
const picEl = document.getElementById('hint-pic');
const wordEl = document.getElementById('incomplete-word');
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
    const targetItem = dictionary[Math.floor(Math.random() * dictionary.length)];
    currentAnswer = targetItem.missing;
    picEl.textContent = targetItem.pic;
    
    // Display word with blank
    const blankWord = targetItem.word.replace(targetItem.missing, '_');
    wordEl.textContent = blankWord;

    // Generate options
    let options = [...targetItem.options];
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
        wordEl.textContent = wordEl.textContent.replace('_', currentAnswer);
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
    }, 1200);
}

function endGame() {
    finalScoreEl.textContent = score;
    showScreen('end-screen');
}
