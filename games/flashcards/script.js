const cards = [
    { front: '🍎', back: 'ផ្លែប៉ោម (Apple)' },
    { front: '🐶', back: 'សត្វឆ្កែ (Dog)' },
    { front: '🚗', back: 'ឡាន (Car)' },
    { front: '🏠', back: 'ផ្ទះ (House)' },
    { front: '☀️', back: 'ព្រះអាទិត្យ (Sun)' },
    { front: '🐟', back: 'ត្រី (Fish)' },
    { front: '🐘', back: 'ដំរី (Elephant)' },
    { front: '✏️', back: 'ខ្មៅដៃ (Pencil)' },
    { front: '🌺', back: 'ផ្កា (Flower)' },
    { front: '🦀', back: 'ក្តាម (Crab)' }
];

let currentIndex = 0;

const flashcard = document.getElementById('flashcard');
const frontText = document.getElementById('card-front-text');
const backText = document.getElementById('card-back-text');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const currIdxEl = document.getElementById('current-idx');
const totalIdxEl = document.getElementById('total-idx');

function updateCard() {
    // reset flip
    flashcard.classList.remove('flipped');
    
    // give it a tiny delay to allow css transition if it was flipped
    setTimeout(() => {
        frontText.textContent = cards[currentIndex].front;
        backText.textContent = cards[currentIndex].back;
        currIdxEl.textContent = currentIndex + 1;
        totalIdxEl.textContent = cards.length;
        
        btnPrev.disabled = currentIndex === 0;
        btnNext.disabled = currentIndex === cards.length - 1;
        
        btnPrev.style.opacity = currentIndex === 0 ? '0.5' : '1';
        btnNext.style.opacity = currentIndex === cards.length - 1 ? '0.5' : '1';
    }, 150);
}

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
});

btnNext.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCard();
    }
});

// Init
updateCard();
