// State
let flips = 0;
let timeElapsed = 0;
let timerInterval;
let flippedCards = [];
let matchedPairs = 0;
const totalPairs = 8;

const symbols = ['🍎', '🐶', '🚗', '🏠', '☀️', '🐟', '🐘', '✏️'];
let deck = [];

// DOM
const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const endScreen = document.getElementById('end-screen');
const flipsEl = document.getElementById('flips');
const timeEl = document.getElementById('time');
const finalFlipsEl = document.getElementById('final-flips');
const finalTimeEl = document.getElementById('final-time');
const gridEl = document.getElementById('memory-grid');

document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-restart').addEventListener('click', startGame);

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function startGame() {
    flips = 0;
    timeElapsed = 0;
    matchedPairs = 0;
    flippedCards = [];
    flipsEl.textContent = flips;
    timeEl.textContent = formatTime(timeElapsed);
    
    showScreen('play-screen');
    
    // Create deck
    deck = [...symbols, ...symbols];
    deck.sort(() => Math.random() - 0.5);
    
    renderGrid();
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeElapsed++;
        timeEl.textContent = formatTime(timeElapsed);
    }, 1000);
}

function renderGrid() {
    gridEl.innerHTML = '';
    deck.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = index;
        card.dataset.symbol = symbol;
        
        const inner = document.createElement('div');
        inner.className = 'memory-card-inner';
        
        const front = document.createElement('div');
        front.className = 'memory-card-front';
        
        const back = document.createElement('div');
        back.className = 'memory-card-back';
        back.textContent = symbol;
        
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        
        card.addEventListener('click', () => handleCardClick(card));
        gridEl.appendChild(card);
    });
}

function handleCardClick(card) {
    if (card.classList.contains('flipped') || flippedCards.length >= 2) return;
    
    card.classList.add('flipped');
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        flips++;
        flipsEl.textContent = flips;
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.symbol === card2.dataset.symbol) {
        matchedPairs++;
        flippedCards = [];
        if (matchedPairs === totalPairs) {
            setTimeout(endGame, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function endGame() {
    clearInterval(timerInterval);
    finalFlipsEl.textContent = flips;
    finalTimeEl.textContent = formatTime(timeElapsed);
    showScreen('end-screen');
}
