window.DATABASE = {
    "1": [
        {
            id: "g1_m_l1", title: "១. ទំហំ", desc: "ការប្រៀបធៀប តូច និង ធំ", color: "#E11D48",
            games: [
                { type: "multiple_choice", question: "តើមួយណាធំជាងគេ?", options: ["ទន្សាយ 🐇", "ដំរី 🐘", "ឆ្កែ 🐕", "កណ្តុរ 🐁"], correctAnswer: 1, explanation: "ដំរីគឺជាសត្វដែលធំជាងគេ!" },
                { type: "true_false", question: "ផ្លែប៉ោម 🍎 ធំជាង ផ្លែឪឡឹក 🍉 មែនទេ?", correctAnswer: false, explanation: "ខុសហើយ! ឪឡឹកធំជាងប៉ោមឆ្ងាយណាស់។" },
                { type: "multiple_choice", question: "តើមួយណាតូចជាងគេ?", options: ["សត្វស្រមោច 🐜", "សត្វឆ្មា 🐈", "សត្វគោ 🐄"], correctAnswer: 0, explanation: "ស្រមោចតូចជាងគេ។" }
            ]
        },
        {
            id: "g1_m_l2", title: "២. ទីតាំង", desc: "លើ ក្រោម ក្នុង ក្រៅ", color: "#D97706",
            games: [
                { type: "multiple_choice", question: "តើសត្វស្លាប 🐦 ហោះនៅឯណា?", options: ["លើមេឃ", "ក្នុងទឹក", "ក្រោមដី"], correctAnswer: 0, explanation: "សត្វស្លាបហោះនៅលើមេឃ។" },
                { type: "true_false", question: "សត្វត្រី 🐟 រស់នៅលើដើមឈើមែនទេ?", correctAnswer: false, explanation: "ខុសហើយ! ត្រីរស់នៅក្នុងទឹក។" }
            ]
        },
        {
            id: "g1_m_l3", title: "៣. ចំនួន ១ ដល់ ៥", desc: "ការរាប់ និងស្គាល់លេខ ១ ដល់ ៥", color: "#059669",
            games: [
                { type: "multiple_choice", question: "ចូររាប់ផ្លែប៉ោម៖ 🍎 🍎 🍎", options: ["២", "៣", "៤", "៥"], correctAnswer: 1, explanation: "មានផ្លែប៉ោមចំនួន ៣ ផ្លែ។" },
                { type: "fill_blank", question: "ចូរបំពេញលេខ៖ ១, ២, [  ], ៤, ៥", correctAnswer: "៣", explanation: "បន្ទាប់ពីលេខ ២ គឺលេខ ៣។" },
                { type: "multiple_choice", question: "ម្រាមដៃម្ខាងរបស់យើងមានប៉ុន្មាន?", options: ["៣", "៤", "៥", "៦"], correctAnswer: 2, explanation: "ម្រាមដៃម្ខាងមាន ៥។" }
            ]
        },
        {
            id: "g1_m_l4", title: "៤. ចំនួន ០ ដល់ ១០", desc: "ការរាប់ និងស្គាល់លេខ ០ ដល់ ១០", color: "#0284C7",
            games: [
                { type: "multiple_choice", question: "តើលេខដែលនៅបន្ទាប់ពីលេខ ៩ គឺលេខប៉ុន្មាន?", options: ["៨", "១០", "៧", "១១"], correctAnswer: 1, explanation: "បន្ទាប់ពី ៩ គឺ ១០។" },
                { type: "true_false", question: "គ្មានអ្វីសោះ តំណាងដោយលេខ ០ (សូន្យ) មែនទេ?", correctAnswer: true, explanation: "ត្រូវហើយ! ០ មានន័យថាទទេ។" }
            ]
        },
        {
            id: "g1_m_l5", title: "៥. ការប្រៀបធៀបចំនួន", desc: "ធំជាង តូចជាង ស្មើ", color: "#7C3AED",
            games: [
                { type: "true_false", question: "៨ ធំជាង ៥ មែនទេ?", correctAnswer: true, explanation: "ត្រូវហើយ ៨ ច្រើនជាង ៥។" },
                { type: "multiple_choice", question: "តើលេខណាធំជាងគេ?", options: ["២", "៧", "៩", "៤"], correctAnswer: 2, explanation: "ក្នុងចំណោមនេះ ៩ ធំជាងគេ។" },
                { type: "true_false", question: "៤ តូចជាង ៣ មែនទេ?", correctAnswer: false, explanation: "ខុសហើយ ៤ ធំជាង ៣។" }
            ]
        },
        {
            id: "g1_m_l6", title: "៦. វិធីបូកនិងវិធីដក", desc: "ការបូក និងដកសាមញ្ញ", color: "#E11D48",
            games: [
                { type: "multiple_choice", question: "២ + ២ = ?", options: ["៣", "៤", "៥", "៦"], correctAnswer: 1, explanation: "២ បូក ២ ស្មើ ៤។" },
                { type: "fill_blank", question: "៥ - ២ = [  ]", correctAnswer: "៣", explanation: "៥ ដក ២ សល់ ៣។" }
            ]
        },
        {
            id: "g1_m_l7", title: "៧. វិធីបូកដកលេខ ១ខ្ទង់", desc: "ប្រមាណវិធីលេខមានមួយខ្ទង់", color: "#D97706",
            games: [
                { type: "multiple_choice", question: "៤ + ៣ = ?", options: ["៦", "៧", "៨", "៩"], correctAnswer: 1, explanation: "៤ បូក ៣ ស្មើ ៧។" },
                { type: "true_false", question: "៩ - ៦ = ៣ មែនទេ?", correctAnswer: true, explanation: "ត្រូវហើយ ៩ ដក ៦ សល់ ៣។" },
                { type: "fill_blank", question: "៨ - ៥ = [  ]", correctAnswer: "៣", explanation: "៨ ដក ៥ សល់ ៣។" }
            ]
        },
        {
            id: "g1_m_l8", title: "៨. ចំណោទ", desc: "ដោះស្រាយចំណោទសាមញ្ញ", color: "#059669",
            games: [
                { type: "multiple_choice", question: "មីណាមានស្ករគ្រាប់ ៣ ម៉ាក់ឱ្យ ២ ទៀត។ តើមានប៉ុន្មាន?", options: ["៤", "៥", "៦", "៧"], correctAnswer: 1, explanation: "៣ + ២ = ៥" },
                { type: "multiple_choice", question: "សុខមានប៊ិច ៥ បាត់អស់ ២។ សល់ប៉ុន្មាន?", options: ["២", "៣", "៤", "៥"], correctAnswer: 1, explanation: "៥ - ២ = ៣" }
            ]
        },
        {
            id: "g1_m_l9", title: "៩. ធរណីមាត្រ", desc: "រូបរាងសាមញ្ញ រង្វង់ ការ៉េ...", color: "#0284C7",
            games: [
                { type: "multiple_choice", question: "តើកង់ឡានមានរាងជាអ្វី?", options: ["រង្វង់", "ការ៉េ", "ត្រីកោណ", "ចតុកោណកែង"], correctAnswer: 0, explanation: "កង់ឡានមានរាងជារង្វង់។" },
                { type: "true_false", question: "សៀវភៅមានរាងជាចតុកោណកែង មែនទេ?", correctAnswer: true, explanation: "ត្រូវហើយ!" }
            ]
        },
        {
            id: "g1_m_l10", title: "១០. ចំនួន ១០ ដល់ ២០", desc: "ស្គាល់លេខខ្ទង់ដប់", color: "#7C3AED",
            games: [
                { type: "multiple_choice", question: "ដប់បួន សរសេរជាលេខ គឺ?", options: ["១៣", "១៤", "១៥", "១៦"], correctAnswer: 1, explanation: "ដប់បួន គឺ ១៤។" },
                { type: "true_false", question: "១៥ ធំជាង ២០ មែនទេ?", correctAnswer: false, explanation: "ខុសហើយ ១៥ តូចជាង ២០។" }
            ]
        },
        {
            id: "g1_m_l11", title: "១១. វិធីបូកដកចំនួនដល់ ២០", desc: "បូកដកលេខដល់ ២០", color: "#E11D48",
            games: [
                { type: "fill_blank", question: "១០ + ៥ = [  ]", correctAnswer: "១៥", explanation: "១០ បូក ៥ ស្មើ ១៥។" },
                { type: "multiple_choice", question: "១៨ - ៤ = ?", options: ["១២", "១៣", "១៤", "១៥"], correctAnswer: 2, explanation: "១៨ ដក ៤ សល់ ១៤។" }
            ]
        },
        {
            id: "g1_m_l12", title: "១២. ប្រវែង", desc: "វែង ខ្លី ខ្ពស់ ទាប", color: "#D97706",
            games: [
                { type: "multiple_choice", question: "តើមួយណាវែងជាងគេ?", options: ["បន្ទាត់", "ខ្មៅដៃ", "ជ័រលុប"], correctAnswer: 0, explanation: "បន្ទាត់វែងជាងខ្មៅដៃ និងជ័រលុប។" },
                { type: "true_false", question: "សត្វដំរី ខ្ពស់ជាង សត្វឆ្កែ មែនទេ?", correctAnswer: true, explanation: "ត្រូវហើយ! ដំរីខ្ពស់ជាងឆ្កែ។" }
            ]
        },
        {
            id: "g1_m_l13", title: "១៣. ទម្ងន់", desc: "ធ្ងន់ និង ស្រាល", color: "#059669",
            games: [
                { type: "multiple_choice", question: "តើមួយណាធ្ងន់ជាងគេ?", options: ["ឡាន 🚗", "កង់ 🚲", "ម៉ូតូ 🏍️"], correctAnswer: 0, explanation: "ឡានធ្ងន់ជាងគេ។" },
                { type: "true_false", question: "ដុំថ្ម ស្រាលជាង ដុំសំឡី មែនទេ?", correctAnswer: false, explanation: "ខុសហើយ! ដុំថ្មធ្ងន់ជាងសំឡី។" }
            ]
        },
        {
            id: "g1_m_l14", title: "១៤. ចំណុះ", desc: "ការផ្ទុក និងចំណុះ", color: "#0284C7",
            games: [
                { type: "true_false", question: "ពាងទឹកអាចផ្ទុកទឹកបានច្រើនជាងដបទឹក មែនទេ?", correctAnswer: true, explanation: "ត្រូវហើយ ពាងធំជាងដប។" },
                { type: "multiple_choice", question: "តើមួយណាដាក់ទឹកបានតិចជាងគេ?", options: ["កែវ", "ពាង", "ធុងធំ"], correctAnswer: 0, explanation: "កែវដាក់ទឹកបានតិចជាងគេ។" }
            ]
        },
        {
            id: "g1_m_l15", title: "១៥. ពេលវេលា", desc: "ពេលព្រឹក ថ្ងៃ យប់ និងថ្ងៃក្នុងសប្តាហ៍", color: "#7C3AED",
            games: [
                { type: "multiple_choice", question: "តើព្រះអាទិត្យរះនៅពេលណា?", options: ["ពេលយប់", "ពេលព្រឹក", "ពេលថ្ងៃត្រង់"], correctAnswer: 1, explanation: "ព្រះអាទិត្យរះនៅពេលព្រឹក។" },
                { type: "fill_blank", question: "មួយសប្តាហ៍មាន [  ] ថ្ងៃ។", correctAnswer: "៧", explanation: "មួយសប្តាហ៍មាន ៧ថ្ងៃ (ច័ន្ទ ដល់ អាទិត្យ)។" }
            ]
        },
        {
            id: "g1_m_l16", title: "១៦. ក្រាបរូបភាព", desc: "ការអានទិន្នន័យជារូបភាព", color: "#E11D48",
            games: [
                { type: "true_false", question: "បើក្នុងក្រាបមានរូប 🍎 🍎 🍎 នោះមានន័យថាមានប៉ោម ៣ ផ្លែ មែនទេ?", correctAnswer: true, explanation: "ត្រូវហើយ ១រូប តំណាង ១ផ្លែ។" }
            ]
        },
        {
            id: "g1_m_l17", title: "១៧. ខ្ទង់រាយ ខ្ទង់ដប់", desc: "តម្លៃលេខតាមខ្ទង់", color: "#D97706",
            games: [
                { type: "true_false", question: "លេខ ១៥ មាន ១ ជាខ្ទង់ដប់ និង ៥ ជាខ្ទង់រាយ មែនទេ?", correctAnswer: true, explanation: "ត្រូវហើយ!" },
                { type: "multiple_choice", question: "លេខខ្ទង់រាយនៃ ២៣ គឺលេខប៉ុន្មាន?", options: ["២", "៣", "៥"], correctAnswer: 1, explanation: "លេខខាងស្តាំគេគឺខ្ទង់រាយ គឺលេខ ៣។" }
            ]
        },
        {
            id: "g1_m_l18", title: "១៨. រូបិយវត្ថុ", desc: "ស្គាល់ប្រាក់រៀល", color: "#059669",
            games: [
                { type: "multiple_choice", question: "លុយក្រដាស ១០០៛ ចំនួនពីរដង ស្មើប៉ុន្មាន?", options: ["១០០៛", "២០០៛", "៥០០៛"], correctAnswer: 1, explanation: "១០០ + ១០០ = ២០០៛។" },
                { type: "fill_blank", question: "ទិញស្ករ ១០០៛ ឱ្យលុយ ៥០០៛ គេអាប់ [  ] ៛", correctAnswer: "៤០០", explanation: "៥០០ - ១០០ = ៤០០៛។" }
            ]
        },
        {
            id: "g1_m_l19", title: "១៩. លំនាំគំរូ", desc: "លំនាំបន្តបន្ទាប់គ្នា", color: "#0284C7",
            games: [
                { type: "multiple_choice", question: "រង្វង់, ការ៉េ, រង្វង់, ការ៉េ, ... តើបន្ទាប់គឺអ្វី?", options: ["រង្វង់", "ការ៉េ", "ត្រីកោណ"], correctAnswer: 0, explanation: "លំនាំឆ្លាស់គ្នា ដូច្នេះបន្ទាប់ពីការ៉េ គឺរង្វង់។" },
                { type: "true_false", question: "ក្រហម, ខៀវ, ក្រហម, ខៀវ, ក្រហម... ជាលំនាំគំរូមែនទេ?", correctAnswer: true, explanation: "ត្រូវហើយ! វាមានលំដាប់លំដោយ។" }
            ]
        }
    ],
    "2": [
        { id: "g2_m_l1", title: "១. ចំនួនដល់ ១០០០", desc: "ការអាន និងការសរសេរ", color: "#E11D48", games: [] },
        { id: "g2_m_l2", title: "២. ការប្រៀបធៀបចំនួន", desc: "ធំជាង តូចជាង ស្មើ", color: "#D97706", games: [] },
        { id: "g2_m_l3", title: "៣. វិធីបូកចំនួនមានលេខ ២ខ្ទង់", desc: "ការបូក", color: "#059669", games: [] },
        { id: "g2_m_l4", title: "៤. វិធីដកចំនួនមានលេខ ២ខ្ទង់", desc: "ការដក", color: "#0284C7", games: [] },
        { id: "g2_m_l5", title: "៥. វិធីគុណ", desc: "មេគុណ", color: "#7C3AED", games: [] },
        { id: "g2_m_l6", title: "៦. ប្រភាគ", desc: "ស្គាល់ប្រភាគ", color: "#E11D48", games: [] },
        { id: "g2_m_l7", title: "៧. វិធីចែក", desc: "ការចែក", color: "#D97706", games: [] },
        { id: "g2_m_l8", title: "៨. ប្រវែង", desc: "រង្វាស់ប្រវែង", color: "#059669", games: [] },
        { id: "g2_m_l9", title: "៩. ទម្ងន់", desc: "រង្វាស់ទម្ងន់", color: "#0284C7", games: [] },
        { id: "g2_m_l10", title: "១០. ចំណុះ", desc: "រង្វាស់ចំណុះ", color: "#7C3AED", games: [] },
        { id: "g2_m_l11", title: "១១. វិធីបូកចំនួនមានលេខ ៣ខ្ទង់", desc: "ការបូកបន្ត", color: "#E11D48", games: [] },
        { id: "g2_m_l12", title: "១២. វិធីដកចំនួនមានលេខ ៣ខ្ទង់នឹង ២ខ្ទង់", desc: "ការដកបន្ត", color: "#D97706", games: [] },
        { id: "g2_m_l13", title: "១៣. រូបិយវត្ថុ", desc: "ស្គាល់ប្រាក់រៀល", color: "#059669", games: [] },
        { id: "g2_m_l14", title: "១៤. ធរណីមាត្រ", desc: "រូបរាង", color: "#0284C7", games: [] },
        { id: "g2_m_l15", title: "១៥. ពេលវេលា", desc: "ម៉ោង និងថ្ងៃ", color: "#7C3AED", games: [] },
        { id: "g2_m_l16", title: "១៦. ទិន្នន័យ", desc: "ការអានទិន្នន័យ", color: "#E11D48", games: [] },
        { id: "g2_m_l17", title: "១៧. លំនាំគំរូ", desc: "លំនាំ", color: "#D97706", games: [] }
    ],
    "3": [
        { id: "g3_m_l1", title: "១. ចំនួនដល់ ១០០០០", desc: "ការអាន និងសរសេរ", color: "#E11D48", games: [] },
        { id: "g3_m_l2", title: "២. ទម្ងន់", desc: "រង្វាស់ទម្ងន់", color: "#D97706", games: [] },
        { id: "g3_m_l3", title: "៣. វិធីបូក", desc: "ការបូក", color: "#059669", games: [] },
        { id: "g3_m_l4", title: "៤. រូបិយវត្ថុ", desc: "ស្គាល់ប្រាក់រៀល", color: "#0284C7", games: [] },
        { id: "g3_m_l5", title: "៥. ប្រវែង", desc: "រង្វាស់ប្រវែង", color: "#7C3AED", games: [] },
        { id: "g3_m_l6", title: "៦. វិធីដក", desc: "ការដក", color: "#E11D48", games: [] },
        { id: "g3_m_l7", title: "៧. រង្វាស់ចំណុះ", desc: "ការវាស់ចំណុះ", color: "#D97706", games: [] },
        { id: "g3_m_l8", title: "៨. ពេលវេលា", desc: "ម៉ោង និងថ្ងៃ", color: "#059669", games: [] },
        { id: "g3_m_l9", title: "៩. វិធីគុណ", desc: "មេគុណ", color: "#0284C7", games: [] },
        { id: "g3_m_l10", title: "១០. ធរណីមាត្រ", desc: "រូបរាង", color: "#7C3AED", games: [] },
        { id: "g3_m_l11", title: "១១. វិធីចែក", desc: "ការចែក", color: "#E11D48", games: [] },
        { id: "g3_m_l12", title: "១២. ប្រភាគ", desc: "ស្គាល់ប្រភាគ", color: "#D97706", games: [] },
        { id: "g3_m_l13", title: "១៣. ក្រាបរូបភាព លំនាំគំរូ ទិន្នន័យ", desc: "ស្ថិតិ និងលំនាំ", color: "#059669", games: [] }
    ],
    "4": [
        { id: "g4_m_l1", title: "១. ចំនួន", desc: "ការអាន និងសរសេរចំនួន", color: "#E11D48", games: [] },
        { id: "g4_m_l2", title: "២. ប្រភាគ", desc: "ស្គាល់ប្រភាគ", color: "#D97706", games: [] },
        { id: "g4_m_l3", title: "៣. វិធីបូក", desc: "ការបូក", color: "#059669", games: [] },
        { id: "g4_m_l4", title: "៤. រូបធរណីមាត្រ", desc: "រូបរាង", color: "#0284C7", games: [] },
        { id: "g4_m_l5", title: "៥. ទម្ងន់", desc: "រង្វាស់ទម្ងន់", color: "#7C3AED", games: [] },
        { id: "g4_m_l6", title: "៦. វិធីដក", desc: "ការដក", color: "#E11D48", games: [] },
        { id: "g4_m_l7", title: "៧. រូបិយវត្ថុ", desc: "ស្គាល់ប្រាក់រៀល", color: "#D97706", games: [] },
        { id: "g4_m_l8", title: "៨. វិធីគុណ", desc: "មេគុណ", color: "#059669", games: [] },
        { id: "g4_m_l9", title: "៩. វិធីចែក", desc: "ការចែក", color: "#0284C7", games: [] },
        { id: "g4_m_l10", title: "១០. ពេលវេលា", desc: "ម៉ោង និងថ្ងៃ", color: "#7C3AED", games: [] },
        { id: "g4_m_l11", title: "១១. ប្រវែង", desc: "រង្វាស់ប្រវែង", color: "#E11D48", games: [] },
        { id: "g4_m_l12", title: "១២. ចំនួនទសភាគ", desc: "ស្គាល់ចំនួនទសភាគ", color: "#D97706", games: [] },
        { id: "g4_m_l13", title: "១៣. វិធីបូកចំនួនទសភាគ", desc: "បូកទសភាគ", color: "#059669", games: [] },
        { id: "g4_m_l14", title: "១៤. វិធីដកចំនួនទសភាគ", desc: "ដកទសភាគ", color: "#0284C7", games: [] },
        { id: "g4_m_l15", title: "១៥. មុំ", desc: "ប្រភេទមុំ", color: "#7C3AED", games: [] },
        { id: "g4_m_l16", title: "១៦. បន្ទាត់កែងនិងបន្ទាត់ស្រប", desc: "បន្ទាត់ធរណីមាត្រ", color: "#E11D48", games: [] },
        { id: "g4_m_l17", title: "១៧. ស្ថិតិ", desc: "ទិន្នន័យ", color: "#D97706", games: [] }
    ],
    "5": [
        { id: "g5_m_l1", title: "១. ចំនួន", desc: "ការអាន និងសរសេរចំនួន", color: "#E11D48", games: [] },
        { id: "g5_m_l2", title: "២. វិធីគុណ", desc: "ការគុណ", color: "#D97706", games: [] },
        { id: "g5_m_l3", title: "៣. វិធីចែក", desc: "ការចែក", color: "#059669", games: [] },
        { id: "g5_m_l4", title: "៤. ប្រមាណវិធីមានវង់ក្រចក", desc: "លំដាប់ប្រមាណវិធី", color: "#0284C7", games: [] },
        { id: "g5_m_l5", title: "៥. ផលធៀប និងភាគរយ", desc: "ស្គាល់ភាគរយ", color: "#7C3AED", games: [] },
        { id: "g5_m_l6", title: "៦. ស្ថិតិ", desc: "ទិន្នន័យ", color: "#E11D48", games: [] },
        { id: "g5_m_l7", title: "៧. ចំនួនចម្រុះ", desc: "ប្រភាគចម្រុះ", color: "#D97706", games: [] },
        { id: "g5_m_l8", title: "៨. ចំនួនទសភាគ", desc: "ស្គាល់ទសភាគ", color: "#059669", games: [] },
        { id: "g5_m_l9", title: "៩. វិធីបូក វិធីដកចំនួនទសភាគ", desc: "បូកដកទសភាគ", color: "#0284C7", games: [] },
        { id: "g5_m_l10", title: "១០. វិធីគុណចំនួនទសភាគ", desc: "គុណទសភាគ", color: "#7C3AED", games: [] },
        { id: "g5_m_l11", title: "១១. ប្រភាគ", desc: "ប្រភាគសាមញ្ញ", color: "#E11D48", games: [] },
        { id: "g5_m_l12", title: "១២. រូបិយវត្ថុ", desc: "ស្គាល់ប្រាក់រៀល", color: "#D97706", games: [] },
        { id: "g5_m_l13", title: "១៣. រង្វាស់ប្រវែង", desc: "រង្វាស់ប្រវែង", color: "#059669", games: [] },
        { id: "g5_m_l14", title: "១៤. រង្វាស់ទម្ងន់", desc: "រង្វាស់ទម្ងន់", color: "#0284C7", games: [] },
        { id: "g5_m_l15", title: "១៥. រង្វាស់ចំណុះ", desc: "រង្វាស់ចំណុះ", color: "#7C3AED", games: [] },
        { id: "g5_m_l16", title: "១៦. រង្វាស់ពេល", desc: "ពេលវេលា", color: "#E11D48", games: [] },
        { id: "g5_m_l17", title: "១៧. ធរណីមាត្រ", desc: "រូបរាងធរណីមាត្រ", color: "#D97706", games: [] },
        { id: "g5_m_l18", title: "១៨. ប្លង់ ផែនទី និងមាត្រដ្ឋាន", desc: "មាត្រដ្ឋាន", color: "#059669", games: [] }
    ],
    "6": [
        { id: "g6_m_l1", title: "១. ចំនួន", desc: "ការអាន និងសរសេរចំនួន", color: "#E11D48", games: [] },
        { id: "g6_m_l2", title: "២. ចំនួនទសភាគ", desc: "ស្គាល់ទសភាគ", color: "#D97706", games: [] },
        { id: "g6_m_l3", title: "៣. វិធីបូក និងវិធីដកចំនួនទសភាគ", desc: "បូកដកទសភាគ", color: "#059669", games: [] },
        { id: "g6_m_l4", title: "៤. កន្លះបន្ទាត់ពុះមុំ និងសំណង់មុំ", desc: "រង្វាស់មុំ", color: "#0284C7", games: [] },
        { id: "g6_m_l5", title: "៥. ការជំនួសលេខដោយអក្សរ", desc: "ពិជគណិត", color: "#7C3AED", games: [] },
        { id: "g6_m_l6", title: "៦. បរិមាត្រ", desc: "រង្វាស់បរិមាត្រ", color: "#E11D48", games: [] },
        { id: "g6_m_l7", title: "៧. ផ្ទៃក្រឡា", desc: "រង្វាស់ផ្ទៃក្រឡា", color: "#D97706", games: [] },
        { id: "g6_m_l8", title: "៨. វិធីគុណ និងវិធីចែកចំនួនទសភាគ", desc: "គុណចែកទសភាគ", color: "#059669", games: [] },
        { id: "g6_m_l9", title: "៩. តួចែករួមធំបំផុត-ពហុគុណរួមតូចបំផុត", desc: "PGCD និង PPCM", color: "#0284C7", games: [] },
        { id: "g6_m_l10", title: "១០. វិធីបូក និងវិធីដកប្រភាគ", desc: "បូកដកប្រភាគ", color: "#7C3AED", games: [] },
        { id: "g6_m_l11", title: "១១. វិធីគុណ និងវិធីចែកប្រភាគ", desc: "គុណចែកប្រភាគ", color: "#E11D48", games: [] },
        { id: "g6_m_l12", title: "១២. ផលធៀប", desc: "របៀបធៀប", color: "#D97706", games: [] },
        { id: "g6_m_l13", title: "១៣. សមាមាត្រ", desc: "ផលធៀបស្មើគ្នា", color: "#059669", games: [] },
        { id: "g6_m_l14", title: "១៤. ល្បឿន", desc: "ល្បឿន ចម្ងាយ ពេល", color: "#0284C7", games: [] },
        { id: "g6_m_l15", title: "១៥. ប្រមាណវិធីលើចំនួនចម្រុះ", desc: "បូកដកគុណចែកចំនួនចម្រុះ", color: "#7C3AED", games: [] },
        { id: "g6_m_l16", title: "១៦. ភាគរយ", desc: "ស្គាល់ភាគរយ", color: "#E11D48", games: [] },
        { id: "g6_m_l17", title: "១៧. ការប្រាក់", desc: "ការប្រាក់សាមញ្ញ", color: "#D97706", games: [] },
        { id: "g6_m_l18", title: "១៨. ស្ថិតិ", desc: "ទិន្នន័យ", color: "#059669", games: [] },
        { id: "g6_m_l19", title: "១៩. ប្រមាណវិធីលើរង្វាស់ពេល", desc: "បូកដកម៉ោង នាទី", color: "#0284C7", games: [] },
        { id: "g6_m_l20", title: "២០. មាឌ និងផ្ទៃក្រឡាសូលីត", desc: "រូបសូលីត", color: "#7C3AED", games: [] }
    ]
};
