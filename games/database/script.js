const form = document.getElementById('student-form');
const inputName = document.getElementById('input-name');
const inputGender = document.getElementById('input-gender');
const inputDob = document.getElementById('input-dob');
const inputNote = document.getElementById('input-note');

const tableBody = document.getElementById('table-body');
const emptyState = document.getElementById('empty-state');
const btnExport = document.getElementById('btn-export');

const STORAGE_KEY = 'teacher_db_students';
let students = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function saveToLocal() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function renderTable() {
    tableBody.innerHTML = '';
    
    if (students.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        
        students.forEach((student, index) => {
            const tr = document.createElement('tr');
            
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.dob}</td>
                <td>${student.note}</td>
                <td>
                    <button class="btn-delete" onclick="deleteStudent(${index})">🗑️ លុប (Delete)</button>
                </td>
            `;
            
            tableBody.appendChild(tr);
        });
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newStudent = {
        name: inputName.value.trim(),
        gender: inputGender.value,
        dob: inputDob.value || '-',
        note: inputNote.value.trim() || '-'
    };
    
    students.push(newStudent);
    saveToLocal();
    renderTable();
    
    // Reset form
    form.reset();
    inputName.focus();
});

window.deleteStudent = function(index) {
    if (confirm('តើអ្នកពិតជាចង់លុបទិន្នន័យនេះមែនទេ?')) {
        students.splice(index, 1);
        saveToLocal();
        renderTable();
    }
};

btnExport.addEventListener('click', () => {
    if (students.length === 0) {
        alert('មិនមានទិន្នន័យសម្រាប់ទាញយកទេ!');
        return;
    }
    
    // Prepare data for Excel
    const dataForExcel = students.map((s, i) => ({
        'លេខ (ID)': i + 1,
        'ឈ្មោះ (Name)': s.name,
        'ភេទ (Gender)': s.gender,
        'ថ្ងៃខែឆ្នាំកំណើត (DOB)': s.dob,
        'ចំណាំ (Note)': s.note
    }));
    
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    
    // Convert JSON to worksheet
    const ws = XLSX.utils.json_to_sheet(dataForExcel);
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Student List");
    
    // Write and download file
    const date = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `Student_Database_${date}.xlsx`);
});

const btnTemplate = document.getElementById('btn-template');
btnTemplate.addEventListener('click', () => {
    const templateData = [
        {
            'លេខ (ID)': 1,
            'ឈ្មោះ (Name)': 'ឧ. សុខ មករា',
            'ភេទ (Gender)': 'ប្រុស',
            'ថ្ងៃខែឆ្នាំកំណើត (DOB)': '15-05-2015',
            'ចំណាំ (Note)': 'ពូកែគណិតវិទ្យា'
        },
        {
            'លេខ (ID)': 2,
            'ឈ្មោះ (Name)': 'ឧ. សុវណ្ណ នីតា',
            'ភេទ (Gender)': 'ស្រី',
            'ថ្ងៃខែឆ្នាំកំណើត (DOB)': '20-10-2015',
            'ចំណាំ (Note)': 'ពូកែអក្សរសាស្ត្រ'
        }
    ];
    
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(templateData);
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, `Student_Template.xlsx`);
});

const btnImport = document.getElementById('btn-import');

btnImport.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            
            // Get first sheet
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            
            // Convert to JSON
            const json = XLSX.utils.sheet_to_json(worksheet);
            
            if (json.length === 0) {
                alert('ឯកសារទទេ (Empty file)');
                return;
            }
            
            // Map the parsed JSON to our student object structure
            // We look for keys containing 'Name', 'Gender', etc. to be flexible
            let newStudents = json.map(row => {
                let name = row['ឈ្មោះ (Name)'] || row['ឈ្មោះ'] || row['Name'] || '';
                let gender = row['ភេទ (Gender)'] || row['ភេទ'] || row['Gender'] || '';
                let dob = row['ថ្ងៃខែឆ្នាំកំណើត (DOB)'] || row['ថ្ងៃខែឆ្នាំកំណើត'] || row['DOB'] || '-';
                let note = row['ចំណាំ (Note)'] || row['ចំណាំ'] || row['Note'] || '-';
                
                return { name, gender, dob, note };
            }).filter(s => s.name); // only keep rows that have a name
            
            if (newStudents.length > 0) {
                if (students.length > 0) {
                    if (confirm('តើអ្នកចង់បន្ថែមទិន្នន័យនេះចូលទៅក្នុងបញ្ជីចាស់ (OK) ឬជំនួសបញ្ជីចាស់ទាំងស្រុង (Cancel)?')) {
                        students = students.concat(newStudents);
                    } else {
                        students = newStudents;
                    }
                } else {
                    students = newStudents;
                }
                
                saveToLocal();
                renderTable();
                alert(`បានបញ្ចូលទិន្នន័យចំនួន ${newStudents.length} ជោគជ័យ!`);
            } else {
                alert('រកមិនឃើញទិន្នន័យត្រឹមត្រូវក្នុងឯកសារនេះទេ។');
            }
        } catch (error) {
            alert('មានបញ្ហាក្នុងការអានឯកសារ Excel នេះ។ សូមពិនិត្យមើលទម្រង់ឯកសារឡើងវិញ។');
            console.error(error);
        }
        
        // Reset file input
        btnImport.value = '';
    };
    
    reader.readAsArrayBuffer(file);
});

// Initial Render
renderTable();
