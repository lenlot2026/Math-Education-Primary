const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color-picker');
const sizePicker = document.getElementById('size-picker');
const btnErase = document.getElementById('btn-erase');
const btnClear = document.getElementById('btn-clear');

let isDrawing = false;
let isErasing = false;
let lastX = 0;
let lastY = 0;

function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // init

function startDrawing(e) {
    isDrawing = true;
    const pos = getPos(e);
    lastX = pos.x;
    lastY = pos.y;
    draw(e);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    return { x, y };
}

function draw(e) {
    if (!isDrawing) return;
    
    const pos = getPos(e);
    
    ctx.lineWidth = sizePicker.value;
    ctx.strokeStyle = isErasing ? '#ffffff' : colorPicker.value;

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    
    lastX = pos.x;
    lastY = pos.y;
}

// Mouse
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Touch
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDrawing(e);
}, { passive: false });
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    draw(e);
}, { passive: false });
canvas.addEventListener('touchend', stopDrawing);

// Tools
btnErase.addEventListener('click', () => {
    isErasing = !isErasing;
    btnErase.classList.toggle('active');
});

btnClear.addEventListener('click', () => {
    if (confirm('តើអ្នកពិតជាចង់លុបផ្ទាំងនេះមែនទេ?')) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

colorPicker.addEventListener('click', () => {
    if (isErasing) {
        isErasing = false;
        btnErase.classList.remove('active');
    }
});
