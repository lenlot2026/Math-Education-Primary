const btnGenerate = document.getElementById('btn-generate');
const namesInput = document.getElementById('names-input');
const numGroupsInput = document.getElementById('num-groups');
const groupsContainer = document.getElementById('groups-container');

btnGenerate.addEventListener('click', () => {
    // 1. Get and clean names
    const rawNames = namesInput.value.split('\n');
    let names = rawNames.map(n => n.trim()).filter(n => n !== '');
    
    if (names.length === 0) {
        alert('សូមបញ្ចូលឈ្មោះសិស្សជាមុនសិន!');
        return;
    }

    // 2. Get number of groups
    let numGroups = parseInt(numGroupsInput.value);
    if (isNaN(numGroups) || numGroups < 1) numGroups = 1;
    if (numGroups > names.length) numGroups = names.length;

    // 3. Shuffle names (Fisher-Yates)
    for (let i = names.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [names[i], names[j]] = [names[j], names[i]];
    }

    // 4. Distribute into groups
    const groups = Array.from({ length: numGroups }, () => []);
    
    names.forEach((name, index) => {
        groups[index % numGroups].push(name);
    });

    // 5. Render
    groupsContainer.innerHTML = '';
    groups.forEach((group, index) => {
        const card = document.createElement('div');
        card.className = 'group-card';
        
        const title = document.createElement('h4');
        title.textContent = `ក្រុមទី ${index + 1}`;
        card.appendChild(title);
        
        const ul = document.createElement('ul');
        group.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            ul.appendChild(li);
        });
        
        card.appendChild(ul);
        groupsContainer.appendChild(card);
    });
});
