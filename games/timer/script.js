const display = document.getElementById('time-display');
const inputMin = document.getElementById('input-min');
const inputSec = document.getElementById('input-sec');
const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const btnReset = document.getElementById('btn-reset');
const settingsDiv = document.getElementById('timer-settings');

let totalSeconds = 300;
let timerInterval = null;
let isRunning = false;

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(totalSeconds);
    if (totalSeconds <= 10 && totalSeconds > 0) {
        display.classList.add('alert');
    } else {
        display.classList.remove('alert');
    }
}

function readInput() {
    let m = parseInt(inputMin.value) || 0;
    let s = parseInt(inputSec.value) || 0;
    totalSeconds = m * 60 + s;
    updateDisplay();
}

inputMin.addEventListener('input', readInput);
inputSec.addEventListener('input', readInput);

btnStart.addEventListener('click', () => {
    if (isRunning) return;
    if (totalSeconds <= 0) readInput();
    
    isRunning = true;
    settingsDiv.classList.add('hidden');
    btnStart.classList.add('hidden');
    btnPause.classList.remove('hidden');

    timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            display.classList.remove('alert');
            // sound could be added here
            btnStart.classList.remove('hidden');
            btnPause.classList.add('hidden');
            settingsDiv.classList.remove('hidden');
        }
    }, 1000);
});

btnPause.addEventListener('click', () => {
    if (!isRunning) return;
    clearInterval(timerInterval);
    isRunning = false;
    btnStart.classList.remove('hidden');
    btnPause.classList.add('hidden');
    btnStart.textContent = 'បន្ត (Resume)';
});

btnReset.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    btnStart.classList.remove('hidden');
    btnPause.classList.add('hidden');
    settingsDiv.classList.remove('hidden');
    btnStart.textContent = 'ចាប់ផ្តើម (Start)';
    readInput();
    display.classList.remove('alert');
});

// Init
readInput();
