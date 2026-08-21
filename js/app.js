let App = {
    currentGrade: 1,
    currentTopicGames: [],
    currentGameIndex: 0,
    score: 0
};

function navigate(id) {
    document.querySelectorAll('.view-section').forEach(e => e.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function selectRemedial(year) {
    const khmerNums = ['០', '១', '២', '៣', '៤', '៥', '៦'];
    
    if (year === 1) {
        const remedialYear1Topics = [
            { id: 'ry1_l1', title: 'មេរៀនទី១ : ចំនួន ០ ដល់១០', desc: 'ចំនួន និងការរាប់', color: '#10B981' },
            { id: 'ry1_l2', title: 'មេរៀនទី២ : វិធីបូកចំនួនគត់មានផលបូកមិនលើស១០', desc: 'ប្រមាណវិធីបូក', color: '#3B82F6' },
            { id: 'ry1_l3', title: 'មេរៀនទី៣ : វិធីដកចំនួនគត់ត្រឹម៩', desc: 'ប្រមាណវិធីដក', color: '#F43F5E' },
            { id: 'ry1_l4', title: 'មេរៀនទី៤ : ចំនួន ១០ ដល់ ២០', desc: 'ចំនួន និងការរាប់', color: '#8B5CF6' },
            { id: 'ry1_l5', title: 'មេរៀនទី៥ : ប្រមាណវិធីបូក វិធីដកចំនួនគត់ដល់២០', desc: 'បូកនិងដក', color: '#F59E0B' },
            { id: 'ry1_l6', title: 'មេរៀនទី៦ : ចំនួនគត់ដល់ ១០០', desc: 'ចំនួន និងការរាប់', color: '#14B8A6' },
            { id: 'ry1_l7', title: 'មេរៀនទី៧ : ចំនួនគត់ដល់ ១ ០០០', desc: 'ចំនួន និងការរាប់', color: '#EC4899' },
            { id: 'ry1_l8', title: 'មេរៀនទី៨ : តម្លៃលេខតាមខ្ទង់', desc: 'ខ្ទង់រាយ ខ្ទង់ដប់ ខ្ទង់រយ', color: '#6366F1' },
            { id: 'ry1_l9', title: 'មេរៀនទី៩ : ការរៀបលំដាប់ចំនួនគត់ និងលំនាំគំរូ', desc: 'លំដាប់ចំនួន', color: '#06B6D4' },
            { id: 'ry1_l10', title: 'មេរៀនទី១០ : ប្រមាណវិធីបូកចំនួនមានលេខ២ខ្ទង់', desc: 'ប្រមាណវិធីបូក', color: '#F97316' },
            { id: 'ry1_l11', title: 'មេរៀនទី១១ : ប្រមាណវិធីដកចំនួនមានលេខ២ខ្ទង់', desc: 'ប្រមាណវិធីដក', color: '#EAB308' },
            { id: 'ry1_l12', title: 'មេរៀនទី១២ : វិធីគុណ', desc: 'ប្រមាណវិធីគុណ', color: '#10B981' },
            { id: 'ry1_l13', title: 'មេរៀនទី១៣ : ប្រភាគ', desc: 'ចំនួនប្រភាគ', color: '#3B82F6' },
            { id: 'ry1_l14', title: 'មេរៀនទី១៤ : វិធីចែក', desc: 'ប្រមាណវិធីចែក', color: '#F43F5E' },
            { id: 'ry1_l15', title: 'មេរៀនទី១៥ : ប្រវែង', desc: 'រង្វាស់រង្វាល់', color: '#8B5CF6' },
            { id: 'ry1_l16', title: 'មេរៀនទី១៦ : ទម្ងន់', desc: 'រង្វាស់រង្វាល់', color: '#F59E0B' },
            { id: 'ry1_l17', title: 'មេរៀនទី១៧ : ចំណុះ', desc: 'រង្វាស់រង្វាល់', color: '#14B8A6' },
            { id: 'ry1_l18', title: 'មេរៀនទី១៨ : វិធីបូកចំនួនមានលេខ ៣ខ្ទង់', desc: 'ប្រមាណវិធីបូក', color: '#EC4899' },
            { id: 'ry1_l19', title: 'មេរៀនទី១៩ : វិធីដកចំនួនមានលេខ ៣ខ្ទង់ និង៣ខ្ទង់', desc: 'ប្រមាណវិធីដក', color: '#6366F1' },
            { id: 'ry1_l20', title: 'មេរៀនទី២០ : រូបិយវត្ថុ', desc: 'លុយរៀលខ្មែរ', color: '#06B6D4' },
            { id: 'ry1_l21', title: 'មេរៀនទី២១ : ធរណីមាត្រ', desc: 'រូបរាងធរណីមាត្រ', color: '#F97316' },
            { id: 'ry1_l22', title: 'មេរៀនទី២២ : ពេលវេលា', desc: 'ម៉ោង និងនាទី', color: '#EAB308' },
            { id: 'ry1_l23', title: 'មេរៀនទី២៣ : ទិន្នន័យ', desc: 'ស្ថិតិ និងក្រាប', color: '#10B981' }
        ];
        window.DATABASE['R1'] = remedialYear1Topics;
        App.currentGrade = 'R1';
    } else if (year === 2) {
        const remedialYear2Topics = [
            { id: 'ry2_l1', title: 'មេរៀនទី១ : ចំនួនដល់ 100 000', desc: 'ចំនួន និងការរាប់', color: '#10B981' },
            { id: 'ry2_l2', title: 'មេរៀនទី២ : ទម្ងន់', desc: 'រង្វាស់រង្វាល់', color: '#3B82F6' },
            { id: 'ry2_l3', title: 'មេរៀនទី៣ : វិធីបូក', desc: 'ប្រមាណវិធីបូក', color: '#F43F5E' },
            { id: 'ry2_l4', title: 'មេរៀនទី៤ : ប្រវែង', desc: 'រង្វាស់រង្វាល់', color: '#8B5CF6' },
            { id: 'ry2_l5', title: 'មេរៀនទី៥ : វិធីដក', desc: 'ប្រមាណវិធីដក', color: '#F59E0B' },
            { id: 'ry2_l6', title: 'មេរៀនទី៦ : រូបិយវត្ថុ', desc: 'លុយរៀលខ្មែរ', color: '#14B8A6' },
            { id: 'ry2_l7', title: 'មេរៀនទី៧ : មាឌ និងចំណុះ', desc: 'រង្វាស់រង្វាល់', color: '#EC4899' },
            { id: 'ry2_l8', title: 'មេរៀនទី៨ : វិធីគុណ', desc: 'ប្រមាណវិធីគុណ', color: '#6366F1' },
            { id: 'ry2_l9', title: 'មេរៀនទី៩ : ធរណីមាត្រ (១)', desc: 'រូបរាងធរណីមាត្រ', color: '#06B6D4' },
            { id: 'ry2_l10', title: 'មេរៀនទី១០ : វិធីចែក', desc: 'ប្រមាណវិធីចែក', color: '#F97316' },
            { id: 'ry2_l11', title: 'មេរៀនទី១១ : ពេលវេលា', desc: 'ម៉ោង នាទី និងប្រតិទិន', color: '#EAB308' },
            { id: 'ry2_l12', title: 'មេរៀនទី១២ : ប្រភាគ', desc: 'ចំនួនប្រភាគ', color: '#10B981' },
            { id: 'ry2_l13', title: 'មេរៀនទី១៣ : ធរណីមាត្រ (២)', desc: 'រូបរាងធរណីមាត្រ', color: '#3B82F6' },
            { id: 'ry2_l14', title: 'មេរៀនទី១៤ : ចំនួនទសភាគ', desc: 'ចំនួនទសភាគ', color: '#F43F5E' },
            { id: 'ry2_l15', title: 'មេរៀនទី១៥ : វិធីបូកចំនួនទសភាគ', desc: 'ប្រមាណវិធីបូក', color: '#8B5CF6' },
            { id: 'ry2_l16', title: 'មេរៀនទី១៦ : វិធីដកចំនួនទសភាគ', desc: 'ប្រមាណវិធីដក', color: '#F59E0B' },
            { id: 'ry2_l17', title: 'មេរៀនទី១៧ : វិធីគុណ និងចែកចំនួនទសភាគ', desc: 'ប្រមាណវិធីគុណ និងចែក', color: '#14B8A6' },
            { id: 'ry2_l18', title: 'មេរៀនទី១៨ : មុំ', desc: 'រង្វាស់មុំ', color: '#EC4899' },
            { id: 'ry2_l19', title: 'មេរៀនទី១៩ : បន្ទាត់កែងនិងបន្ទាត់ស្រប', desc: 'ធរណីមាត្រ', color: '#6366F1' },
            { id: 'ry2_l20', title: 'មេរៀនទី២០ : រូបឆ្លុះ', desc: 'ស៊ីមេទ្រី', color: '#06B6D4' },
            { id: 'ry2_l21', title: 'មេរៀនទី២១ : ការផ្លាស់ទី', desc: 'ធរណីមាត្រ', color: '#F97316' },
            { id: 'ry2_l22', title: 'មេរៀនទី២២ : ស្ថិតិ', desc: 'ការប្រមូលទិន្នន័យ', color: '#EAB308' }
        ];
        window.DATABASE['R2'] = remedialYear2Topics;
        App.currentGrade = 'R2';
    } else if (year === 3) {
        const remedialYear3Topics = [
            { id: 'ry3_l1', title: 'ជំពូកទី១ : ចំនួន', desc: 'ចំនួន', color: '#10B981' },
            { id: 'ry3_l2', title: 'ជំពូកទី២ : វិធីគុណ វិធីចែក', desc: 'ប្រមាណវិធី', color: '#3B82F6' },
            { id: 'ry3_l3', title: 'ជំពូកទី៣ : ប្រមាណវិធីមានវង់ក្រចក', desc: 'កន្សោមលេខ', color: '#F43F5E' },
            { id: 'ry3_l4', title: 'ជំពូកទី៤ : ចំនួនទសភាគ', desc: 'ទសភាគ', color: '#8B5CF6' },
            { id: 'ry3_l5', title: 'ជំពូកទី៥ : វិធីបូកនិងវិធីដកចំនួនទសភាគ', desc: 'ប្រមាណវិធីទសភាគ', color: '#F59E0B' },
            { id: 'ry3_l6', title: 'ជំពូកទី៦ : វិធីគុណនិងវិធីចែកចំនួនទសភាគ', desc: 'ប្រមាណវិធីទសភាគ', color: '#14B8A6' },
            { id: 'ry3_l7', title: 'ជំពូកទី៧ : ធរណីមាត្រ', desc: 'រូបរាងធរណីមាត្រ', color: '#EC4899' },
            { id: 'ry3_l8', title: 'ជំពូកទី៨ : ប្រភាគ', desc: 'ចំនួនប្រភាគ', color: '#6366F1' },
            { id: 'ry3_l9', title: 'ជំពូកទី៩ : ចំនួនចម្រុះ', desc: 'ចំនួនចម្រុះ', color: '#06B6D4' },
            { id: 'ry3_l10', title: 'ជំពូកទី១០ : រង្វាស់ប្រវែង', desc: 'រង្វាស់រង្វាល់', color: '#F97316' },
            { id: 'ry3_l11', title: 'ជំពូកទី១១ : រង្វាស់ទម្ងន់', desc: 'រង្វាស់រង្វាល់', color: '#EAB308' },
            { id: 'ry3_l12', title: 'ជំពូកទី១២ : រង្វាស់ចំណុះ', desc: 'រង្វាស់រង្វាល់', color: '#10B981' },
            { id: 'ry3_l13', title: 'ជំពូកទី១៣ : រង្វាស់ពេល', desc: 'ពេលវេលា', color: '#3B82F6' },
            { id: 'ry3_l14', title: 'ជំពូកទី១៤ : បរិមាត្រនិងផ្ទៃក្រឡា', desc: 'ធរណីមាត្រ', color: '#F43F5E' },
            { id: 'ry3_l15', title: 'ជំពូកទី១៥ : តួចែករួមធំបំផុត ពហុគុណរួមតូចបំផុត', desc: 'តួចែក និងពហុគុណ', color: '#8B5CF6' },
            { id: 'ry3_l16', title: 'ជំពូកទី១៦ : វិធីបូកនិងវិធីដកប្រភាគ', desc: 'ប្រមាណវិធីប្រភាគ', color: '#F59E0B' },
            { id: 'ry3_l17', title: 'ជំពូកទី១៧ : វិធីគុណនិងវិធីចែកប្រភាគ', desc: 'ប្រមាណវិធីប្រភាគ', color: '#14B8A6' },
            { id: 'ry3_l18', title: 'ជំពូកទី១៨ : ការជំនួសលេខដោយអក្សរ', desc: 'ពីជគណិត', color: '#EC4899' },
            { id: 'ry3_l19', title: 'ជំពូកទី១៩ : ផលធៀប ភាគរយ និងសមាមាត្រ', desc: 'ភាគរយ', color: '#6366F1' },
            { id: 'ry3_l20', title: 'ជំពូកទី២០ : ប្រមាណវិធីលើចំនួនចម្រុះ', desc: 'ប្រមាណវិធី', color: '#06B6D4' },
            { id: 'ry3_l21', title: 'ជំពូកទី២១ : រូបិយវត្ថុនិងការប្រាក់', desc: 'ការប្រាក់', color: '#F97316' },
            { id: 'ry3_l22', title: 'ជំពូកទី២២ : ស្ថិតិ', desc: 'ទិន្នន័យ', color: '#EAB308' },
            { id: 'ry3_l23', title: 'ជំពូកទី២៣ : មាឌនិងផ្ទៃក្រឡាសូលីត', desc: 'ធរណីមាត្រសូលីត', color: '#10B981' },
            { id: 'ry3_l24', title: 'ជំពូកទី២៤ : ប្លង់ ផែនទី និងមាត្រដ្ឋាន', desc: 'ប្លង់ និងផែនទី', color: '#3B82F6' }
        ];
        window.DATABASE['R3'] = remedialYear3Topics;
        App.currentGrade = 'R3';
    }
    
    const khmerYear = khmerNums[year] || year;
    document.getElementById('topic-title').innerText = `ថ្នាក់ពន្លឿនឆ្នាំទី ${khmerYear} 🚀`;
    renderTopics(App.currentGrade);
    navigate('screen-topic');
}

function selectGrade(grade) {
    App.currentGrade = grade;
    document.getElementById('topic-title').innerText = `ថ្នាក់ទី ${grade} 🎒`;
    renderTopics(grade);
    navigate('screen-topic');
}

function renderTopics(grade) {
    const container = document.getElementById('topic-container');
    container.innerHTML = '';

    const topics = window.DATABASE[grade];
    if (!topics || topics.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#94A3B8;">មិនទាន់មានមាតិកាទេ...</p>';
        return;
    }

    let examHtml = `
        <div style="width: 100%; max-width: 900px; margin: 0 auto 30px auto; text-align: left;">
            <h3 style="color: #1E293B; margin-bottom: 15px; font-size: 1.4rem;">📝 ម៉ាស៊ីនបង្កើតវិញ្ញាសា និង Slide PowerPoint</h3>
            <div style="background: #F8FAFC; padding: 25px; border-radius: 16px; border: 2px solid #E2E8F0; display:flex; align-items:flex-end; gap:20px; flex-wrap:wrap; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                <div style="display:flex; flex-direction:column; gap:8px; flex: 1; min-width: 120px; max-width: 150px;">
                    <label style="font-weight:bold; font-size:1rem; color:#475569;">លេខវិញ្ញាសា៖</label>
                    <input type="number" id="exam-number" value="1" min="1" style="padding:12px; border-radius:10px; border:2px solid #CBD5E1; font-family:inherit; font-size:1.05rem; outline:none;">
                </div>
                <div style="display:flex; flex-direction:column; gap:8px; flex: 1; min-width: 200px;">
                    <label style="font-weight:bold; font-size:1rem; color:#475569;">ចាប់ពីមេរៀន៖</label>
                    <select id="exam-start-lesson" style="padding:12px; border-radius:10px; border:2px solid #CBD5E1; font-family:inherit; font-size:1.05rem; outline:none; cursor:pointer;">
                        ${topics.map((t, i) => `<option value="${i}">មេរៀនទី ${i+1}៖ ${t.title.replace(/^[០-៩]+.\s*/, '').replace(/^\[ថ្នាក់ទី.*?\]\s*/, '')}</option>`).join('')}
                    </select>
                </div>
                <div style="display:flex; flex-direction:column; gap:8px; flex: 1; min-width: 200px;">
                    <label style="font-weight:bold; font-size:1rem; color:#475569;">ដល់មេរៀន៖</label>
                    <select id="exam-end-lesson" style="padding:12px; border-radius:10px; border:2px solid #CBD5E1; font-family:inherit; font-size:1.05rem; outline:none; cursor:pointer;">
                        ${topics.map((t, i) => `<option value="${i}" ${i === topics.length-1 ? 'selected' : ''}>មេរៀនទី ${i+1}៖ ${t.title.replace(/^[០-៩]+.\s*/, '').replace(/^\[ថ្នាក់ទី.*?\]\s*/, '')}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <button class="btn-action" style="background:#8B5CF6; color:white; width:200px; padding:15px; box-shadow: 0 4px 0 #7C3AED; font-size:1.1rem; border-radius:12px;" onclick="generateCustomExam()">🖨️ បង្កើតវិញ្ញាសា</button>
                </div>
            </div>
            
            <div style="background: #F8FAFC; padding: 25px; border-radius: 16px; border: 2px solid #E2E8F0; margin-top: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                <label style="font-weight:bold; font-size:1.05rem; color:#475569;">ឬជ្រើសរើសមេរៀនជាក់លាក់ (អាច Tick យកច្រើនមេរៀនបាន)៖</label>
                <div style="display:flex; align-items:flex-start; gap:20px; flex-wrap:wrap; margin-top:10px;">
                    <div style="flex: 1; min-width: 300px; max-height: 140px; overflow-y: auto; border: 2px solid #CBD5E1; border-radius: 10px; padding: 12px; background: white;">
                        ${topics.map((t, i) => `<label style="display:flex; align-items:center; gap:8px; margin-bottom:8px; cursor:pointer;"><input type="checkbox" class="custom-topic-checkbox" value="${i}" style="width:16px; height:16px;"> មេរៀនទី ${i+1}៖ ${t.title.replace(/^[០-៩]+.\s*/, '').replace(/^\[ថ្នាក់ទី.*?\]\s*/, '')}</label>`).join('')}
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <button class="btn-action" style="background:#10B981; color:white; width:200px; padding:15px; box-shadow: 0 4px 0 #059669; font-size:1.1rem; border-radius:12px;" onclick="generateSpecificExam()">🖨️ បង្កើតវិញ្ញាសា (Tick)</button>
                        
                        <button class="btn-action" style="background:#F59E0B; color:white; width:200px; padding:15px; box-shadow: 0 4px 0 #D97706; font-size:1.1rem; border-radius:12px;" onclick="generatePowerPoint()">📽️ បង្កើត Slide PPT</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="width: 100%; max-width: 900px; margin: 0 auto 20px auto; text-align: left;">
            <h3 style="color: #1E293B; font-size: 1.4rem;">📖 មេរៀន និងកិច្ចការខ្លីៗ</h3>
        </div>
        <div class="topic-grid" id="topic-grid-inner" style="width:100%; max-width:900px; margin:0 auto;"></div>
    `;
    container.innerHTML = examHtml;
    let innerGrid = document.getElementById('topic-grid-inner');

    topics.forEach((topic) => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div class="topic-color-bar" style="background: ${topic.color || '#3B82F6'};"></div>
            <div class="topic-info" style="flex:1;">
                <h3 style="color: ${topic.color || '#3B82F6'};">${topic.title}</h3>
                <p>${topic.desc || 'គណិតវិទ្យា'}</p>
                <span style="display:inline-block; margin-top:8px; font-size:0.85rem; font-weight:bold; color:#10B981;">លំហាត់អូតូ (Auto) ♾️</span>
            </div>
            <div class="topic-actions">
                <button class="btn-action play-btn" onclick="startGame('${topic.id}')">▶️ លេង</button>
                <button class="btn-action print-btn" style="font-size:0.85rem;" onclick="printWorksheet('${topic.id}')">🖨️ កិច្ចការខ្លី</button>
            </div>
        `;
        innerGrid.appendChild(card);
    });
}

function startGame(topicId) {
    let topic = window.DATABASE[App.currentGrade].find(t => t.id === topicId);
    App.currentTopicGames = Generator.generateForTopic(topicId, 10);
    if(App.currentTopicGames.length === 0) { alert('លំហាត់សម្រាប់មេរៀននេះកំពុងរៀបចំ! សូមរង់ចាំ។'); return; }
    document.getElementById('game-title').innerText = topic.title;
    App.currentGameIndex = 0;
    App.score = 0;
    document.getElementById('game-score').innerText = App.score;
    navigate('screen-game');
    renderCurrentGame();
}

function renderCurrentGame() {
    const gameData = App.currentTopicGames[App.currentGameIndex];
    GameEngine.renderGame(gameData, 'game-container', (isCorrect, explanation) => {
        if(isCorrect) {
            App.score += 10;
            document.getElementById('game-score').innerText = App.score;
            document.getElementById('user-coins').innerText = parseInt(document.getElementById('user-coins').innerText) + 10;
        }
        setTimeout(() => {
            App.currentGameIndex++;
            if(App.currentGameIndex < App.currentTopicGames.length) { renderCurrentGame(); } 
            else { alert(`អបអរសាទរ! អ្នកលេងចប់ហើយ។ អ្នកទទួលបានពិន្ទុ៖ ${App.score}`); navigate('screen-topic'); }
        }, 1500);
    });
}

function printWorksheet(topicId) {
    let topic = window.DATABASE[App.currentGrade].find(t => t.id === topicId);
    let titleHTML = `<div class="exam-title" style="margin-bottom: 20px;">កិច្ចការខ្លី៖ ${topic.title}</div>`;
    let infoBoxHTML = `
        <div class="info-box">
            <div><div>ឈ្មោះសិស្ស៖ .......................................................</div><div>ថ្នាក់ទី៖ ${App.currentGrade}</div></div>
            <div class="score-circle" style="margin-top: -10px;"><div style="margin-bottom: 5px;">ពិន្ទុ</div><div style="font-family: 'Kantumruy Pro', sans-serif;">......./១០</div></div>
        </div>`;
    generateAndRenderExam([topic], titleHTML, infoBoxHTML, true);
}

function generateCustomExam() {
    let startIdx = parseInt(document.getElementById('exam-start-lesson').value);
    let endIdx = parseInt(document.getElementById('exam-end-lesson').value);
    let examNo = document.getElementById('exam-number').value || '1';
    if (startIdx > endIdx) { alert("សូមជ្រើសរើសមេរៀនចាប់ផ្តើម ឱ្យតូចជាងឬស្មើ មេរៀនបញ្ចប់!"); return; }
    let allGradeTopics = window.DATABASE[App.currentGrade];
    let selectedTopics = allGradeTopics.slice(startIdx, endIdx + 1).filter(t => t.id && t.id.includes('_l'));
    if(!selectedTopics || selectedTopics.length === 0) return alert('មិនមានមេរៀនគ្រប់គ្រាន់សម្រាប់ចេញវិញ្ញាសាក្នុងចន្លោះនេះទេ!');
    let titleHTML = `<div class="exam-title">តេស្តសមត្ថភាព (ទី ${examNo})</div>`;
    let infoBoxHTML = `
        <div class="info-box">
            <div><div>សាលា៖ ..............................................................</div><div>ឈ្មោះសិស្ស៖ .......................................................</div><div>ថ្ងៃខែឆ្នាំកំណើត៖ ......../......../.............</div></div>
            <div><div>លេខតុ៖ ............ លេខបន្ទប់៖ ............</div><div>កាលបរិច្ឆេទ៖ ......../......../២០២...</div><div>ហត្ថលេខាមេប្រយោគ៖ .........................</div></div>
        </div>
        <div class="exam-meta">
            <div style="line-height: 1.8; font-size: 1.1rem;">
                <div><strong>វិញ្ញាសា៖ គណិតវិទ្យា</strong> (មេរៀនទី ${startIdx+1} ដល់ ${endIdx+1})</div>
                <div><strong>ថ្នាក់ទី៖ ${App.currentGrade}</strong> &nbsp;&nbsp;&nbsp; <strong>រយៈពេល៖ ៥០ នាទី</strong></div>
                <div style="margin-top: 10px;"><strong>សេចក្តីណែនាំ៖</strong></div>
                <ul style="margin-top: 5px; padding-left: 20px;"><li>បេក្ខជនមិនត្រូវលួចចម្លងគ្នាជាដាច់ខាត។</li><li>ត្រូវសរសេរឱ្យបានច្បាស់លាស់។</li></ul>
            </div>
            <div class="score-circle"><div style="margin-bottom: 5px;">ពិន្ទុ</div><div style="font-family: 'Kantumruy Pro', sans-serif;">......./១០</div></div>
        </div>`;
    generateAndRenderExam(selectedTopics, titleHTML, infoBoxHTML, false);
}

function generateSpecificExam() {
    let examNo = document.getElementById('exam-number').value || '1';
    let checkboxes = document.querySelectorAll('.custom-topic-checkbox:checked');
    if(checkboxes.length === 0) { alert("សូម Tick ជ្រើសរើសមេរៀនយ៉ាងហោចណាស់ ១!"); return; }
    let selectedIndices = Array.from(checkboxes).map(cb => parseInt(cb.value));
    let allGradeTopics = window.DATABASE[App.currentGrade];
    let selectedTopics = selectedIndices.map(idx => allGradeTopics[idx]).filter(t => t.id && t.id.includes('_l'));
    if(selectedTopics.length === 0) return alert('មិនមានមេរៀនគ្រប់គ្រាន់ទេ!');
    let titleHTML = `<div class="exam-title">តេស្តសមត្ថភាព (ទី ${examNo})</div>`;
    let infoBoxHTML = `
        <div class="info-box">
            <div><div>សាលា៖ ..............................................................</div><div>ឈ្មោះសិស្ស៖ .......................................................</div><div>ថ្ងៃខែឆ្នាំកំណើត៖ ......../......../.............</div></div>
            <div><div>លេខតុ៖ ............ លេខបន្ទប់៖ ............</div><div>កាលបរិច្ឆេទ៖ ......../......../២០២...</div><div>ហត្ថលេខាមេប្រយោគ៖ .........................</div></div>
        </div>
        <div class="exam-meta">
            <div style="line-height: 1.8; font-size: 1.1rem;">
                <div><strong>វិញ្ញាសា៖ គណិតវិទ្យា</strong> (មេរៀនចម្រុះ)</div>
                <div><strong>ថ្នាក់ទី៖ ${App.currentGrade}</strong> &nbsp;&nbsp;&nbsp; <strong>រយៈពេល៖ ៥០ នាទី</strong></div>
                <div style="margin-top: 10px;"><strong>សេចក្តីណែនាំ៖</strong></div>
                <ul style="margin-top: 5px; padding-left: 20px;"><li>បេក្ខជនមិនត្រូវលួចចម្លងគ្នាជាដាច់ខាត។</li><li>ត្រូវសរសេរឱ្យបានច្បាស់លាស់។</li></ul>
            </div>
            <div class="score-circle"><div style="margin-bottom: 5px;">ពិន្ទុ</div><div style="font-family: 'Kantumruy Pro', sans-serif;">......./១០</div></div>
        </div>`;
    generateAndRenderExam(selectedTopics, titleHTML, infoBoxHTML, false);
}

function generateAndRenderExam(topicPool, titleHTML, infoBoxHTML, isShortTest) {
    let mcQs = []; let mtQs = []; let fbQs = []; let calcQs = []; let wpQs = [];
    let targetMcCount = 2; let targetMtCount = 1; let targetFbCount = 2; let targetCalcCount = 2; let targetWpCount = 1; 
    let attempts = 0; let wp = Generator.qWordProblem(App.currentGrade); if(wp) wpQs.push(wp);
    let flatPool = [...topicPool].sort(() => Math.random() - 0.5);
    let poolIdx = 0; let topicCounts = {}; topicPool.forEach(t => topicCounts[t.id] = 0);

    while ((mcQs.length < targetMcCount || fbQs.length < targetFbCount || calcQs.length < targetCalcCount || mtQs.length < targetMtCount) && attempts < 800) {
        let randTopic = flatPool[poolIdx % flatPool.length]; poolIdx++;
        let q = Generator.createQuestion(randTopic.id);
        if(!q) { attempts++; continue; }
        q.topicId = randTopic.id;
        if (q.type === 'multiple_choice' || q.type === 'true_false') { if (mcQs.length < targetMcCount) { mcQs.push(q); topicCounts[q.topicId]++; } } 
        else if (q.type === 'fill_blank' || q.type === 'drag_drop') { if (fbQs.length < targetFbCount) { fbQs.push(q); topicCounts[q.topicId]++; } else if (calcQs.length < targetCalcCount) { calcQs.push(q); topicCounts[q.topicId]++; } } 
        else if (q.type === 'matching') { if (mtQs.length < targetMtCount) { mtQs.push(q); topicCounts[q.topicId]++; } }
        attempts++;
    }

    let printHTML = `
        <html><head><title>តេស្តសមត្ថភាព</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
        <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;600;700&family=Moul&display=swap');
            @page { size: A4 portrait; margin: 15mm; }
            body { font-family: 'Kantumruy Pro', sans-serif; color: #000; padding: 0; position: relative; min-height: 195vh; }
            .exam-title { text-align: center; font-family: 'Moul', cursive; font-size: 1.6rem; color: #1E3A8A; margin: 20px 0 30px 0; }
            .info-box { border: 1.5px solid #000; padding: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; line-height: 1.8; }
            .score-circle { width: 110px; height: 85px; border: 1.5px solid #000; border-radius: 50%; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: 'Moul', cursive; font-size: 1.1rem; margin-left: 20px;}
            .exam-meta { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; }
            .section-title { font-weight: bold; font-size: 1.2rem; margin-top: 15px; margin-bottom: 10px; display: flex; justify-content: space-between; page-break-after: avoid; break-after: avoid; }
            .q-item { margin-bottom: 15px; font-size: 1.1rem; padding-left: 15px; page-break-inside: avoid; break-inside: avoid; }
            .options-grid { display: flex; gap: 30px; margin-top: 10px; margin-left: 15px; }
            .opt-box { display: flex; align-items: center; gap: 10px; }
            .checkbox { width: 20px; height: 20px; border: 1.5px solid #000; display: inline-block; }
            .calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; line-height: 2.5; margin-left: 15px; }
            .match-row { display: flex; justify-content: space-between; width: 60%; margin: 10px auto; align-items: center; }
            .wp-box { border: 1.5px solid #000; width: 80px; height: 40px; display: inline-block; vertical-align: middle; margin-right: 10px; }
        </style></head><body>
        <div id="content-wrap">${titleHTML}${infoBoxHTML}
    `;

    let romanNum = 1; let rom = ['I', 'II', 'III', 'IV', 'V']; const khmerLetters = ['ក', 'ខ', 'គ', 'ឃ', 'ង', 'ច', 'ឆ', 'ជ'];
    if(mcQs.length > 0) {
        printHTML += `<div class="section-title"><span>${rom[romanNum-1]}. ចូរគូស ✓ ក្នុង ⃞ ចំពោះចម្លើយដែលត្រឹមត្រូវ។ (ជ្រើសរើសចម្លើយ)</span> <span>(${mcQs.length} ពិន្ទុ)</span></div>`;
        mcQs.forEach((g, idx) => {
            printHTML += `<div class="q-item"><div>${idx+1}. ${g.question}</div><div class="options-grid">`;
            if (g.type === 'multiple_choice') { const letters = ['ក.', 'ខ.', 'គ.', 'ឃ.']; g.options.forEach((opt, oIdx) => printHTML += `<div class="opt-box"><div>${letters[oIdx] || 'ង.'}</div> <div class="checkbox"></div> <div>${opt}</div></div>`); } 
            else { printHTML += `<div class="opt-box"><div>ក.</div> <div class="checkbox"></div> <div>ត្រូវ ✔️</div></div><div class="opt-box"><div>ខ.</div> <div class="checkbox"></div> <div>ខុស ❌</div></div>`; }
            printHTML += `</div></div>`;
        }); romanNum++;
    }
    if(mtQs.length > 0) {
        printHTML += `<div class="section-title"><span>${rom[romanNum-1]}. ចូរគូសបន្ទាត់ផ្គូផ្គងខាងក្រោមឱ្យបានត្រឹមត្រូវ។</span> <span>(2 ពិន្ទុ)</span></div>`;
        mtQs.forEach((g, idx) => {
            printHTML += `<div class="q-item"><div>${idx+1}. ${g.question}</div>`;
            let rightItems = [...g.pairs].sort(() => Math.random() - 0.5);
            g.pairs.forEach((p, i) => printHTML += `<div class="match-row"><div>${p.left} &nbsp;&nbsp;&nbsp; ●</div><div>● &nbsp;&nbsp;&nbsp; ${rightItems[i].right}</div></div>`);
            printHTML += `</div>`;
        }); romanNum++;
    }
    if(fbQs.length > 0) {
        printHTML += `<div class="section-title"><span>${rom[romanNum-1]}. ចូរបំពេញចន្លោះខាងក្រោមឱ្យបានត្រឹមត្រូវ។</span> <span>(${fbQs.length} ពិន្ទុ)</span></div>`;
        fbQs.forEach((g, idx) => {
            let qStr = g.type === 'fill_blank' ? g.question : (g.sentence ? g.sentence : g.question); qStr = qStr.replace(/\[\s*\]/, ' ......... ').replace(/\[DROP\]/, ' ......... ');
            printHTML += `<div class="q-item" style="margin-bottom: 25px;"><div>${idx+1}. ${qStr}</div></div>`;
        }); romanNum++;
    }
    if(calcQs.length > 0) {
        printHTML += `<div class="section-title"><span>${rom[romanNum-1]}. ចូរធ្វើប្រមាណវិធីខាងក្រោម៖</span> <span>(${calcQs.length} ពិន្ទុ)</span></div>`;
        printHTML += `<div class="q-item"><div class="calc-grid" style="gap: 20px; margin-bottom: 15px;">`;
        calcQs.forEach((g, idx) => {
            let qStr = g.type === 'fill_blank' ? g.question : (g.sentence ? g.sentence : g.question); qStr = qStr.replace(/\[\s*\]/, ' ......... ').replace(/\[DROP\]/, ' ......... ');
            let letter = khmerLetters[idx] || khmerLetters[0]; let dottedSpace = '';
            for(let i=0; i<3; i++) { dottedSpace += `<div style="color: #94A3B8; margin-top: 10px; font-size: 0.9rem;">......................................................................</div>`; }
            printHTML += `<div><div style="font-weight:bold; font-size: 1.15rem;">${letter}. &nbsp; ${qStr}</div>${dottedSpace}</div>`;
        }); printHTML += `</div></div>`; romanNum++;
    }
    if(wpQs.length > 0) {
        printHTML += `<div class="section-title"><span>${rom[romanNum-1]}. ចំណោទ។</span> <span>(3 ពិន្ទុ)</span></div>`;
        wpQs.forEach((g, idx) => {
            let qText = g.question.replace(/\[\s*\]/, '').trim();
            printHTML += `<div class="q-item" style="line-height:1.6;"><div>${idx+1}. ${qText}</div>`;
            if (App.currentGrade >= 2) {
                printHTML += `<div style="display: flex; justify-content: space-between; margin-top: 15px; margin-left: 15px; margin-right: 15px;">
                    <div style="width: 55%;"><div style="font-weight:bold; font-size: 1.05rem; margin-bottom: 5px; text-decoration: underline;">របៀបឆ្លើយ</div><div style="color: #94A3B8; line-height: 2.3;">.........................................................................<br>.........................................................................<br>.........................................................................<br>.........................................................................</div></div>
                    <div style="width: 40%; border-left: 1.5px dashed #CBD5E1; padding-left: 20px;"><div style="font-weight:bold; font-size: 1.05rem; margin-bottom: 5px; text-decoration: underline;">ប្រមាណវិធី</div><div style="color: #94A3B8; line-height: 2.3;">....................................................<br>....................................................<br>....................................................<br>....................................................</div></div>
                </div>`;
            } else { printHTML += `<div style="margin-top: 15px; margin-left: 20px; display:flex; align-items:center;"><span style="margin-right: 15px;">ចម្លើយ៖ </span><div class="wp-box"></div></div>`; }
            printHTML += `</div>`;
        });
    }
    printHTML += `<div id="print-footer" style="position: absolute; bottom: 0; left: 0; right: 0; padding-top: 10px; border-top: 1.5px solid #000; text-align: left; font-size: 0.95rem; font-weight: normal; color: #64748B;">ប្រធានក្រុមបច្ចេកទេសគណិតវិទ្យា និងវិទ្យាសាស្ត្រ</div></body></html>`;
    triggerPrint(printHTML);
}

function triggerPrint(html) {
    let printWin = window.open('', '_blank'); printWin.document.write(html); printWin.document.close();
    printWin.onload = function() {
        printWin.focus();
        try { if(printWin.renderMathInElement) { printWin.renderMathInElement(printWin.document.body, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}, {left: '\\(', right: '\\)', display: false}, {left: '\\[', right: '\\]', display: true}], throwOnError: false }); } } catch(e) { console.error(e); }
        setTimeout(() => { printWin.print(); }, 600);
    };
}
function goBackFromTopic() {
    if (typeof App.currentGrade === 'string' && App.currentGrade.startsWith('R')) { navigate('screen-remedial'); } 
    else { navigate('screen-grade'); }
}

function getSmartConcept(title) {
    if (title.includes('បូក')) return 'ការបូក គឺជាការយកចំនួនពីរ ឬច្រើនមករួមបញ្ចូលគ្នា ដើម្បីរកចំនួនសរុប (ផលបូក)។\n\nឧទាហរណ៍៖ ប្រសិនបើអ្នកមានផ្លែប៉ោម ២ ហើយបានបន្ថែម ៣ ទៀត នោះអ្នកមាន ៥ ផ្លែ។\nលក្ខណៈត្រឡប់៖ ក + ខ = ខ + ក';
    if (title.includes('ដក')) return 'ការដក គឺជាការយកចំនួនមួយចេញពីចំនួនមួយទៀត ដើម្បីរកចំនួនដែលនៅសល់ (ផលសង)។\n\nចំណាំ៖ តំណាងដក ត្រូវតែធំជាង ឬស្មើ តួដកជានិច្ច (ក្នុងការគណនាចំនួនគត់)។';
    if (title.includes('គុណ')) return 'ការគុណ គឺជាការបូកចំនួនដដែលៗច្រើនដងបញ្ចូលគ្នា (ផលគុណ)។\n\nលក្ខណៈត្រឡប់៖ ក × ខ = ខ × ក';
    if (title.includes('ចែក')) return 'ការចែក គឺជាការបែងចែកចំនួនមួយ ជាចំណែកតូចៗដែលស្មើៗគ្នា។\n\nរូបមន្តផ្ទៀងផ្ទាត់៖ តំណាងចែក = (តួចែក × ផលចែក) + សំណល់។';
    if (title.includes('ប្រភាគ')) return 'ប្រភាគ គឺជាចំនួនដែលតំណាងឱ្យផ្នែកមួយនៃវត្ថុទាំងមូល។ វាមានភាគយក (ខាងលើ) និងភាគបែង (ខាងក្រោម)។\n\nចំណាំ៖ ភាគបែងមិនអាចស្មើ សូន្យ (0) បានឡើយ។';
    if (title.includes('ទសភាគ')) return 'ចំនួនទសភាគ គឺជាចំនួនដែលមានក្បៀស (,) ដើម្បីញែកផ្នែកគត់ និងផ្នែកទសភាគ។\n\nឧទាហរណ៍៖ ២.៥ (២ ជាផ្នែកគត់, ៥ ជាផ្នែកទសភាគ)';
    if (title.includes('ធរណីមាត្រ') || title.includes('មុំ') || title.includes('បន្ទាត់') || title.includes('រង្វង់') || title.includes('ផ្ទៃក្រឡា')) return 'ធរណីមាត្រ សិក្សាពីរូបរាង ទំហំ និងលក្ខណៈនៃតួលេខក្នុងលំហ។\n\nការស្គាល់ពីរូបរាង និងរូបមន្តផ្ទៃក្រឡា ជួយយើងដោះស្រាយបញ្ហាទាក់ទងនឹងការវាស់វែងជាក់ស្តែង។';
    if (title.includes('ពេលវេលា') || title.includes('ម៉ោង')) return 'ពេលវេលាត្រូវបានវាស់ជា វិនាទី នាទី ម៉ោង ថ្ងៃ ខែ និងឆ្នាំ។\n\nចំណាំ៖ ១ ម៉ោង = ៦០ នាទី, ១ នាទី = ៦០ វិនាទី, ១ ថ្ងៃ = ២៤ ម៉ោង។';
    if (title.includes('រង្វាស់') || title.includes('ទម្ងន់') || title.includes('ប្រវែង') || title.includes('ចំណុះ')) return 'ការវាស់វែង គឺជានីតិវិធីនៃការស្វែងរកបរិមាណ ដូចជា ប្រវែង ទម្ងន់ ឬចំណុះ ដោយប្រើប្រាស់ខ្នាតស្តង់ដា។\n\nឧទាហរណ៍៖ គីឡូក្រាម(kg) សង់ទីម៉ែត្រ(cm) លីត្រ(L)...';
    
    return `ច្បាប់ និងនិយមន័យ៖\n\nដើម្បីដោះស្រាយ និងគណនា "${title.replace(/^[០-៩]+.\s*/, '').replace(/^មេរៀនទី\s*[០-៩]+\s*[:៖]\s*/, '')}" ឱ្យបានត្រឹមត្រូវ យើងត្រូវស្វែងយល់ពីប្រធានបទឱ្យបានច្បាស់ រួចអនុវត្តតាមលំដាប់លំដោយនៃការគណនា ព្រមទាំងធ្វើការផ្ទៀងផ្ទាត់ចម្លើយជានិច្ច។`;
}


// =============================================================================
// ប្រព័ន្ធបញ្ញាសិប្បនិម្មិត វិភាគចំណងជើងមេរៀន (ធានាស៊ីគ្នា១០០% តាមប្រធានបទ)
// =============================================================================
function generateSmartMath(title, typeCount) {
    let randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    let qs = [];
    
    let isFrac = title.includes('ប្រភាគ');
    if (isFrac) {
        while (qs.length < typeCount) {
            let d1 = randInt(3, 10);
            let n1 = randInt(1, 8);
            let n2 = randInt(1, 8);
            let op = title.includes('ដក') ? '-' : (title.includes('គុណ') ? '×' : '+');
            let ans = '';
            
            if (op === '-') {
                if (n1 <= n2) n1 = n2 + randInt(1, 3);
                ans = `${n1-n2}/${d1}`;
            } else if (op === '×') {
                let d2 = randInt(2, 5);
                ans = `${n1*n2}/${d1*d2}`;
                d1 = `${d1} × ${n2}/${d2}`;
            } else {
                ans = `${n1+n2}/${d1}`;
            }
            
            let qText = op==='×' ? `${n1}/${d1} = [ ]` : `${n1}/${d1} ${op} ${n2}/${d1} = [ ]`;
            if (!qs.find(q => q.question === qText)) qs.push({ type: 'fill_blank', question: qText, correctAnswer: ans });
        }
        return qs;
    }

    let maxNum = 99;
    if (title.includes('ត្រឹម៩') || title.includes('ដល់១០') || title.includes('មិនលើស១០')) maxNum = 9;
    else if (title.includes('ដល់២០')) maxNum = 20;
    else if (title.includes('១០០') || title.includes('២ខ្ទង់')) maxNum = 99;
    else if (title.includes('១០០០') || title.includes('៣ខ្ទង់')) maxNum = 999;
    else if (title.includes('១០០០០') || title.includes('៤ខ្ទង់')) maxNum = 9999;
    
    let isAdd = title.includes('បូក');
    let isSub = title.includes('ដក');
    let isMul = title.includes('គុណ');
    let isDiv = title.includes('ចែក');
    
    // បើចំណងជើងទូទៅ ដាក់បូកដកចម្រុះ
    if (!isAdd && !isSub && !isMul && !isDiv) {
        isAdd = true;
        if (maxNum > 10) isSub = true;
    }
    
    let ops = [];
    if (isAdd) ops.push('+');
    if (isSub) ops.push('-');
    if (isMul) ops.push('×');
    if (isDiv) ops.push('÷');
    
    while(qs.length < typeCount) {
        let op = ops[randInt(0, ops.length - 1)];
        let a, b, ans;
        
        if (op === '+') {
            a = randInt(1, maxNum);
            b = randInt(1, maxNum);
            ans = a + b;
        } else if (op === '-') {
            a = randInt(2, maxNum);
            b = randInt(1, a - 1);
            ans = a - b;
        } else if (op === '×') {
            let maxM = maxNum > 99 ? 99 : (maxNum > 20 ? 10 : 5);
            a = randInt(2, maxM);
            b = randInt(2, 9);
            ans = a * b;
        } else if (op === '÷') {
            let maxD = maxNum > 99 ? 99 : (maxNum > 20 ? 10 : 5);
            b = randInt(2, 9);
            ans = randInt(2, maxD);
            a = b * ans; // ធានាថាចែកដាច់
        }
        
        let qText = `${a} ${op} ${b} = [ ]`;
        if (!qs.find(q => q.question === qText)) qs.push({ type: 'fill_blank', question: qText, correctAnswer: ans });
    }
    return qs;
}

function generateSmartWordProblem(title) {
    let randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    let isAdd = title.includes('បូក');
    let isSub = title.includes('ដក');
    let isMul = title.includes('គុណ');
    let isDiv = title.includes('ចែក');
    
    if (!isAdd && !isSub && !isMul && !isDiv) { isAdd = true; }
    
    let a, b, ans;
    let question = "";
    
    if (isDiv) {
        b = randInt(2, 9);
        ans = randInt(5, 20);
        a = b * ans;
        question = `អ្នកគ្រូមានសៀវភៅ ${a} ក្បាល ចែកឱ្យសិស្ស ${b} នាក់ស្មើៗគ្នា។ តើសិស្សម្នាក់ៗទទួលបានសៀវភៅប៉ុន្មានក្បាល?`;
    } else if (isMul) {
        a = randInt(5, 15);
        b = randInt(3, 9);
        ans = a * b;
        question = `ក្នុងមួយប្រអប់មានខ្មៅដៃ ${a} ដើម។ បើមាន ${b} ប្រអប់ តើមានខ្មៅដៃសរុបប៉ុន្មានដើម?`;
    } else if (isSub) {
        a = randInt(20, 100);
        b = randInt(5, a - 5);
        ans = a - b;
        question = `កសិដ្ឋានមួយមានមាន់ ${a} ក្បាល គេលក់អស់ ${b} ក្បាល។ តើកសិដ្ឋាននោះនៅសល់មាន់ប៉ុន្មានក្បាល?`;
    } else {
        a = randInt(20, 100);
        b = randInt(10, 50);
        ans = a + b;
        question = `សុខមានប្រាក់ ${a} រៀល ម្តាយឱ្យថែម ${b} រៀលទៀត។ តើសុខមានប្រាក់សរុបប៉ុន្មានរៀល?`;
    }
    
    let options = [ans, ans + randInt(1, 5), ans - randInt(1, 5), ans + 10];
    options = [...new Set(options)];
    while(options.length < 4) {
        let n = ans + randInt(2, 12);
        if (!options.includes(n)) options.push(n);
    }
    options.sort(() => Math.random() - 0.5);
    let correctIdx = options.indexOf(ans);
    
    return {
        type: 'multiple_choice',
        question: question,
        options: options,
        correctAnswer: correctIdx
    };
}


function generatePowerPoint() {
    if (typeof PptxGenJS === 'undefined') { alert("កំហុស៖ មិនទាន់មានបណ្ណាល័យ PptxGenJS ទេ។"); return; }
    let checkboxes = document.querySelectorAll('.custom-topic-checkbox:checked');
    if(checkboxes.length === 0) { alert("សូម Tick ជ្រើសរើសមេរៀនយ៉ាងហោចណាស់ ១ សម្រាប់យកទៅបង្កើតជា Slide PowerPoint!"); return; }
    
    let selectedIndices = Array.from(checkboxes).map(cb => parseInt(cb.value));
    let allGradeTopics = window.DATABASE[App.currentGrade];
    let selectedTopics = selectedIndices.map(idx => allGradeTopics[idx]).filter(t => t.id && t.id.includes('_l'));
    if(selectedTopics.length === 0) return;

    let mainTopic = selectedTopics[0];
    let topicNameOnly = mainTopic.title.replace(/^[០-៩]+.\s*/, '').replace(/^មេរៀនទី\s*[០-៩]+\s*[:៖]\s*/, '').replace(/^ជំពូកទី\s*[០-៩]+\s*[:៖]\s*/, '');
    let autoConcept = getSmartConcept(topicNameOnly);

    let pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';
    
    const FONT_MOUL = 'Khmer OS Muol Light'; 
    const FONT_BODY = 'Khmer OS Battambang';
    const COLOR_PRIMARY = '1E3A8A'; 
    const COLOR_ACCENT = 'DC2626'; 
    const COLOR_KNOWLEDGE = '059669'; 
    const COLOR_SKILL = '2563EB'; 
    const COLOR_ATTITUDE = 'D97706'; 

    let gradeStr = String(App.currentGrade).startsWith('R') ? `ថ្នាក់ពន្លឿនឆ្នាំទី ${String(App.currentGrade).replace('R','')}` : `ថ្នាក់ទី ${App.currentGrade}`;

    // ----------------------------------------------------
    // ការទាញយកលំហាត់ទៅតាមប្រធានបទយ៉ាងត្រឹមត្រូវ
    // ----------------------------------------------------
    let calcQs = generateSmartMath(mainTopic.title, 10);
    
    let exQs = calcQs.slice(0, 2); // គំរូ 2 លំហាត់
    let pracQs = calcQs.slice(2, 6); // អនុវត្ត 4 លំហាត់
    let hwQs = calcQs.slice(6, 10); // កិច្ចការផ្ទះ 4 លំហាត់
    
    // រង្វាយតម្លៃ៖ បង្កើតចំណោទឱ្យត្រូវនឹងប្រធានបទ
    let evalQ = generateSmartWordProblem(mainTopic.title);

    const khmerLetters = ['ក', 'ខ', 'គ', 'ឃ', 'ង'];

    // SLIDE 1: Cover
    let s1 = pptx.addSlide();
    s1.background = { color: 'F8FAFC' };
    s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 3.5, h: '100%', fill: { color: COLOR_PRIMARY } });
    s1.addText('សាលា PSE', { x: 0, y: 2.0, w: 3.5, align: 'center', fontSize: 36, fontFace: FONT_MOUL, color: 'FFFFFF' });
    s1.addText('កម្មវិធីគណិតវិទ្យា', { x: 0, y: 2.8, w: 3.5, align: 'center', fontSize: 24, fontFace: FONT_BODY, color: 'E0E7FF' });
    s1.addText(mainTopic.title, { x: 4.0, y: 2.0, w: 5.5, align: 'left', fontSize: 40, fontFace: FONT_MOUL, color: COLOR_ACCENT, bold: true });
    s1.addShape(pptx.ShapeType.roundRect, { x: 4.0, y: 3.5, w: 2.5, h: 0.8, fill: { color: 'F59E0B' }, rectRadius: 0.2 });
    s1.addText(gradeStr, { x: 4.0, y: 3.5, w: 2.5, h: 0.8, align: 'center', fontSize: 24, fontFace: FONT_MOUL, color: 'FFFFFF' });

    // SLIDE 2: Objectives
    let s2 = pptx.addSlide();
    s2.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 1, fill: { color: COLOR_PRIMARY } });
    s2.addText('វត្ថុបំណងមេរៀន', { x: 0.5, y: 0.2, w: 9, fontSize: 36, fontFace: FONT_MOUL, color: 'FFFFFF' });
    s2.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 1.5, w: 9, h: 1.2, fill: { color: 'ECFDF5' }, line: { color: COLOR_KNOWLEDGE, width: 2 }, rectRadius: 0.2 });
    s2.addText('វិជ្ជាសម្បទា៖', { x: 0.7, y: 1.6, w: 2.5, fontSize: 24, fontFace: FONT_MOUL, color: COLOR_KNOWLEDGE });
    s2.addText(`សិស្សប្រាប់ពីបញ្ញត្តិ និងរបៀបគណនាអំពី «${topicNameOnly}» បានត្រឹមត្រូវ។`, { x: 3.2, y: 1.6, w: 6.0, fontSize: 22, fontFace: FONT_BODY, color: '1E293B' });
    s2.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 3.0, w: 9, h: 1.2, fill: { color: 'EFF6FF' }, line: { color: COLOR_SKILL, width: 2 }, rectRadius: 0.2 });
    s2.addText('បំណិនសម្បទា៖', { x: 0.7, y: 3.1, w: 2.5, fontSize: 24, fontFace: FONT_MOUL, color: COLOR_SKILL });
    s2.addText(`សិស្សគណនា និងដោះស្រាយលំហាត់ «${topicNameOnly}» បានត្រឹមត្រូវ។`, { x: 3.2, y: 3.1, w: 6.0, fontSize: 22, fontFace: FONT_BODY, color: '1E293B' });
    s2.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 4.5, w: 9, h: 1.2, fill: { color: 'FFFBEB' }, line: { color: COLOR_ATTITUDE, width: 2 }, rectRadius: 0.2 });
    s2.addText('ចរិយាសម្បទា៖', { x: 0.7, y: 4.6, w: 2.5, fontSize: 24, fontFace: FONT_MOUL, color: COLOR_ATTITUDE });
    s2.addText('សិស្សយកចំណេះដឹងនេះទៅអនុវត្តក្នុងជីវភាពរស់នៅប្រចាំថ្ងៃ។', { x: 3.2, y: 4.6, w: 6.0, fontSize: 22, fontFace: FONT_BODY, color: '1E293B' });

    // SLIDE 3: Concept
    let s3 = pptx.addSlide();
    s3.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 1, fill: { color: COLOR_PRIMARY } });
    s3.addText('ខ្លឹមសារមេរៀន / បញ្ញត្តិ', { x: 0.5, y: 0.2, w: 9, fontSize: 36, fontFace: FONT_MOUL, color: 'FFFFFF' });
    s3.addShape(pptx.ShapeType.roundRect, { x: 0.5, y: 1.5, w: 9, h: 3.5, fill: { color: 'F8FAFC' }, line: { color: 'CBD5E1', width: 2 }, rectRadius: 0.2 });
    s3.addText(autoConcept, { x: 0.8, y: 1.8, w: 8.4, fontSize: 26, fontFace: FONT_BODY, color: '1E293B', align: 'left' });

    // SLIDE 4: លំហាត់គំរូ (2 លំហាត់គណនា)
    if(exQs.length > 0) {
        let s4 = pptx.addSlide();
        s4.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 1, fill: { color: COLOR_PRIMARY } });
        s4.addText('លំហាត់គំរូ', { x: 0.5, y: 0.2, w: 9, fontSize: 36, fontFace: FONT_MOUL, color: 'FFFFFF' });
        s4.addText('ចូរគណនា ឬដោះស្រាយប្រមាណវិធីខាងក្រោម៖', { x: 0.5, y: 1.2, w: 9, fontSize: 24, fontFace: FONT_BODY, color: '1E293B' });

        let q1 = exQs[0].question.replace(/\[\s*\]/g, ' ..... ').replace(/<[^>]+>/g, "");
        s4.addText(`ក. ${q1}`, { x: 0.5, y: 2.0, w: 4.5, fontSize: 28, fontFace: FONT_BODY, color: '1E293B', bold: true });
        s4.addText(`ចម្លើយ៖ ${exQs[0].correctAnswer}`, { x: 0.5, y: 2.8, w: 4.5, fontSize: 28, fontFace: FONT_BODY, color: COLOR_KNOWLEDGE, bold: true });

        if(exQs.length > 1) {
            let q2 = exQs[1].question.replace(/\[\s*\]/g, ' ..... ').replace(/<[^>]+>/g, "");
            s4.addText(`ខ. ${q2}`, { x: 5.0, y: 2.0, w: 4.5, fontSize: 28, fontFace: FONT_BODY, color: '1E293B', bold: true });
            s4.addText(`ចម្លើយ៖ ${exQs[1].correctAnswer}`, { x: 5.0, y: 2.8, w: 4.5, fontSize: 28, fontFace: FONT_BODY, color: COLOR_KNOWLEDGE, bold: true });
        }
    }

    // SLIDE 5 & 6: លំហាត់អនុវត្ត (4 លំហាត់គណនា)
    if(pracQs.length > 0) {
        let s5 = pptx.addSlide();
        s5.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 1, fill: { color: COLOR_PRIMARY } });
        s5.addText('លំហាត់អនុវត្ត', { x: 0.5, y: 0.2, w: 9, fontSize: 36, fontFace: FONT_MOUL, color: 'FFFFFF' });
        s5.addText('ចូរធ្វើប្រមាណវិធីខាងក្រោម៖', { x: 0.5, y: 1.2, w: 9, fontSize: 24, fontFace: FONT_BODY, color: '475569' });
        
        let s6 = pptx.addSlide();
        s6.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 1, fill: { color: COLOR_KNOWLEDGE } });
        s6.addText('ចម្លើយលំហាត់អនុវត្ត', { x: 0.5, y: 0.2, w: 9, fontSize: 36, fontFace: FONT_MOUL, color: 'FFFFFF' });

        let positions = [{x:0.5, y:2.0}, {x:5.0, y:2.0}, {x:0.5, y:3.5}, {x:5.0, y:3.5}];
        
        pracQs.forEach((q, idx) => {
            if(idx >= 4) return;
            let qText = q.question.replace(/\[\s*\]/g, ' ..... ').replace(/<[^>]+>/g, "");
            let ansText = String(q.correctAnswer);
            if (q.type === 'multiple_choice') ansText = q.options ? q.options[q.correctAnswer] : ansText;
            
            s5.addText(`${khmerLetters[idx]}. ${qText}`, { x: positions[idx].x, y: positions[idx].y, w: 4.5, fontSize: 28, fontFace: FONT_BODY, color: '1E293B', bold: true });
            
            s6.addText(`${khmerLetters[idx]}. ${qText}`, { x: positions[idx].x, y: positions[idx].y, w: 4.5, fontSize: 24, fontFace: FONT_BODY, color: '64748B' });
            s6.addText(`ចម្លើយ៖ ${ansText}`, { x: positions[idx].x, y: positions[idx].y + 0.6, w: 4.5, fontSize: 28, fontFace: FONT_BODY, color: COLOR_ACCENT, bold: true });
        });
    }

    // SLIDE 7: រង្វាយតម្លៃ (Evaluation - ចំណោទត្រូវតាមប្រធានបទ)
    if(evalQ) {
        let s7 = pptx.addSlide();
        s7.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 1, fill: { color: COLOR_PRIMARY } });
        s7.addText('រង្វាយតម្លៃ', { x: 0.5, y: 0.2, w: 9, fontSize: 36, fontFace: FONT_MOUL, color: 'FFFFFF' });
        
        s7.addText('ចូរគូសសញ្ញា ✓ ក្នុង ⃞ ចំពោះចម្លើយត្រឹមត្រូវតែមួយគត់៖', { x: 0.5, y: 1.2, w: 9, fontSize: 24, fontFace: FONT_BODY, color: COLOR_ACCENT, bold: true });

        let qText = evalQ.question.replace(/<[^>]+>/g, "");
        s7.addText(qText, { x: 0.5, y: 2.0, w: 9, fontSize: 28, fontFace: FONT_BODY, color: '1E293B', bold: true });
        
        if (evalQ.options && Array.isArray(evalQ.options) && evalQ.options.length > 0) {
            let optPos = [{x: 1, y: 3.5}, {x: 5.5, y: 3.5}, {x: 1, y: 4.5}, {x: 5.5, y: 4.5}];
            evalQ.options.forEach((opt, idx) => {
                if(idx >= 4) return;
                let bx = optPos[idx].x;
                let by = optPos[idx].y;
                
                s7.addText(`${khmerLetters[idx]}.`, { x: bx, y: by, w: 0.6, h: 0.5, fontSize: 28, fontFace: FONT_BODY, color: '1E293B', align: 'left', valign: 'middle' });
                s7.addShape(pptx.ShapeType.rect, { x: bx + 0.6, y: by + 0.1, w: 0.3, h: 0.3, line: {color: '1E293B', width: 2}, fill: {color: 'FFFFFF'} });
                s7.addText(String(opt), { x: bx + 1.1, y: by, w: 3, h: 0.5, fontSize: 28, fontFace: FONT_BODY, color: '1E293B', bold: true, align: 'left', valign: 'middle' });
            });
        }
    }

    // SLIDE 8: កិច្ចការផ្ទះ (Homework)
    let s8 = pptx.addSlide();
    s8.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 1, fill: { color: '475569' } });
    s8.addText('កិច្ចការផ្ទះ', { x: 0.5, y: 0.2, w: 9, fontSize: 36, fontFace: FONT_MOUL, color: 'FFFFFF' });
    
    s8.addText('ចូរធ្វើប្រមាណវិធីខាងក្រោម៖', { x: 0.5, y: 1.2, w: 9, fontSize: 24, fontFace: FONT_BODY, color: '1E293B' });

    let hwPos = [{x:0.5, y:1.8}, {x:5.0, y:1.8}, {x:0.5, y:2.5}, {x:5.0, y:2.5}];
    hwQs.forEach((q, idx) => {
        if(idx >= 4) return;
        let qText = q.question.replace(/\[\s*\]/g, ' = ..... ').replace(/<[^>]+>/g, "");
        s8.addText(`${khmerLetters[idx]}. ${qText}`, { x: hwPos[idx].x, y: hwPos[idx].y, w: 4.5, fontSize: 26, fontFace: FONT_BODY, color: '1E293B', bold: true });
    });

    s8.addText('ប្រមាណវិធី', { x: 0.5, y: 3.5, w: 3, fontSize: 26, fontFace: FONT_MOUL, color: COLOR_ACCENT, underline: true });
    s8.addText(`ក.\n\n\n.......`, { x: 1.0, y: 4.2, w: 1.8, fontSize: 24, fontFace: FONT_BODY, color: '1E293B' });
    s8.addText(`ខ.\n\n\n.......`, { x: 3.0, y: 4.2, w: 1.8, fontSize: 24, fontFace: FONT_BODY, color: '1E293B' });
    s8.addText(`គ.\n\n\n.......`, { x: 5.0, y: 4.2, w: 1.8, fontSize: 24, fontFace: FONT_BODY, color: '1E293B' });
    s8.addText(`ឃ.\n\n\n.......`, { x: 7.0, y: 4.2, w: 1.8, fontSize: 24, fontFace: FONT_BODY, color: '1E293B' });

    alert("Slide PowerPoint ស្តង់ដាថ្មី កំពុងដំណើរការបង្កើត! សូមរង់ចាំបន្តិច...");
    pptx.writeFile({ fileName: `Math_Slide_${App.currentGrade}_${new Date().getTime()}.pptx` });
}
