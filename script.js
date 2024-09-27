document.addEventListener('DOMContentLoaded', () => {
    const lesson1Button = document.querySelector('h2');
    const lesson1Screen = document.getElementById('lesson1-screen');
    const typingScreen = document.getElementById('typing-screen');

    // Navigation buttons
    const backButton = document.getElementById('back-button');
    const homeButton = document.getElementById('home-button');
    const backButtonLesson1 = document.getElementById('back-button-lesson1');
    const homeButtonLesson1 = document.getElementById('home-button-lesson1');

    const levelDropdown = document.getElementById('level-dropdown');
    const languageDropdown = document.getElementById('language-dropdown');

    lesson1Button.addEventListener('click', () => {
        typingScreen.classList.remove('active');
        lesson1Screen.classList.add('active');
    });

    backButton.addEventListener('click', () => {
        typingScreen.classList.remove('active');
        // Add logic to navigate to the previous screen
    });

    homeButton.addEventListener('click', () => {
        typingScreen.classList.remove('active');
        // Add logic to navigate to the home screen
    });

    backButtonLesson1.addEventListener('click', () => {
        lesson1Screen.classList.remove('active');
        typingScreen.classList.add('active');
    });

    homeButtonLesson1.addEventListener('click', () => {
        lesson1Screen.classList.remove('active');
        // Add logic to navigate to the home screen
    });

    // Event listener for language selection
    languageDropdown.addEventListener('change', () => {
        const selectedLanguage = languageDropdown.value;
        if (selectedLanguage === 'বাংলা') {
            updateLevelOptionsForBangla();
        } else {
            resetLevelOptions();
        }
    });

    function updateLevelOptionsForBangla() {
        levelDropdown.innerHTML = `
            <option value="অ-আ">অ-আ</option>
        `;
        updateTextSample(); // Update the text sample for the newly selected level
    }

    function resetLevelOptions() {
        levelDropdown.innerHTML = `
            <option value="level1">Level 1</option>
            <option value="level2">Level 2</option>
            <option value="level3">Level 3</option>
            <option value="az">A-Z</option>
            <option value="word">Word</option>
            <option value="sentence">Sentence</option>
        `;
        updateTextSample(); // Update the text sample for the newly selected level
    }

    // Initialize the typing tool for both screens
    initializeTypingTool({
        levelDropdownId: 'level-dropdown',
        learnCheckboxId: 'learn-checkbox',
        practiceCheckboxId: 'practice-checkbox',
        userInputId: 'user-input',
        textSampleId: 'text-sample',
        resultId: 'result',
        skipButtonId: 'skip-button',
    });

    initializeTypingTool({
        levelDropdownId: 'level-dropdown-lesson1',
        learnCheckboxId: 'learn-checkbox-lesson1',
        practiceCheckboxId: 'practice-checkbox-lesson1',
        userInputId: 'user-input-lesson1',
        textSampleId: 'text-sample-lesson1',
        resultId: 'result-lesson1',
        skipButtonId: 'skip-button-lesson1',
    });
});

function initializeTypingTool({ levelDropdownId, learnCheckboxId, practiceCheckboxId, userInputId, textSampleId, resultId, skipButtonId }) {
    const textSample = document.getElementById(textSampleId);
    const userInput = document.getElementById(userInputId);
    const skipButton = document.getElementById(skipButtonId);
    const learnCheckbox = document.getElementById(learnCheckboxId);
    const practiceCheckbox = document.getElementById(practiceCheckboxId);
    const levelDropdown = document.getElementById(levelDropdownId);
    const result = document.getElementById(resultId);

    const level1Letters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const level2Letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const level3Letters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    const azLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const words = ['COMPUTER', 'PROGRAMMING', 'DEVELOPER', 'JAVA', 'PYTHON', 'JAVASCRIPT', 'HTML', 'CSS', 'DATABASE', 'ALGORITHM'];
    const sentences = [
        'The quick brown fox jumps over the lazy dog.',
        'A journey of a thousand miles begins with a single step.',
        'To be or not to be, that is the question.',
        'All that glitters is not gold.',
        'Practice makes perfect.',
    ];
    const banglaLetters = ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ'];

    let currentIndex = 0;

    function updateTextSample() {
        let letter = '';
        switch (levelDropdown.value) {
            case 'level1':
                letter = getNextLetter(level1Letters);
                break;
            case 'level2':
                letter = getNextLetter(level2Letters);
                break;
            case 'level3':
                letter = getNextLetter(level3Letters);
                break;
            case 'az':
                letter = getNextLetter(azLetters);
                break;
            case 'word':
                letter = getNextLetter(words);
                break;
            case 'sentence':
                letter = getNextLetter(sentences);
                break;
            case 'অ-আ':
                letter = getNextLetter(banglaLetters);
                break;
        }
        textSample.textContent = letter;
    }

    function getNextLetter(letters) {
        if (learnCheckbox.checked) {
            if (currentIndex >= letters.length) {
                currentIndex = 0;
            }
            return letters[currentIndex++];
        } else if (practiceCheckbox.checked) {
            return letters[Math.floor(Math.random() * letters.length)];
        }
    }

    userInput.addEventListener('input', () => {
        if (userInput.value === textSample.textContent) {
            result.textContent = 'Correct';
            result.classList.add('correct');
            result.classList.remove('incorrect');
            updateTextSample();
            userInput.value = '';
        } else {
            const incorrectLetters = getIncorrectLetters(userInput.value, textSample.textContent);
            if (incorrectLetters) {
                result.textContent = `Incorrect, Try Again (${incorrectLetters})`;
                result.classList.add('incorrect');
                result.classList.remove('correct');
                userInput.value = '';
            }
        }
    });

    skipButton.addEventListener('click', updateTextSample);

    function getIncorrectLetters(input, sample) {
        let incorrect = '';
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== sample[i]) {
                incorrect += input[i];
            }
        }
        return incorrect || null;
    }

    updateTextSample();
}
// script.js - ল্যান্ডিং পেজের জন্য

// Adding a smooth scroll effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
