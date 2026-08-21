const btnPick = document.getElementById('btn-pick');
const minInput = document.getElementById('min-val');
const maxInput = document.getElementById('max-val');
const resultBox = document.getElementById('random-result');
const resultContainer = document.querySelector('.result-box');

let isRolling = false;

btnPick.addEventListener('click', () => {
    if (isRolling) return;
    
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);
    
    if (isNaN(min)) min = 1;
    if (isNaN(max)) max = 10;
    if (min > max) [min, max] = [max, min];

    isRolling = true;
    resultContainer.classList.add('animating');
    
    let counter = 0;
    const interval = setInterval(() => {
        resultBox.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
        counter++;
        
        if (counter > 20) {
            clearInterval(interval);
            resultBox.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
            resultContainer.classList.remove('animating');
            isRolling = false;
        }
    }, 50);
});
