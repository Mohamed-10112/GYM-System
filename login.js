document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin@cis.com' && password === 'admin123') {
        localStorage.setItem('userRole', 'admin');
        window.location.href = 'index.html'; 
    } else if (username === 'user@cis.com' && password === 'user123') {
        localStorage.setItem('userRole', 'user');
        window.location.href = 'index.html'; 
    } else {
        Document.getElementById('error').style.display = 'block';
    }
});

function validateEmail(email) {
    // Check if email contains both ‘@’ and ‘.’ Characters
    return email.includes('@') && email.includes('.');
}

function validateForm(email, password) {
    if (!email || !password) {
        alert('Email and password cannot be empty.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

function validateLoginForm() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (validateForm(email, password)) {
        // Form is valid; you can proceed with form submission or other logic
        alert('Login details are valid');
        // Alert('Login details are valid.');
    }
}
