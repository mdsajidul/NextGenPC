const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// Players
let players = [
    { x: 50, y: 50, size: 20, speed: 15, velocity: { x: 0, y: 0 }, color: '#00ff00' },
    { x: 100, y: 100, size: 20, speed: 15, velocity: { x: 0, y: 0 }, color: '#00aaff' }
];
let enemy = { x: 400, y: 300, size: 20, speed: 6 };
let gameOver = false;
let keys = {};
let lastTime = 0;
let mode = 'Friend';

const enemyStrengthSelect = document.getElementById('enemyStrength');
const modeSelect = document.getElementById('modeSelect');

// Load saved settings
const savedStrength = localStorage.getItem('enemyStrength');
if (savedStrength) {
    enemyStrengthSelect.value = savedStrength;
    enemy.speed = parseInt(savedStrength);
}

const savedMode = localStorage.getItem('gameMode');
if (savedMode) {
    modeSelect.value = savedMode;
}

function updateControls() {
    if (modeSelect.value === 'Computer') {
        players[1].size = 0; // Hide Player 2
        enemy.size = 20; // Show enemy
    } else {
        players[1].size = 20; // Show Player 2
        enemy.size = 0; // Hide enemy
    }
}

modeSelect.addEventListener('change', updateControls);
updateControls(); // Initial call

function startGame() {
    enemy.speed = parseInt(enemyStrengthSelect.value);
    localStorage.setItem('enemyStrength', enemy.speed);
    mode = modeSelect.value;
    localStorage.setItem('gameMode', mode);
    gameOver = false;
    document.getElementById('status').textContent = '';
    gameLoop(0);
}

document.getElementById('startButton').addEventListener('click', startGame);

window.addEventListener('keydown', (e) => {
    if (gameOver) return;

    if (!keys[e.key]) {
        keys[e.key] = true;

        // Player 1 controls
        if (e.key === 'ArrowUp') players[0].velocity.y = -players[0].speed;
        if (e.key === 'ArrowDown') players[0].velocity.y = players[0].speed;
        if (e.key === 'ArrowLeft') players[0].velocity.x = -players[0].speed;
        if (e.key === 'ArrowRight') players[0].velocity.x = players[0].speed;

        // Player 2 controls (Friend)
        if (mode === 'Friend') {
            if (e.key === 'w') players[1].velocity.y = -players[1].speed; // W
            if (e.key === 's') players[1].velocity.y = players[1].speed;  // S
            if (e.key === 'a') players[1].velocity.x = -players[1].speed; // A
            if (e.key === 'd') players[1].velocity.x = players[1].speed;  // D
        }
    }

    if (e.key === 'Enter') startGame();
});

window.addEventListener('keyup', (e) => {
    if (gameOver) return;

    keys[e.key] = false;

    // Player 1 controls
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') players[0].velocity.y = 0;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') players[0].velocity.x = 0;

    // Player 2 controls (Friend)
    if (mode === 'Friend') {
        if (e.key === 'w' || e.key === 's') players[1].velocity.y = 0;
        if (e.key === 'a' || e.key === 'd') players[1].velocity.x = 0;
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    players.forEach(player => {
        if (player.size > 0) { // Only draw if size is greater than 0
            ctx.fillStyle = player.color;
            ctx.beginPath();
            ctx.arc(player.x + player.size / 2, player.y + player.size / 2, player.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    if (enemy.size > 0) { // Only draw if size is greater than 0
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        ctx.arc(enemy.x + enemy.size / 2, enemy.y + enemy.size / 2, enemy.size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

function update() {
    if (gameOver) return;

    // Update player positions
    players.forEach(player => {
        player.x += player.velocity.x;
        player.y += player.velocity.y;

        player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
        player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
    });

    // Computer AI for the enemy
    if (mode === 'Computer') {
        const dx = players[0].x - enemy.x;
        const dy = players[0].y - enemy.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) {
            const directionX = (dx / dist);
            const directionY = (dy / dist);
            enemy.x += directionX * enemy.speed;
            enemy.y += directionY * enemy.speed;
        }
    }

    // Check for collisions
    players.forEach(player => {
        if (
            player.x < enemy.x + enemy.size &&
            player.x + player.size > enemy.x &&
            player.y < enemy.y + enemy.size &&
            player.y + player.size > enemy.y
        ) {
            gameOver = true;
            document.getElementById('status').textContent = 'Game Over! One of you was caught!';
            document.location.reload();
        }
    });
}

function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    draw();
    update();

    if (!gameOver) {
        requestAnimationFrame(gameLoop);
    }
}
