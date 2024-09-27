const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const timerCount = document.getElementById('timer-count');
const timerBar = document.getElementById('timer-bar');
const scoreDisplay = document.getElementById('score');
const totalQuestionsDisplay = document.getElementById('total-questions');

const questions = [
    {
        question: 'অ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+F', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+shift+D', correct: false }
        ]
    },
    {
        question: 'আ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'G+F', correct: true },
            { text: 'G+D', correct: false },
            { text: 'G+shift+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ই কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'G+D', correct: true },
            { text: 'G+S', correct: false },
            { text: 'G+shift+D', correct: false },
            { text: 'G+shift+S', correct: false }
        ]
    },
    {
        question: 'ঈ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'G+shift+D', correct: true },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false },
            { text: 'G+shift+S', correct: false }
        ]
    },
    {
        question: 'উ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'G+S', correct: true },
            { text: 'G+shift+S', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ঊ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'G+shift+S', correct: true },
            { text: 'G+S', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ঋ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'G+A', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+shift+D', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ঐ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'G+shift+C', correct: true },
            { text: 'G+D', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ও কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'X', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ঔ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'G+Shift+X', correct: true },
            { text: 'X', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ক কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'J', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'খ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+J', correct: true },
            { text: 'J', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'গ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'O', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ঘ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+O', correct: true },
            { text: 'O', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ঙ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Q', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'চ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Y', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ছ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+Y', correct: true },
            { text: 'Y', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'জ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'U', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ঝ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+U', correct: true },
            { text: 'U', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ঞ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+I', correct: true },
            { text: 'I', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ট কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'T', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ঠ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+T', correct: true },
            { text: 'T', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ড কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'E', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ঢ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+E', correct: true },
            { text: 'E', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ণ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+B', correct: true },
            { text: 'B', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ত কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'K', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'থ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+K', correct: true },
            { text: 'K', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'দ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'L', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ধ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+L', correct: true },
            { text: 'L', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ন কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'B', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'প কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'R', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ফ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+R', correct: true },
            { text: 'R', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ব কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'H', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ভ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+H', correct: true },
            { text: 'H', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ম কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'M', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'য কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'W', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'র কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'V', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ল কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+V', correct: true },
            { text: 'V', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'শ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+M', correct: true },
            { text: 'M', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ষ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+N', correct: true },
            { text: 'N', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'স কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'N', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'হ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'I', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ড় কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'P', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ঢ় কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+P', correct: true },
            { text: 'P', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'য় কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+W', correct: true },
            { text: 'W', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ৎ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Bottom', correct: true },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false },
            { text: 'G+S', correct: false }
        ]
    },
    {
        question: 'ং কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+Q', correct: true },
            { text: 'Q', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ঃ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+ঃ Bottom', correct: true },
            { text: 'ঃ', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    },
    {
        question: 'ঁ কোন কী-বোর্ড শর্টকাট কী?',
        answers: [
            { text: 'Shift+ 7', correct: true },
            { text: '7', correct: false },
            { text: 'G+F', correct: false },
            { text: 'G+D', correct: false }
        ]
    }
];


let currentQuestionIndex = 0;
let timer;
let timeLeft = 20;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsDisplay.innerText = questions.length;
    scoreDisplay.innerText = score.toFixed(2);
    nextButton.classList.add('hide');
    startTimer();
    showQuestion(questions[currentQuestionIndex]);
}

function startTimer() {
    timeLeft = 20;
    timerCount.innerText = timeLeft;
    timerBar.style.width = '100%';

    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        timeLeft--;
        timerCount.innerText = timeLeft;
        timerBar.style.width = `${(timeLeft / 20) * 100}%`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function showQuestion(question) {
    questionText.innerText = question.question;
    answerButtons.innerHTML = '';
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(answer, button));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer, button) {
    const allButtons = Array.from(answerButtons.children);

    // Prevent multiple clicks
    allButtons.forEach(btn => {
        btn.removeEventListener('click', () => selectAnswer(answer, button));
        btn.disabled = true;
    });

    if (answer.correct) {
        button.classList.add('correct');
        score += 1;
    } else {
        button.classList.add('incorrect');
        allButtons.forEach(btn => {
            if (btn.innerText === getCorrectAnswerText()) {
                btn.classList.add('correct');
            }
        });
        score -= 0.25;
    }

    scoreDisplay.innerText = score.toFixed(2);
    clearInterval(timer);
    nextButton.classList.remove('hide');
}

function getCorrectAnswerText() {
    return questions[currentQuestionIndex].answers.find(a => a.correct).text;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
        startTimer();
    } else {
        alert('Quiz completed! Your score is ' + score.toFixed(2));
        startGame();
    }
}

startGame();
