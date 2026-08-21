// State
let score = 0;
const totalPairs = 5;

const dictionary = [
    { id: 1, pic: '🍎', word: 'ផ្លែប៉ោម' },
    { id: 2, pic: '🐶', word: 'សត្វឆ្កែ' },
    { id: 3, pic: '🚗', word: 'ឡាន' },
    { id: 4, pic: '🏠', word: 'ផ្ទះ' },
    { id: 5, pic: '☀️', word: 'ព្រះអាទិត្យ' },
    { id: 6, pic: '🐟', word: 'ត្រី' },
    { id: 7, pic: '🐘', word: 'ដំរី' },
    { id: 8, pic: '✏️', word: 'ខ្មៅដៃ' },
    { id: 9, pic: '🌺', word: 'ផ្កា' },
    { id: 10, pic: '🦀', word: 'ក្តាម' }
];

let selectedPicId = null;
let selectedWordId = null;

// DOM
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const endScreen = document.getElementById('end-screen');
const scoreEl = document.getElementById('score');
const colPics = document.getElementById('col-pics');
const colWords = document.getElementById('col-words');

document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-restart').addEventListener('click', startGame);

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    score = 0;
    scoreEl.textContent = score;
    selectedPicId = null;
    selectedWordId = null;
    
    showScreen('play-screen');
    renderBoard();
}

function renderBoard() {
    colPics.innerHTML = '';
    colWords.innerHTML = '';
    
    // Select random 5 pairs
    let shuffledDict = [...dictionary].sort(() => Math.random() - 0.5);
    let selectedPairs = shuffledDict.slice(0, 5);
    
    let pics = [...selectedPairs].map(item => ({ id: item.id, content: item.pic }));
    let words = [...selectedPairs].map(item => ({ id: item.id, content: item.word }));
    
    pics.sort(() => Math.random() - 0.5);
    words.sort(() => Math.random() - 0.5);
    
    pics.forEach(item => {
        const div = document.createElement('div');
        div.className = 'match-item pic-item';
        div.dataset.id = item.id;
        div.textContent = item.content;
        div.addEventListener('click', () => handlePicClick(div));
        colPics.appendChild(div);
    });
    
    words.forEach(item => {
        const div = document.createElement('div');
        div.className = 'match-item word-item';
        div.dataset.id = item.id;
        div.style.fontSize = '1.5rem';
        div.textContent = item.content;
        div.addEventListener('click', () => handleWordClick(div));
        colWords.appendChild(div);
    });
}

function handlePicClick(element) {
    if (element.classList.contains('matched')) return;
    
    document.querySelectorAll('.pic-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedPicId = element.dataset.id;
    
    checkMatch();
}

function handleWordClick(element) {
    if (element.classList.contains('matched')) return;
    
    document.querySelectorAll('.word-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedWordId = element.dataset.id;
    
    checkMatch();
}

function checkMatch() {
    if (!selectedPicId || !selectedWordId) return;
    
    const picEl = document.querySelector(`.pic-item[data-id="${selectedPicId}"]`);
    const wordEl = document.querySelector(`.word-item[data-id="${selectedWordId}"]`);
    
    if (selectedPicId === selectedWordId) {
        // Match!
        picEl.classList.add('matched');
        wordEl.classList.add('matched');
        picEl.classList.remove('selected');
        wordEl.classList.remove('selected');
        
        score++; if(window.SoundFX) SoundFX.play("correct");
        scoreEl.textContent = score;
        
        if (score === totalPairs) {
            setTimeout(() => {
                showScreen('end-screen');
            }, 1000);
        }
    } else {
        // Wrong
        picEl.classList.add("wrong"); if(window.SoundFX) SoundFX.play("wrong");
        wordEl.classList.add("wrong"); if(window.SoundFX) SoundFX.play("wrong");
        
        setTimeout(() => {
            picEl.classList.remove('wrong', 'selected');
            wordEl.classList.remove('wrong', 'selected');
        }, 500);
    }
    
    selectedPicId = null;
    selectedWordId = null;
}
