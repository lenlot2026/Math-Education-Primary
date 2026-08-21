// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBA6GKSbOJCSjfWpK6TiL4T-c6R7nFnQzs",
    authDomain: "digital-math-primary-lot.firebaseapp.com",
    projectId: "digital-math-primary-lot",
    storageBucket: "digital-math-primary-lot.firebasestorage.app",
    messagingSenderId: "1015464325923",
    appId: "1:1015464325923:web:5001dee819305bec5dd296",
    measurementId: "G-P41G475JFL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Monitor Authentication State
auth.onAuthStateChanged((user) => {
    // If opening from local computer (file://) OR using secret link (?owner=1), skip login screen
    if (window.location.protocol === 'file:' || window.location.search.includes('owner=1')) {
        document.getElementById('user-name').innerText = 'ឡេន ឡូត (Owner)';
        document.getElementById('screen-login').classList.remove('active');
        document.getElementById('screen-home').classList.add('active');
        document.getElementById('main-top-bar').style.display = 'flex';
        return;
    }

    if (user) {
        // User is signed in.
        let emailName = user.email.split('@')[0];
        document.getElementById('user-name').innerText = emailName;
        document.getElementById('screen-login').classList.remove('active');
        document.getElementById('screen-home').classList.add('active');
        document.getElementById('main-top-bar').style.display = 'flex';
    } else {
        // No user is signed in.
        document.getElementById('main-top-bar').style.display = 'none';
        document.querySelectorAll('.view-section').forEach(e => e.classList.remove('active'));
        document.getElementById('screen-login').classList.add('active');
    }
});

function showError(msg) {
    const errorMsg = document.getElementById('login-error');
    errorMsg.innerText = msg;
    errorMsg.style.display = 'block';
}

function firebaseSignup() {
    const email = document.getElementById('admin-email').value.trim();
    const pwd = document.getElementById('admin-password').value;
    
    if (!email || !pwd) {
        showError('សូមបំពេញអុីមែល និងលេខសម្ងាត់របស់អ្នក!');
        return;
    }
    if (pwd.length < 6) {
        showError('លេខសម្ងាត់ត្រូវមានយ៉ាងហោចណាស់ ៦ ខ្ទង់!');
        return;
    }
    
    auth.createUserWithEmailAndPassword(email, pwd)
        .then((userCredential) => {
            // Signed in 
            document.getElementById('login-error').style.display = 'none';
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                showError('អុីមែលនេះមានអ្នកប្រើប្រាស់រួចហើយ!');
            } else if (error.code === 'auth/invalid-email') {
                showError('ទម្រង់អុីមែលមិនត្រឹមត្រូវទេ!');
            } else {
                showError('មានបញ្ហាក្នុងការចុះឈ្មោះ៖ ' + error.message);
            }
        });
}

function firebaseLogin() {
    const email = document.getElementById('admin-email').value.trim();
    const pwd = document.getElementById('admin-password').value;
    
    if (!email || !pwd) {
        showError('សូមបំពេញអុីមែល និងលេខសម្ងាត់របស់អ្នក!');
        return;
    }
    
    auth.signInWithEmailAndPassword(email, pwd)
        .then((userCredential) => {
            // Signed in
            document.getElementById('login-error').style.display = 'none';
        })
        .catch((error) => {
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                showError('អុីមែល ឬលេខសម្ងាត់មិនត្រឹមត្រូវទេ!');
            } else {
                showError('មានបញ្ហាក្នុងការចូលប្រព័ន្ធ៖ ' + error.message);
            }
        });
}

function firebaseResetPassword() {
    const email = document.getElementById('admin-email').value.trim();
    if (!email) {
        showError('សូមបំពេញអុីមែលរបស់អ្នកជាមុនសិន ដើម្បីប្តូរលេខសម្ងាត់!');
        return;
    }
    
    auth.sendPasswordResetEmail(email)
        .then(() => {
            const errorMsg = document.getElementById('login-error');
            errorMsg.innerText = 'សារប្តូរលេខសម្ងាត់ត្រូវបានផ្ញើ! សូមចូលទៅពិនិត្យមើលក្នុងអុីមែលរបស់អ្នក (រួមទាំងក្នុងប្រអប់ Spam)។';
            errorMsg.style.color = '#10B981'; // Green success color
            errorMsg.style.display = 'block';
        })
        .catch((error) => {
            document.getElementById('login-error').style.color = '#EF4444'; // Red back
            if (error.code === 'auth/user-not-found') {
                showError('រកមិនឃើញគណនីអុីមែលនេះទេ!');
            } else if (error.code === 'auth/invalid-email') {
                showError('ទម្រង់អុីមែលមិនត្រឹមត្រូវទេ!');
            } else {
                showError('មានបញ្ហា៖ ' + error.message);
            }
        });
}

// Replace standard logout
function logout() {
    if (window.location.protocol === 'file:' || window.location.search.includes('owner=1')) {
        document.getElementById('admin-email').value = '';
        document.getElementById('admin-password').value = '';
        document.getElementById('main-top-bar').style.display = 'none';
        document.querySelectorAll('.view-section').forEach(e => e.classList.remove('active'));
        document.getElementById('screen-login').classList.add('active');
        return;
    }
    auth.signOut();
}
