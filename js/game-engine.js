const GameEngine = {
    renderGame(gameData, containerId, onComplete) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; 

        const questionEl = document.createElement('div');
        questionEl.className = 'q-text animate__animated animate__pulse';
        questionEl.innerHTML = gameData.question;
        container.appendChild(questionEl);
        
        const gameArea = document.createElement('div');
        gameArea.className = 'game-area mt-4';
        
        if (gameData.type === 'multiple_choice') {
            this.renderMultipleChoice(gameData, gameArea, onComplete);
        } 
        else if (gameData.type === 'true_false') {
            this.renderTrueFalse(gameData, gameArea, onComplete);
        }
        else if (gameData.type === 'fill_blank') {
            this.renderFillBlank(gameData, gameArea, onComplete);
        }
        else if (gameData.type === 'matching') {
            this.renderMatching(gameData, gameArea, onComplete);
        }
        else if (gameData.type === 'drag_drop') {
            this.renderDragDrop(gameData, gameArea, onComplete);
        }
        
        container.appendChild(gameArea);
        if (window.renderLatex) setTimeout(window.renderLatex, 50);
    },

    renderMultipleChoice(gameData, container, onComplete) {
        const grid = document.createElement('div');
        grid.className = 'mc-grid';
        
        gameData.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'mc-btn animate__animated animate__zoomIn';
            btn.style.animationDelay = `${idx * 0.1}s`;
            btn.innerHTML = opt;
            
            btn.onclick = () => {
                grid.querySelectorAll('.mc-btn').forEach(b => b.disabled = true);
                const isCorrect = (idx === gameData.correctAnswer);
                if (isCorrect) { btn.classList.add('correct'); if(window.SoundFX) SoundFX.play('correct'); }
                else {
                    btn.classList.add('wrong'); if(window.SoundFX) SoundFX.play('wrong');
                    grid.querySelectorAll('.mc-btn')[gameData.correctAnswer].classList.add('correct');
                }
                setTimeout(() => onComplete(isCorrect, gameData.explanation), 800);
            };
            grid.appendChild(btn);
        });
        container.appendChild(grid);
    },
    
    renderTrueFalse(gameData, container, onComplete) {
        const grid = document.createElement('div');
        grid.className = 'tf-grid';
        
        const btnTrue = document.createElement('button');
        btnTrue.className = 'tf-btn true-btn animate__animated animate__zoomIn';
        btnTrue.innerHTML = '<span>✔️</span> <span style="font-size:1.2rem;">ត្រូវ</span>';
        
        const btnFalse = document.createElement('button');
        btnFalse.className = 'tf-btn false-btn animate__animated animate__zoomIn';
        btnFalse.innerHTML = '<span>❌</span> <span style="font-size:1.2rem;">ខុស</span>';
        
        const handleClick = (answer) => {
            btnTrue.disabled = true; btnFalse.disabled = true;
            const isCorrect = (answer === gameData.correctAnswer);
            if(isCorrect) { if(window.SoundFX) SoundFX.play('correct'); } else { if(window.SoundFX) SoundFX.play('wrong'); }
            if(!isCorrect) {
                if(answer) btnTrue.classList.add('wrong');
                else btnFalse.classList.add('wrong');
            } else {
                if(answer) btnTrue.classList.add('correct');
                else btnFalse.classList.add('correct');
            }
            setTimeout(() => onComplete(isCorrect, gameData.explanation), 800);
        };
        
        btnTrue.onclick = () => handleClick(true);
        btnFalse.onclick = () => handleClick(false);
        
        grid.appendChild(btnTrue);
        grid.appendChild(btnFalse);
        container.appendChild(grid);
    },

    renderFillBlank(gameData, container, onComplete) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-input animate__animated animate__zoomIn';
        input.placeholder = "វាយបញ្ចូលចម្លើយ";
        
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn-primary animate__animated animate__zoomIn';
        submitBtn.innerText = "ផ្ទៀងផ្ទាត់";

        submitBtn.onclick = () => {
            const val = input.value.trim().replace(/\s/g, ''); 
            if(!val) return;
            
            submitBtn.disabled = true;
            input.disabled = true;

            // Helper to convert Khmer numbers to Arabic numbers for comparison
            const normalizeNumber = (str) => {
                const khmerNumbers = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
                let res = '';
                for (let i = 0; i < str.length; i++) {
                    let idx = khmerNumbers.indexOf(str[i]);
                    res += (idx !== -1) ? idx : str[i];
                }
                return res;
            };

            const userVal = normalizeNumber(val);
            const correctVal = normalizeNumber(gameData.correctAnswer.replace(/\s/g, ''));

            const isCorrect = (userVal === correctVal);
            if(isCorrect) { if(window.SoundFX) SoundFX.play('correct'); } else { if(window.SoundFX) SoundFX.play('wrong'); }
            if(isCorrect) {
                input.style.borderColor = '#10B981';
                input.style.background = '#D1FAE5';
                input.style.color = '#065F46';
            } else {
                input.style.borderColor = '#EF4444';
                input.style.background = '#FEE2E2';
                input.style.color = '#991B1B';
                input.value = gameData.correctAnswer;
            }
            setTimeout(() => onComplete(isCorrect, gameData.explanation), 1200);
        };

        container.appendChild(input);
        container.appendChild(submitBtn);
    },

    renderMatching(gameData, container, onComplete) {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.justifyContent = 'space-around';
        wrapper.style.width = '100%';
        wrapper.style.gap = '20px';

        const leftCol = document.createElement('div'); 
        leftCol.style.display = 'flex'; leftCol.style.flexDirection = 'column'; leftCol.style.gap = '15px'; leftCol.style.width = '45%';
        const rightCol = document.createElement('div'); 
        rightCol.style.display = 'flex'; rightCol.style.flexDirection = 'column'; rightCol.style.gap = '15px'; rightCol.style.width = '45%';

        let rightItems = gameData.pairs.map((p, i) => ({ text: p.right, id: i }));
        rightItems.sort(() => Math.random() - 0.5);

        let selectedLeft = null;
        let selectedRight = null;
        let matchedCount = 0;

        const checkMatch = () => {
            if(selectedLeft && selectedRight) {
                if(selectedLeft.dataset.id === selectedRight.dataset.id) {
                    if(window.SoundFX) SoundFX.play('correct');
                    selectedLeft.style.background = '#D1FAE5'; selectedLeft.style.borderColor = '#10B981';
                    selectedRight.style.background = '#D1FAE5'; selectedRight.style.borderColor = '#10B981';
                    matchedCount++;
                    selectedLeft = null; selectedRight = null;
                    if(matchedCount === gameData.pairs.length) setTimeout(() => onComplete(true, gameData.explanation), 800);
                } else {
                    if(window.SoundFX) SoundFX.play('wrong');
                    selectedLeft.style.background = '#FEE2E2'; selectedRight.style.background = '#FEE2E2';
                    setTimeout(() => {
                        selectedLeft.style.background = 'white'; selectedRight.style.background = 'white';
                        selectedLeft.style.borderColor = '#E2E8F0'; selectedRight.style.borderColor = '#E2E8F0';
                        selectedLeft = null; selectedRight = null;
                    }, 500);
                }
            }
        };

        const createItem = (text, id, col, isLeft) => {
            const btn = document.createElement('div');
            btn.className = 'mc-btn animate__animated animate__zoomIn';
            btn.innerHTML = text;
            btn.dataset.id = id;
            btn.onclick = () => {
                if(btn.style.background === 'rgb(209, 250, 229)') return; // already matched
                if(isLeft) {
                    if(selectedLeft) selectedLeft.style.borderColor = '#E2E8F0';
                    selectedLeft = btn;
                } else {
                    if(selectedRight) selectedRight.style.borderColor = '#E2E8F0';
                    selectedRight = btn;
                }
                btn.style.borderColor = '#3B82F6';
                checkMatch();
            };
            col.appendChild(btn);
        };

        gameData.pairs.forEach((p, i) => createItem(p.left, i, leftCol, true));
        rightItems.forEach((r) => createItem(r.text, r.id, rightCol, false));

        wrapper.appendChild(leftCol);
        wrapper.appendChild(rightCol);
        container.appendChild(wrapper);
    },

    renderDragDrop(gameData, container, onComplete) {
        const parts = gameData.sentence.split('[DROP]');
        const sentenceWrap = document.createElement('div');
        sentenceWrap.style.fontSize = '2rem';
        sentenceWrap.style.fontWeight = 'bold';
        sentenceWrap.innerHTML = `<span>${parts[0]}</span> <div id="drop-zone" style="display:inline-block; width:120px; height:50px; border:3px dashed #94A3B8; border-radius:12px; vertical-align:middle; margin:0 10px;"></div> <span>${parts[1]}</span>`;
        container.appendChild(sentenceWrap);

        const draggablesWrap = document.createElement('div');
        draggablesWrap.style.display = 'flex'; draggablesWrap.style.gap = '15px'; draggablesWrap.style.marginTop = '40px';
        
        gameData.draggables.forEach((dText) => {
            const el = document.createElement('div');
            el.className = 'mc-btn';
            el.style.padding = '15px 30px';
            el.draggable = true;
            el.innerText = dText;
            
            el.ondragstart = (e) => { e.dataTransfer.setData('text/plain', dText); el.style.opacity = '0.5'; };
            el.ondragend = () => { el.style.opacity = '1'; };
            draggablesWrap.appendChild(el);
        });
        
        container.appendChild(draggablesWrap);

        setTimeout(() => {
            const dropZone = document.getElementById('drop-zone');
            dropZone.ondragover = (e) => { e.preventDefault(); dropZone.style.borderColor = '#3B82F6'; };
            dropZone.ondragleave = () => { dropZone.style.borderColor = '#94A3B8'; };
            dropZone.ondrop = (e) => {
                e.preventDefault();
                const text = e.dataTransfer.getData('text/plain');
                dropZone.innerText = text;
                dropZone.style.borderStyle = 'solid';
                dropZone.style.lineHeight = '44px';
                
                draggablesWrap.style.display = 'none';
                
                const isCorrect = (text === gameData.correctAnswer);
                if(isCorrect) { if(window.SoundFX) SoundFX.play('correct'); } else { if(window.SoundFX) SoundFX.play('wrong'); }
                if(isCorrect) {
                    dropZone.style.borderColor = '#10B981'; dropZone.style.background = '#D1FAE5'; dropZone.style.color = '#065F46';
                } else {
                    dropZone.style.borderColor = '#EF4444'; dropZone.style.background = '#FEE2E2'; dropZone.style.color = '#991B1B';
                }
                setTimeout(() => onComplete(isCorrect, gameData.explanation), 1000);
            };
        }, 100);
    }
};
