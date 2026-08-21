// State variables
let learnNumerator = 1;
let learnDenominator = 2;

let quizTargetNum = 1;
let quizTargetDen = 2;
let quizCurrentNum = 0;

// DOM Elements - Learn Mode
const sliderNum = document.getElementById('slider-numerator');
const sliderDen = document.getElementById('slider-denominator');
const lblNum = document.getElementById('label-num');
const lblDen = document.getElementById('label-den');
const dispNum = document.getElementById('learn-num-val');
const dispDen = document.getElementById('learn-den-val');
const learnPie = document.getElementById('learn-pie');
const learnBar = document.getElementById('learn-bar');

// DOM Elements - Quiz Mode
const quizTargetNumEl = document.getElementById('quiz-target-num');
const quizTargetDenEl = document.getElementById('quiz-target-den');
const quizPie = document.getElementById('quiz-pie');
const quizBar = document.getElementById('quiz-bar');
const quizFeedback = document.getElementById('quiz-feedback');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateLearnVisuals();
    
    sliderNum.addEventListener('input', (e) => {
        learnNumerator = parseInt(e.target.value);
        updateLearnVisuals();
    });

    sliderDen.addEventListener('input', (e) => {
        learnDenominator = parseInt(e.target.value);
        // Ensure numerator doesn't exceed denominator
        if (learnNumerator > learnDenominator) {
            learnNumerator = learnDenominator;
            sliderNum.value = learnNumerator;
        }
        sliderNum.max = learnDenominator;
        updateLearnVisuals();
    });

    generateQuiz();
});

// Navigation
function switchMode(mode) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${mode}`).classList.add('active');
    
    document.querySelectorAll('.mode-section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(`mode-${mode}`).classList.remove('hidden');

    if (mode === 'quiz') {
        // regenerate or reset maybe
    }
}

// Learn Mode Logic
function updateLearnVisuals() {
    lblNum.textContent = learnNumerator;
    lblDen.textContent = learnDenominator;
    dispNum.textContent = learnNumerator;
    dispDen.textContent = learnDenominator;

    drawPie(learnPie, learnDenominator, learnNumerator, false);
    drawBar(learnBar, learnDenominator, learnNumerator, false);
}

// Drawing Functions
function getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent - Math.PI/2);
    const y = Math.sin(2 * Math.PI * percent - Math.PI/2);
    return [x, y];
}

function drawPie(svgElement, denominator, numerator, interactive = false) {
    svgElement.innerHTML = '';
    
    for (let i = 0; i < denominator; i++) {
        const startPercent = i / denominator;
        const endPercent = (i + 1) / denominator;
        
        const [startX, startY] = getCoordinatesForPercent(startPercent);
        const [endX, endY] = getCoordinatesForPercent(endPercent);
        
        // large arc flag is 1 if angle > 180 (which happens if denominator is 1, but we start at 2)
        const largeArcFlag = denominator === 1 ? 1 : 0; 
        
        let pathData = '';
        if (denominator === 1) {
            // Draw a full circle
            pathData = `M 0 -1 A 1 1 0 1 1 0 1 A 1 1 0 1 1 0 -1`;
        } else {
            pathData = [
                `M 0 0`,
                `L ${startX} ${startY}`,
                `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                `Z`
            ].join(' ');
        }
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        
        let isFilled = false;
        if (!interactive) {
            isFilled = i < numerator;
        }
        
        path.setAttribute('class', 'slice' + (isFilled ? ' filled' : ''));
        
        if (interactive) {
            path.dataset.index = i;
            path.addEventListener('click', function() {
                this.classList.toggle('filled');
                updateQuizCurrentNum();
            });
        }
        
        svgElement.appendChild(path);
    }
}

function drawBar(containerElement, denominator, numerator, interactive = false) {
    containerElement.innerHTML = '';
    
    for (let i = 0; i < denominator; i++) {
        const segment = document.createElement('div');
        
        let isFilled = false;
        if (!interactive) {
            isFilled = i < numerator;
        }
        
        segment.className = 'bar-segment' + (isFilled ? ' filled' : '');
        
        if (interactive) {
            segment.dataset.index = i;
            segment.addEventListener('click', function() {
                this.classList.toggle('filled');
                updateQuizCurrentNum();
            });
        }
        
        containerElement.appendChild(segment);
    }
}

// Quiz Mode Logic
function updateQuizShape() {
    const shape = document.querySelector('input[name="quiz-shape"]:checked').value;
    if (shape === 'pie') {
        quizPie.classList.remove('hidden');
        quizBar.classList.add('hidden');
    } else {
        quizPie.classList.add('hidden');
        quizBar.classList.remove('hidden');
    }
}

function generateQuiz() {
    quizFeedback.textContent = '';
    quizFeedback.className = 'feedback-msg';
    
    // Random denominator between 2 and 12
    quizTargetDen = Math.floor(Math.random() * 11) + 2;
    // Random numerator between 1 and denominator
    quizTargetNum = Math.floor(Math.random() * quizTargetDen) + 1;
    
    quizTargetNumEl.textContent = quizTargetNum;
    quizTargetDenEl.textContent = quizTargetDen;
    
    // Reset selections
    drawPie(quizPie, quizTargetDen, 0, true);
    drawBar(quizBar, quizTargetDen, 0, true);
    quizCurrentNum = 0;
    
    updateQuizShape();
}

function updateQuizCurrentNum() {
    // Count filled elements in the visible shape
    const shape = document.querySelector('input[name="quiz-shape"]:checked').value;
    let filledCount = 0;
    
    if (shape === 'pie') {
        filledCount = quizPie.querySelectorAll('.slice.filled').length;
    } else {
        filledCount = quizBar.querySelectorAll('.bar-segment.filled').length;
    }
    
    quizCurrentNum = filledCount;
    // Clear feedback when user changes something
    quizFeedback.textContent = '';
    quizFeedback.className = 'feedback-msg';
}

function verifyQuiz() {
    // Recalculate just in case
    updateQuizCurrentNum();
    
    if (quizCurrentNum === quizTargetNum) {
        quizFeedback.textContent = 'អបអរសាទរ! ចម្លើយរបស់អ្នកត្រឹមត្រូវ។ 🎉 (Correct!)';
        quizFeedback.className = 'feedback-msg correct';
    } else {
        quizFeedback.textContent = 'មិនទាន់ត្រូវទេ សូមព្យាយាមម្ដងទៀត! 🤔 (Try again!)';
        quizFeedback.className = 'feedback-msg incorrect';
    }
}
