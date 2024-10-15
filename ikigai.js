// Screen 1: Handle form submission and move to Screen 2
document.getElementById('ikigai-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the values from the input fields
    const passion1 = document.querySelectorAll('input')[0].value;
    const passion2 = document.querySelectorAll('input')[1].value;
    const passion3 = document.querySelectorAll('input')[2].value;
    const passion4 = document.querySelectorAll('input')[3].value;

    // Set the values on Screen 2 buttons
    document.getElementById('passion2-1').textContent = passion1;
    document.getElementById('passion2-2').textContent = passion2;
    document.getElementById('passion2-3').textContent = passion3;
    document.getElementById('passion2-4').textContent = passion4;

    // Hide Screen 1 and show Screen 2
    document.getElementById('screen1').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
});

// Screen 2: Handle button clicks and move to Screen 3
document.querySelectorAll('#screen2 .passion-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Hide the clicked button
        this.classList.add('hidden');

        // Set the selected button's text on Screen 3 buttons
        const buttonText = this.textContent;
        const availableButtons = document.querySelectorAll('#screen3 .passion-btn');
        for (let i = 0; i < availableButtons.length; i++) {
            if (!availableButtons[i].textContent) {
                availableButtons[i].textContent = buttonText;
                availableButtons[i].classList.remove('hidden');
                break;
            }
        }
    });
});

// Submit button on Screen 2
document.getElementById('submit-btn').addEventListener('click', function () {
    // Hide Screen 2 and show Screen 3
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');
});

// Back button on Screen 2
document.getElementById('back-btn').addEventListener('click', function () {
    // Hide Screen 2 and show Screen 1
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen1').classList.remove('hidden');
});

// Screen 3: Handle button clicks and move to Screen 4
document.querySelectorAll('#screen3 .passion-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Hide the clicked button
        this.classList.add('hidden');

        // Set the selected button's text on Screen 4 buttons
        const buttonText = this.textContent;
        const availableButtons = document.querySelectorAll('#screen4 .btn');
        for (let i = 0; i < availableButtons.length; i++) {
            if (!availableButtons[i].textContent) {
                availableButtons[i].textContent = buttonText;
                availableButtons[i].classList.remove('hidden');
                break;
            }
        }
    });
});

// Final submit button on Screen 3
document.getElementById('final-submit-btn').addEventListener('click', function () {
    // Hide Screen 3 and show Screen 4
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen4').classList.remove('hidden');
});

// Back button on Screen 3
document.getElementById('back2-btn').addEventListener('click', function () {
    // Hide Screen 3 and show Screen 2
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
});

// Screen 4: Handle button clicks and move to Screen 5
document.querySelectorAll('#screen4 .btn').forEach(button => {
    button.addEventListener('click', function () {
        // Hide the clicked button
        this.classList.add('hidden');

        // Set the selected button's text on Screen 5
        const buttonText = this.textContent;
        document.getElementById('life-goal').textContent = buttonText;

        // Hide Screen 4 and show Screen 5
        document.getElementById('screen4').classList.add('hidden');
        document.getElementById('screen5').classList.remove('hidden');
    });
});

// Back button on Screen 4
document.getElementById('back3-btn').addEventListener('click', function () {
    // Hide Screen 4 and show Screen 3
    document.getElementById('screen4').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');
});

// Back button on Screen 5 (Return to Screen 1)
document.getElementById('reset-btn').addEventListener('click', function () {
    // Hide Screen 5 and reset the app
    resetApp();
});

// Reset function to clear all screens and inputs
function resetApp() {
    // Hide all screens
    document.querySelectorAll('.container > div').forEach(screen => {
        screen.classList.add('hidden');
    });

    // Reset input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });

    // Reset button texts
    document.querySelectorAll('.passion-btn, #screen4 .btn').forEach(button => {
        button.textContent = '';
        button.classList.remove('hidden');
    });

    // Show Screen 1
    document.getElementById('screen1').classList.remove('hidden');
}
