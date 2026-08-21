const numTeamsInput = document.getElementById('num-teams');
const btnSetup = document.getElementById('btn-setup');
const btnReset = document.getElementById('btn-reset');
const teamsContainer = document.getElementById('teams-container');

let teams = [];

function setupTeams() {
    let num = parseInt(numTeamsInput.value);
    if (isNaN(num) || num < 2) num = 2;
    if (num > 6) num = 6;
    
    teams = [];
    for (let i = 0; i < num; i++) {
        teams.push({ name: `ក្រុមទី ${i+1}`, score: 0 });
    }
    renderTeams();
}

function renderTeams() {
    teamsContainer.innerHTML = '';
    
    teams.forEach((team, index) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'team-name';
        nameInput.value = team.name;
        nameInput.addEventListener('change', (e) => {
            teams[index].name = e.target.value;
        });
        
        const scoreDisplay = document.createElement('div');
        scoreDisplay.className = 'team-score';
        scoreDisplay.textContent = team.score;
        
        const controls = document.createElement('div');
        controls.className = 'score-controls';
        
        const btnSub = document.createElement('button');
        btnSub.className = 'btn-score btn-sub';
        btnSub.textContent = '-1';
        btnSub.addEventListener('click', () => {
            teams[index].score--;
            scoreDisplay.textContent = teams[index].score;
        });
        
        const btnAdd = document.createElement('button');
        btnAdd.className = 'btn-score btn-add';
        btnAdd.textContent = '+1';
        btnAdd.addEventListener('click', () => {
            teams[index].score++; if(window.SoundFX) SoundFX.play("correct");
            scoreDisplay.textContent = teams[index].score;
        });
        
        controls.appendChild(btnSub);
        controls.appendChild(btnAdd);
        
        card.appendChild(nameInput);
        card.appendChild(scoreDisplay);
        card.appendChild(controls);
        
        teamsContainer.appendChild(card);
    });
}

btnSetup.addEventListener('click', setupTeams);

btnReset.addEventListener('click', () => {
    if(confirm('តើអ្នកពិតជាចង់លុបពិន្ទុទាំងអស់មែនទេ?')) {
        teams.forEach(t => t.score = 0);
        renderTeams();
    }
});

// Initial Setup
setupTeams();
