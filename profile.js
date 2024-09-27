document.addEventListener('DOMContentLoaded', () => {
    // Load existing profile data from localStorage
    const fullName = localStorage.getItem('fullName') || '';
    const email = localStorage.getItem('email') || '';
    const phone = localStorage.getItem('phone') || '';
    const address = localStorage.getItem('address') || '';

    // Populate the form with saved data
    document.getElementById('fullName').value = fullName;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
    document.getElementById('address').value = address;

    // Handle profile form submission
    document.getElementById('profileForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting in the default way

        // Get form data
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        const currentPassword = document.getElementById('currentPassword').value.trim();

        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        errorMessage.textContent = ''; // Clear any previous error message
        successMessage.textContent = ''; // Clear any previous success message

        // Basic validation
        if (!fullName || !email || !phone || !address) {
            errorMessage.textContent = 'Please fill in all required fields.';
            return;
        }

        // Password validation
        if (newPassword && newPassword !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match!';
            return;
        }

        // Save profile data in localStorage
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('address', address);

        // Prepare data to send to the server
        const postData = new URLSearchParams({
            'Full-Name': fullName,
            'Email': email,
            'Phone-Number': phone,
            'Address': address,
        });

        // Include password in postData if it's being updated
        if (newPassword) {
            postData.append('New-Password', newPassword);
        }

        // Only send data to the server if the password field is filled
        if (currentPassword) {
            postData.append('Current-Password', currentPassword); // Include current password for verification

            fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_URL/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: postData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.result === 'success') {
                        successMessage.textContent = 'Profile updated successfully!';
                        // Optionally update password in localStorage if needed
                        if (newPassword) {
                            localStorage.setItem('password', newPassword);
                        }
                    } else {
                        errorMessage.textContent = data.message || 'Error updating profile. Please try again.';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    errorMessage.textContent = 'An error occurred, please try again later.';
                });
        } else {
            // No password change, simply show success message
            successMessage.textContent = 'Profile updated successfully!';
        }
    });

    // Handle theme selection
    document.getElementById('theme-dropdown').addEventListener('change', function () {
        const themeLink = document.getElementById('theme-link');
        themeLink.href = this.value; // Change the theme

        // Save selected theme to localStorage
        localStorage.setItem('selectedTheme', this.value);
    });

    // Apply saved theme
    const savedTheme = localStorage.getItem('selectedTheme') || 'default.css';
    document.getElementById('theme-link').href = savedTheme;
    document.getElementById('theme-dropdown').value = savedTheme;
});
