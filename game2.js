// Select game elements
const player = document.getElementById("player");
const ai = document.getElementById("ai");
const gameArea = document.getElementById("game-area");
const restartButton = document.getElementById("restart-button");
const pauseResumeButton = document.getElementById("pause-resume-button");

let playerX = 50;
let playerY = 50;
const playerSpeed = 20;  // User shape speed increased to 20

let aiX = gameArea.offsetWidth - 80;
let aiY = 50;
let aiSpeed = 1;  // AI starts at a lower speed

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
};

let gameOver = false;
let paused = false;

// Move player based on arrow keys or touch movement
function movePlayer() {
    if (gameOver || paused) return;

    if (keys.ArrowUp && playerY - playerSpeed >= 0) {
        playerY -= playerSpeed;
    }
    if (keys.ArrowDown && playerY + playerSpeed <= gameArea.offsetHeight - player.offsetHeight) {
        playerY += playerSpeed;
    }
    if (keys.ArrowLeft && playerX - playerSpeed >= 0) {
        playerX -= playerSpeed;
    }
    if (keys.ArrowRight && playerX + playerSpeed <= gameArea.offsetWidth - player.offsetWidth) {
        playerX += playerSpeed;
    }

    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
}

// Move AI towards player
function moveAI() {
    if (gameOver || paused) return;

    const dx = playerX - aiX;
    const dy = playerY - aiY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 0) {
        aiX += (dx / distance) * aiSpeed;
        aiY += (dy / distance) * aiSpeed;
    }

    ai.style.transform = `translate(${aiX}px, ${aiY}px)`;

    checkGameOver();
}

// Check if AI has caught the player
function checkGameOver() {
    if (gameOver) return;

    const playerRect = player.getBoundingClientRect();
    const aiRect = ai.getBoundingClientRect();

    if (
        playerRect.x < aiRect.x + aiRect.width &&
        playerRect.x + playerRect.width > aiRect.x &&
        playerRect.y < aiRect.y + aiRect.height &&
        playerRect.y + playerRect.height > aiRect.y
    ) {
        gameOver = true;
        restartButton.disabled = false;
        pauseResumeButton.disabled = true;
        pauseResumeButton.innerText = "Paused";
    }
}

// Reset game to initial positions
function resetGame() {
    gameOver = false;
    paused = false;
    restartButton.disabled = true;
    pauseResumeButton.disabled = false;
    pauseResumeButton.innerText = "Pause";

    playerX = 50;
    playerY = 50;
    aiX = gameArea.offsetWidth - 80;
    aiY = 50;

    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
    ai.style.transform = `translate(${aiX}px, ${aiY}px)`;
}

// Pause/Resume game function
function togglePauseResume() {
    paused = !paused;
    pauseResumeButton.innerText = paused ? "Resume" : "Pause";
}

// Update AI speed based on slider value
function updateSpeed(value) {
    const maxSpeed = playerSpeed;  // Set the maximum AI speed to player's speed
    aiSpeed = (value / 10) * maxSpeed;  // Scale AI speed between 0 to player's speed based on slider
}

// Listen for keyboard events
document.addEventListener("keydown", (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
    }
});

// Mobile touch events for controlling the player
let touchStartX = 0;
let touchStartY = 0;

gameArea.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

gameArea.addEventListener("touchmove", (e) => {
    const touchEndX = e.touches[0].clientX;
    const touchEndY = e.touches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // Move player in the direction of swipe
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Move left or right
        if (deltaX > 0 && playerX + playerSpeed <= gameArea.offsetWidth - player.offsetWidth) {
            playerX += playerSpeed;
        } else if (deltaX < 0 && playerX - playerSpeed >= 0) {
            playerX -= playerSpeed;
        }
    } else {
        // Move up or down
        if (deltaY > 0 && playerY + playerSpeed <= gameArea.offsetHeight - player.offsetHeight) {
            playerY += playerSpeed;
        } else if (deltaY < 0 && playerY - playerSpeed >= 0) {
            playerY -= playerSpeed;
        }
    }

    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
    touchStartX = touchEndX;
    touchStartY = touchEndY;
});

// Main game loop
function gameLoop() {
    movePlayer();
    moveAI();
    requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();
