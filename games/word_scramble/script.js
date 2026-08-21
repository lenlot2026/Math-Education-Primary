// State
let score = 0;
let currentQuestion = 1;
const totalQuestions = 10;
let currentAnswer = "";

// Dictionary
const dictionary = [
    { pic: '🍎', word: 'ផ្លែប៉ោម' },
    { pic: '🚗', word: 'ឡាន' },
    { pic: '🏠', word: 'ផ្ទះ' },
    { pic: '🌳', word: 'ដើមឈើ' },
    { pic: '🐟', word: 'ត្រី' },
    { pic: '🐘', word: 'ដំរី' },
    { pic: '🍌', word: 'ចេក' },
    { pic: '📖', word: 'សៀវភៅ' },
    { pic: '✏️', word: 'ខ្មៅដៃ' },
    { pic: '🏫', word: 'សាលារៀន' },
    { pic: '🌺', word: 'ផ្កា' },
    { pic: '🦀', word: 'ក្តាម' }
];

// DOM
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const endScreen = document.getElementById('end-screen');
const scoreEl = document.getElementById('score');
const qNumEl = document.getElementById('question-num');
const finalScoreEl = document.getElementById('final-score');
const picEl = document.getElementById('hint-pic');
const scrambleEl = document.getElementById('scrambled-word');
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

// Scramble a Khmer string roughly (treating characters independently, which might break vowels, but it's ok for a simple kids game)
// A better way is just randomizing an array of its characters
function scrambleWord(word) {
    const arr = word.split('');
    arr.sort(() => Math.random() - 0.5);
    return arr.join('');
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
    currentAnswer = targetItem.word;
    picEl.textContent = targetItem.pic;
    
    // Attempt to scramble until it's different
    let scrambled = currentAnswer;
    if (currentAnswer.length > 1) {
        let tries = 0;
        while(scrambled === currentAnswer && tries < 5) {
            scrambled = scrambleWord(currentAnswer);
            tries++;
        }
    }
    scrambleEl.textContent = scrambled;

    // Generate options
    let options = [currentAnswer];
    let dictCopy = [...dictionary].filter(item => item.word !== currentAnswer);
    dictCopy.sort(() => Math.random() - 0.5);
    
    options.push(dictCopy[0].word);
    options.push(dictCopy[1].word);
    options.push(dictCopy[2].word);

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
