document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const contact = document.getElementById('contact').value;
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validate password and confirm password
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Create FormData object
        const formData = new FormData(signupForm);

        fetch(signupForm.action, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                if (data.result === "success") {
                    alert("Sign Up successful!");
                    window.location.href = "file:///C:/Users/Pedp4WPBX5105GRF0522/Desktop/NextGenPC/Home/index.html";// Redirect to `index.html`
                } else {
                    alert("Sign Up failed: " + (data.message || "Unknown error"));
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred. Please try again later."); // Correct error message
            });
    });
});
