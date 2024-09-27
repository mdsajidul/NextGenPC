document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error message
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';

    // Get the form data
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation
    if (!email || !password) {
        errorMessage.textContent = 'Please fill in both email and password.';
        return;
    }

    // Send the form data to the Google Apps Script
    fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'email': email,
            'password': password
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                // Save login status and user info in localStorage
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('email', email); // Store user email if needed

                // Redirect to profile page
                window.location.href = 'profile.html';
            } else {
                // Show error message from server response
                errorMessage.textContent = data.message || 'Invalid login credentials.';
            }
        })
        .catch(error => {
            // Handle any network or other errors
            console.error('Error:', error);
            errorMessage.textContent = 'An error occurred. Please try again later.';
        });
});
