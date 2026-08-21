const Generator = {
    generateForTopic(topicId, count) {
        let games = [];
        for(let i=0; i<count; i++) {
            let q = this.createQuestion(topicId);
            if(q) games.push(q);
        }
        return games;
    },

    randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; },
    randPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
    shuffle(arr) { return arr.sort(() => Math.random() - 0.5); },

    emojis: ['🍎', '🍌', '🍓', '🐶', '🐱', '🚗', '🎈', '⭐', '⚽', '🦋', '🌸', '🎁'],

    createQuestion(id) {
        let gradeMatch = id.match(/^g(\d+)/);
        let g = gradeMatch ? parseInt(gradeMatch[1]) : 1;
        
        // Specific overrides for Grade 1
        if (g === 1) {
            switch(id) {
                case 'g1_m_l1': return this.qSize();
                case 'g1_m_l2': return this.qPosition();
                case 'g1_m_l3': return this.qCount(1, 5);
                case 'g1_m_l4': return Math.random() > 0.5 ? this.qCount(0, 10) : this.qSequence(0, 10);
                case 'g1_m_l5': return this.qCompare(0, 10);
                case 'g1_m_l6': 
                case 'g1_m_l7': return this.qAddSub(0, 10);
                case 'g1_m_l8': return this.qWordProblem();
                case 'g1_m_l9': return this.qGeometry();
                case 'g1_m_l10': return this.qSequence(10, 20);
                case 'g1_m_l11': return this.qAddSub(0, 20);
                case 'g1_m_l12': return this.qLength();
                case 'g1_m_l13': return this.qWeight();
                case 'g1_m_l14': return this.qCapacity();
                case 'g1_m_l15': return this.qTime();
                case 'g1_m_l16': return this.qGraph();
                case 'g1_m_l17': return this.qPlaceValue();
                case 'g1_m_l18': return this.qMoney();
                case 'g1_m_l19': return this.qPattern();
            }
        }

        // Specific overrides for Grade 2
        if (g === 2) {
            switch(id) {
                case 'g2_m_l1': return this.qCount(10, 100);
                case 'g2_m_l2': return this.qCompare(10, 1000);
                case 'g2_m_l3': return this.qAddSub(10, 99);
                case 'g2_m_l4': return this.qAddSub(10, 99);
                case 'g2_m_l5': return this.qAddSub(10, 99); // Placeholder for Mul
                case 'g2_m_l6': return this.qGeometry(); // Placeholder for fractions
                case 'g2_m_l7': return this.qAddSub(10, 50); // Placeholder for Div
                case 'g2_m_l8': return this.qLength();
                case 'g2_m_l9': return this.qWeight();
                case 'g2_m_l10': return this.qCapacity();
                case 'g2_m_l11': return this.qAddSub(100, 999);
                case 'g2_m_l12': return this.qAddSub(100, 999);
                case 'g2_m_l13': return this.qMoney();
                case 'g2_m_l14': return this.qGeometry();
                case 'g2_m_l15': return this.qTime();
                case 'g2_m_l16': return this.qGraph();
                case 'g2_m_l17': return this.qPattern();
            }
        }
        // Specific overrides for Grade 3
        if (g === 3) {
            switch(id) {
                case 'g3_m_l1': return this.qPlaceValue(g);
                case 'g3_m_l2': return this.qWeight();
                case 'g3_m_l3': return this.qAddSub(100, 9999);
                case 'g3_m_l4': return this.qMoney();
                case 'g3_m_l5': return this.qLength();
                case 'g3_m_l6': return this.qAddSub(100, 9999);
                case 'g3_m_l7': return this.qCapacity();
                case 'g3_m_l8': return this.qTime();
                case 'g3_m_l9': return this.qAddSub(10, 100);
                case 'g3_m_l10': return this.qGeometry();
                case 'g3_m_l11': return this.qAddSub(10, 100);
                case 'g3_m_l12': return this.qFraction(g);
                case 'g3_m_l13': return this.qGraph();
            }
        }

        // Specific overrides for Grade 4
        if (g === 4) {
            switch(id) {
                case 'g4_m_l1': return this.qPlaceValue(g);
                case 'g4_m_l2': return this.qFraction(g);
                case 'g4_m_l3': return this.qAddSub(1000, 10000);
                case 'g4_m_l4': return this.qGeometry();
                case 'g4_m_l5': return this.qWeight();
                case 'g4_m_l6': return this.qAddSub(1000, 10000);
                case 'g4_m_l7': return this.qMoney();
                case 'g4_m_l8': return this.qAddSub(100, 1000);
                case 'g4_m_l9': return this.qAddSub(100, 1000);
                case 'g4_m_l10': return this.qTime();
                case 'g4_m_l11': return this.qLength();
                case 'g4_m_l12': return this.qPlaceValue();
                case 'g4_m_l13': return this.qAddSub(100, 1000);
                case 'g4_m_l14': return this.qAddSub(100, 1000);
                case 'g4_m_l15': return this.qGeometry();
                case 'g4_m_l16': return this.qGeometry();
                case 'g4_m_l17': return this.qGraph();
            }
        }

        // Specific overrides for Grade 5
        if (g === 5) {
            switch(id) {
                case 'g5_m_l1': return this.qPlaceValue(g);
                case 'g5_m_l2': return this.qAddSub(1000, 100000); // Mul placeholder
                case 'g5_m_l3': return this.qAddSub(1000, 10000); // Div placeholder
                case 'g5_m_l4': return this.qAddSub(100, 10000); // Parentheses placeholder
                case 'g5_m_l5': return this.qGeometry(); // Percentages placeholder
                case 'g5_m_l6': return this.qGraph();
                case 'g5_m_l7': return this.qFraction(g);
                case 'g5_m_l8': return this.qPlaceValue(g); // Decimals placeholder
                case 'g5_m_l9': return this.qAddSub(100, 1000); // Decimals Add/Sub
                case 'g5_m_l10': return this.qAddSub(10, 100); // Decimals Mul
                case 'g5_m_l11': return this.qFraction(g);
                case 'g5_m_l12': return this.qMoney();
                case 'g5_m_l13': return this.qLength();
                case 'g5_m_l14': return this.qWeight();
                case 'g5_m_l15': return this.qCapacity();
                case 'g5_m_l16': return this.qTime();
                case 'g5_m_l17': return this.qGeometry();
                case 'g5_m_l18': return this.qLength(); // Maps/Scales
            }
        }

        // Specific overrides for Grade 6
        if (g === 6) {
            switch(id) {
                case 'g6_m_l1': return this.qPlaceValue(g);
                case 'g6_m_l2': return this.qPlaceValue(g);
                case 'g6_m_l3': return this.qAddSub(100, 1000);
                case 'g6_m_l4': return this.qGeometry();
                case 'g6_m_l5': return this.qPattern();
                case 'g6_m_l6': return this.qGeometry();
                case 'g6_m_l7': return this.qGeometry();
                case 'g6_m_l8': return this.qAddSub(10, 100);
                case 'g6_m_l9': return this.qAddSub(10, 100);
                case 'g6_m_l10': return this.qFraction(g);
                case 'g6_m_l11': return this.qFraction(g);
                case 'g6_m_l12': return this.qMoney();
                case 'g6_m_l13': return this.qMoney();
                case 'g6_m_l14': return this.qTime();
                case 'g6_m_l15': return this.qGeometry();
                case 'g6_m_l16': return this.qGeometry();
                case 'g6_m_l17': return this.qMoney();
                case 'g6_m_l18': return this.qGraph();
                case 'g6_m_l19': return this.qTime();
                case 'g6_m_l20': return this.qGeometry();
            }
        }

        // Generic fallback if not matched
        switch(g) {
            case 4: return this.qAddSub(1000, 10000);
            case 5: return this.qAddSub(10000, 100000);
            case 6: return this.qAddSub(100000, 1000000);
            default: return this.qAddSub(0, 10);
        }
    },

    qCount(min, max) {
        let typeRand = Math.random();
        
        // 25% chance for Matching
        if (typeRand < 0.25) {
            let pairs = [];
            for(let i=0; i<3; i++) {
                let n = this.randInt(Math.max(1, min), max); // avoid 0 for images
                let e = this.randPick(this.emojis);
                pairs.push({ left: Array(n).fill(e).join(' '), right: n.toString() });
            }
            return { type: "matching", question: "ផ្គូផ្គងចំនួនរូបភាពទៅនឹងលេខ៖", pairs: pairs, explanation: "" };
        }
        
        let n = this.randInt(min, max);
        let e = this.randPick(this.emojis);
        let str = n === 0 ? "គ្មានអ្វីសោះ" : Array(n).fill(e).join(' ');
        
        // 35% chance for True/False
        if (typeRand >= 0.25 && typeRand < 0.6) {
            let isTrue = Math.random() > 0.5;
            let fakeN = isTrue ? n : (n + this.randInt(1, 2));
            return { type: "true_false", question: `តើមាន ${e} ចំនួន ${fakeN} មែនទេ? <br>${str}`, correctAnswer: isTrue, explanation: "" };
        } 
        // 20% Fill blank
        else if (typeRand >= 0.6 && typeRand < 0.8) {
            return { type: "fill_blank", question: `តើមាន ${e} ចំនួនប៉ុន្មាន? <br>${str}`, correctAnswer: n.toString(), explanation: "" };
        }
        // 20% Multiple Choice
        else {
            let fake1 = n + 1;
            let fake2 = Math.max(0, n - 1);
            if(fake1 === fake2 || fake2 === n) fake2 = n + 2;
            let opts = this.shuffle([n.toString(), fake1.toString(), fake2.toString()]);
            return { type: "multiple_choice", question: `រាប់ចំនួន៖ <br>${str}`, options: opts, correctAnswer: opts.indexOf(n.toString()), explanation: "" };
        }
    },

    qAddSub(min, max) {
        let typeRand = Math.random();
        let isAdd = Math.random() > 0.5;
        
        // 25% Matching
        if(typeRand < 0.25) { 
            let pairs = [];
            for(let i=0; i<3; i++) {
                let a = this.randInt(min, max);
                let b = isAdd ? this.randInt(0, max - a) : this.randInt(0, a);
                let eq = isAdd ? `${a} + ${b}` : `${a} - ${b}`;
                let ans = isAdd ? (a+b).toString() : (a-b).toString();
                pairs.push({ left: eq, right: ans });
            }
            return { type: "matching", question: "ចូរផ្គូផ្គងប្រមាណវិធីទៅនឹងចម្លើយ៖", pairs: pairs, explanation: "" };
        }
        
        let a = this.randInt(min, max);
        let b = isAdd ? this.randInt(0, max - a) : this.randInt(0, a);
        let ans = isAdd ? (a+b) : (a-b);
        let eqStr = isAdd ? `${a} + ${b}` : `${a} - ${b}`;
        
        // 25% Drag & Drop (UI only for game, fallback to fill blank for print)
        if(typeRand >= 0.25 && typeRand < 0.5) {
            let draggables = this.shuffle([ans.toString(), (ans+this.randInt(1,2)).toString(), Math.abs(ans-1).toString()]);
            return {
                type: "drag_drop",
                question: "ទាញចម្លើយទៅដាក់ក្នុងប្រអប់៖",
                sentence: `${eqStr} = [DROP]`,
                draggables: draggables,
                correctAnswer: ans.toString(),
                explanation: ""
            };
        }
        // 25% Multiple choice
        else if(typeRand >= 0.5 && typeRand < 0.75) {
            let opts = this.shuffle([ans.toString(), (ans+1).toString(), Math.abs(ans-1).toString()]);
            return { type: "multiple_choice", question: `តើ ${eqStr} ស្មើនឹងប៉ុន្មាន?`, options: opts, correctAnswer: opts.indexOf(ans.toString()), explanation: "" };
        } 
        // 25% Fill Blank
        else {
            return { type: "fill_blank", question: `${eqStr} = [  ]`, correctAnswer: ans.toString(), explanation: "" };
        }
    },

    qSequence(min, max) {
        let start = this.randInt(min, max - 3);
        let seq = [start, start+1, start+2, start+3];
        let missingIdx = this.randInt(1, 3);
        let ans = seq[missingIdx];
        seq[missingIdx] = "[  ]";
        
        if (Math.random() > 0.5) {
            let opts = this.shuffle([ans.toString(), (ans+1).toString(), (ans-1).toString()]);
            return { type: "multiple_choice", question: `តើលេខអ្វីបាត់? <br>${seq.join(', ')}`, options: opts, correctAnswer: opts.indexOf(ans.toString()), explanation: "" };
        } else {
            return { type: "fill_blank", question: `ចូរបំពេញលេខបន្តបន្ទាប់៖ ${seq.join(', ')}`, correctAnswer: ans.toString(), explanation: "" };
        }
    },

    qCompare(min, max) {
        let a = this.randInt(min, max);
        let b = this.randInt(min, max);
        if(a === b) b = a + 1; 
        
        let typeRand = Math.random();
        if (typeRand < 0.5) {
            let isGreater = Math.random() > 0.5;
            let q = isGreater ? `${a} ធំជាង ${b} មែនទេ?` : `${a} តូចជាង ${b} មែនទេ?`;
            let isTrue = isGreater ? a > b : a < b;
            return { type: "true_false", question: q, correctAnswer: isTrue, explanation: "" };
        } else {
            let c = this.randInt(min, max);
            let nums = [a, b, c];
            let maxNum = Math.max(a, b, c);
            return { type: "multiple_choice", question: "តើលេខណាធំជាងគេ?", options: nums.map(String), correctAnswer: nums.indexOf(maxNum), explanation: "" };
        }
    },

    // Remaining mappings simplified for brevity, fallback to specific formats
    qWordProblem(grade) {
        let g = parseInt(grade) || 1;
        let typeRand = Math.random();
        
        if (g === 1) {
            let a = this.randInt(2, 5);
            let b = this.randInt(1, 4);
            if (typeRand > 0.5) {
                return { type: "multiple_choice", question: `មីណាមានស្ករគ្រាប់ ${a} ម៉ាក់ឱ្យ ${b} ទៀត។ តើមានប៉ុន្មាន?`, options: [a+b, a+b+1, a+b-1].map(String), correctAnswer: 0, explanation: `${a} + ${b} = ${a+b}` };
            } else {
                let total = a + b;
                return { type: "multiple_choice", question: `សុខមានប៊ិច ${total} បាត់អស់ ${a}។ សល់ប៉ុន្មាន?`, options: [b, b+1, b+2].map(String), correctAnswer: 0, explanation: `${total} - ${a} = ${b}` };
            }
        }
        else if (g === 2) {
            let a = this.randInt(100, 500);
            let b = this.randInt(50, a - 10);
            if (typeRand > 0.5) {
                return { type: "multiple_choice", question: `កសិករម្នាក់ប្រមូលផលស្រូវបាន ${a} គីឡូក្រាម។ គាត់លក់អស់ ${b} គីឡូក្រាម។ តើគាត់នៅសល់ស្រូវប៉ុន្មានគីឡូក្រាម?`, options: [a-b, a-b+10, a-b-10].map(String), correctAnswer: 0, explanation: `${a} - ${b} = ${a-b} គ.ក` };
            } else {
                return { type: "multiple_choice", question: `សាលារៀនមួយមានសិស្សប្រុស ${a} នាក់ និងសិស្សស្រី ${b} នាក់។ តើសាលារៀននោះមានសិស្សសរុបប៉ុន្មាននាក់?`, options: [a+b, a+b+10, a+b-10].map(String), correctAnswer: 0, explanation: `${a} + ${b} = ${a+b} នាក់` };
            }
        }
        else if (g === 3) {
            let a = this.randInt(1000, 3000);
            let b = this.randInt(2, 5);
            if (typeRand > 0.5) {
                return { type: "multiple_choice", question: `ក្នុងមួយថ្ងៃ រោងចក្រផលិតទឹកបរិសុទ្ធបាន ${a} ដប។ តើក្នុងរយៈពេល ${b} ថ្ងៃ រោងចក្រនោះផលិតទឹកបានប៉ុន្មានដប?`, options: [a*b, (a*b)+100, (a*b)-100].map(String), correctAnswer: 0, explanation: `${a} x ${b} = ${a*b} ដប` };
            } else {
                let c = this.randInt(100, 800);
                return { type: "multiple_choice", question: `ពូសុខទិញស៊ីម៉ងត៍ ${a} បាវ សម្រាប់ធ្វើផ្ទះ។ គាត់ប្រើអស់ ${c} បាវ។ តើគាត់នៅសល់ស៊ីម៉ងត៍ប៉ុន្មានបាវ?`, options: [a-c, a-c+10, a-c-10].map(String), correctAnswer: 0, explanation: `${a} - ${c} = ${a-c} បាវ` };
            }
        }
        else if (g === 4) {
            let a = this.randInt(10000, 50000);
            let b = this.randInt(1000, 9000);
            if (typeRand > 0.5) {
                return { type: "multiple_choice", question: `ជាងកាត់ដេរម្នាក់មានក្រណាត់ប្រវែង ${a} សង់ទីម៉ែត្រ។ គាត់ប្រើអស់ ${b} សង់ទីម៉ែត្រដើម្បីដេរខោអាវ។ តើគាត់នៅសល់ក្រណាត់ប្រវែងប៉ុន្មាន?`, options: [a-b, a-b+100, a-b-100].map(String), correctAnswer: 0, explanation: `${a} - ${b} = ${a-b} សង់ទីម៉ែត្រ` };
            } else {
                return { type: "multiple_choice", question: `កសិដ្ឋានមួយចិញ្ចឹមមាន់ចំនួន ${a} ក្បាល និងទាចំនួន ${b} ក្បាល។ តើកសិដ្ឋាននោះមានសត្វសរុបប៉ុន្មានក្បាល?`, options: [a+b, a+b+100, a+b-100].map(String), correctAnswer: 0, explanation: `${a} + ${b} = ${a+b} ក្បាល` };
            }
        }
        else if (g === 5) {
            let price = this.randInt(4, 9) * 10000;
            let discount = this.randInt(1, 3) * 10;
            if (typeRand > 0.5) {
                let ans = (price * discount) / 100;
                return { type: "multiple_choice", question: `អាវមួយមានតម្លៃ ${price} រៀល គេបញ្ចុះតម្លៃ ${discount}%។ តើគេបញ្ចុះតម្លៃប៉ុន្មានរៀល?`, options: [ans, ans+1000, ans-1000].map(String), correctAnswer: 0, explanation: `(${price} x ${discount}) / 100 = ${ans} ៛` };
            } else {
                let l = this.randInt(2, 5);
                return { type: "multiple_choice", question: `ម៉ូតូមួយគ្រឿងប្រើសាំង ${l} លីត្រ សម្រាប់ចម្ងាយ ១០០ គីឡូម៉ែត្រ។ តើម៉ូតូនោះត្រូវចាក់សាំងប៉ុន្មានលីត្រសម្រាប់ចម្ងាយ ២០០ គីឡូម៉ែត្រ?`, options: [l*2, l*2+1, l*2-1].map(String), correctAnswer: 0, explanation: `${l} x 2 = ${l*2} លីត្រ` };
            }
        }
        else { // Grade 6
            if (typeRand > 0.5) {
                let v = this.randInt(4, 8) * 10;
                let t = this.randInt(2, 5);
                return { type: "multiple_choice", question: `រថយន្តមួយបើកបរក្នុងល្បឿន ${v} គីឡូម៉ែត្រក្នុងមួយម៉ោង។ តើរថយន្តនោះធ្វើដំណើរបានចម្ងាយប៉ុន្មាន បើប្រើពេល ${t} ម៉ោង?`, options: [v*t, v*t+10, v*t-10].map(String), correctAnswer: 0, explanation: `${v} x ${t} = ${v*t} គីឡូម៉ែត្រ` };
            } else {
                let l = this.randInt(3, 6);
                let w = this.randInt(2, 4);
                let h = this.randInt(1, 3);
                return { type: "multiple_choice", question: `អាងទឹកមួយមានរាងជាប្រអប់ចតុកោណកែង ដែលមានបណ្ដោយ ${l}ម ទទឹង ${w}ម និងជម្រៅ ${h}ម។ តើអាងនោះមានចំណុះប៉ុន្មានម៉ែត្រគូប?`, options: [l*w*h, (l*w*h)+2, (l*w*h)-2].map(String), correctAnswer: 0, explanation: `${l} x ${w} x ${h} = ${l*w*h} ម៉ែត្រគូប` };
            }
        }
    },

    toFrac(num, den) {
        return `<span style="display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; line-height: 1.2; margin: 0 4px; font-weight: 600;"><span style="border-bottom: 2px solid currentColor; padding: 0 4px;">${num}</span><span style="padding: 0 4px;">${den}</span></span>`;
    },
    qFraction(grade) {
        let g = parseInt(grade) || 3;
        let typeRand = Math.random();
        
        // For matching
        if (typeRand < 0.25) {
            let pairs = [];
            for (let i = 0; i < 3; i++) {
                let n1 = this.randInt(1, 4);
                let d = this.randInt(5, 9);
                let n2 = this.randInt(1, d - n1);
                pairs.push({ left: `${this.toFrac(n1, d)} + ${this.toFrac(n2, d)}`, right: `${this.toFrac(n1+n2, d)}` });
            }
            return { type: "matching", question: "ចូរផ្គូផ្គងផលបូកប្រភាគទៅនឹងចម្លើយ៖", pairs: pairs, explanation: "" };
        }
        
        let den = this.randInt(5, 12);
        let num1 = this.randInt(1, 4);
        let num2 = this.randInt(1, den - num1);
        let sum = num1 + num2;
        
        let eq = `${this.toFrac(num1, den)} + ${this.toFrac(num2, den)}`;
        let ansHTML = `${this.toFrac(sum, den)}`;
        
        // True/False
        if (typeRand >= 0.25 && typeRand < 0.5) {
            let isTrue = Math.random() > 0.5;
            let showAns = isTrue ? ansHTML : `${this.toFrac(sum+1, den)}`;
            return { type: "true_false", question: `តើ ${eq} ស្មើនឹង ${showAns} មែនទេ?`, correctAnswer: isTrue, explanation: `${num1} + ${num2} = ${sum}` };
        } 
        // Multiple Choice
        else if (typeRand >= 0.5 && typeRand < 0.75) {
            let opts = this.shuffle([ansHTML, `${this.toFrac(sum+1, den)}`, `${this.toFrac(sum-1, den)}`]);
            return { type: "multiple_choice", question: `គណនាប្រភាគ៖ <br>${eq} = ?`, options: opts, correctAnswer: opts.indexOf(ansHTML), explanation: `ភាគបែងដូចគ្នា យើងបូកតែភាគយក៖ ${num1} + ${num2} = ${sum}។` };
        } 
        // Fill Blank
        else {
            return { type: "fill_blank", question: `${this.toFrac(num1, den)} + ${this.toFrac(num2, den)} = ${this.toFrac("[  ]", den)}`, correctAnswer: sum.toString(), explanation: `ភាគបែង ${den} ដដែល យកភាគយកបូកចូលគ្នា។` };
        }
    },
    qPlaceValue(grade) { 
        let g = parseInt(grade) || 1;
        if (g === 1 || g === 2) {
            let n = this.randInt(10, 99);
            let tens = Math.floor(n / 10);
            let ones = n % 10;
            return { type: "multiple_choice", question: `លេខ ${n} មានលេខខ្ទង់ដប់គឺលេខប៉ុន្មាន?`, options: [tens.toString(), ones.toString(), (tens+1).toString()], correctAnswer: 0, explanation: `ខ្ទង់ដប់គឺលេខ ${tens}។` };
        } else if (g === 3) {
            let n = this.randInt(1000, 9999);
            let thousands = Math.floor(n / 1000);
            let ans = thousands * 1000;
            return { type: "multiple_choice", question: `តើតម្លៃលេខ ${thousands} នៅក្នុងចំនួន ${n} ស្មើនឹងប៉ុន្មាន?`, options: [ans.toString(), (thousands*100).toString(), thousands.toString()], correctAnswer: 0, explanation: `${thousands} នៅខ្ទង់ពាន់ មានតម្លៃ ${ans}។` };
        } else {
            let n = this.randInt(10000, 99999);
            let tenThousands = Math.floor(n / 10000);
            let ans = tenThousands * 10000;
            return { type: "multiple_choice", question: `តើតម្លៃលេខ ${tenThousands} នៅក្នុងចំនួន ${n} ស្មើនឹងប៉ុន្មាន?`, options: [ans.toString(), (tenThousands*1000).toString(), tenThousands.toString()], correctAnswer: 0, explanation: `${tenThousands} នៅខ្ទង់ម៉ឺន មានតម្លៃ ${ans}។` };
        }
    },
    qPattern() { return this.fallbackLogic(19); },
    qMoney() { return this.fallbackLogic(18); },
    qSize() { return this.fallbackLogic(1); },
    qPosition() { return this.fallbackLogic(2); },
    qGeometry() { return this.fallbackLogic(9); },
    qLength() { return this.fallbackLogic(12); },
    qWeight() { return this.fallbackLogic(13); },
    qCapacity() { return this.fallbackLogic(14); },
    qTime() { return this.fallbackLogic(15); },
    qGraph() { return this.fallbackLogic(16); },
    
    fallbackLogic(lessonNum) {
        let games = window.DATABASE["1"].find(t => t.id.includes(`_l${lessonNum}`)).games;
        return this.randPick(games);
    }
};
