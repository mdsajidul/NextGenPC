const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Initial canvas size setup
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gravity = 0.5; // Default gravity value
let isGravityEnabled = true; // Gravity is enabled initially
let gravitySlider = document.getElementById('gravitySlider');
let gravityValueDisplay = document.getElementById('gravityValue');
let backgroundColor = "#BBFF00";  // Default background color

// Ball properties
const balls = [];
const floorHeight = 50;

let fps = 60; // Set the initial FPS (Frames per second)
let isPaused = false; // Pause flag

// Ball Type Selection
let selectedBallType = "normal";

// FPS tracking
let lastTime = 0;

// Flag to check if ball should follow mouse
let isFollowingMouse = false;
let followingBall = null;

// Load the drop sound
const dropSound = new Audio('drop-sound.MP3');

// Update background color
document.getElementById('bgColorPicker').addEventListener('input', (e) => {
    backgroundColor = e.target.value;
});

// Gravity control and update
gravitySlider.addEventListener('input', (e) => {
    gravity = parseFloat(e.target.value); // Update gravity based on slider value
    gravityValueDisplay.textContent = gravity.toFixed(2); // Display updated gravity value
});

// Toggle Gravity functionality
document.getElementById('toggleGravity').addEventListener('click', () => {
    isGravityEnabled = !isGravityEnabled; // Toggle gravity state
    const toggleButton = document.getElementById('toggleGravity');
    toggleButton.textContent = isGravityEnabled ? "Disable Gravity" : "Enable Gravity"; // Update button text
});

// Ball class
class Ball {
    constructor(x, y, radius, speedX, speedY, color, type) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.type = type;
        this.initialColor = color;
        this.gravity = gravity;
        this.friction = 0.98;
        this.bounce = type === "bouncy" ? 0.9 : 0.7;
        this.mass = type === "heavy" ? 2 : 1;
        this.trail = [];
        this.hasBounced = false; // Track if the ball has bounced yet

        // Each ball gets its own sound
        this.ballSound = new Audio('drop-sound.MP3');
    }

    // Update ball's position and physics
    update() {
        if (isGravityEnabled) {
            this.speedY += this.gravity * this.mass; // Apply gravity, affected by ball mass
        }

        // Ball movement if it's not following mouse
        this.x += this.speedX;
        this.y += this.speedY;

        // Ball collision with the floor
        if (this.y + this.radius > canvas.height - floorHeight) {
            this.y = canvas.height - floorHeight - this.radius;
            this.speedY *= -this.bounce;
            this.speedX *= this.friction;
            this.color = this.initialColor;  // Prevent color change after bouncing on the floor

            // Play drop sound only once per bounce
            if (!this.hasBounced) {
                this.ballSound.play();  // Play sound when the ball bounces
                this.hasBounced = true;  // Prevent multiple sounds for a single bounce
            }
        } else {
            // Reset bounce flag when ball is in the air again
            this.hasBounced = false;
        }

        // Ball collision with the walls (left and right)
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX *= -1;
            this.color = this.initialColor;  // Prevent color change on wall bounce
        }

        // Draw the ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        // Relaxing tail effect
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 10) {
            this.trail.shift();  // Shorter tail length
        }

        // Smooth fading trail
        this.trail.forEach((point, index) => {
            const opacity = 1 - (index / this.trail.length);
            const size = this.radius * (1 - index / this.trail.length);
            const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size);
            gradient.addColorStop(0, `rgba(173, 216, 230, ${opacity})`);  // Light Blue gradient
            gradient.addColorStop(1, `rgba(173, 216, 230, 0)`);  // Transparent effect
            ctx.beginPath();
            ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.closePath();
        });
    }
}

// Add a new ball when the user clicks on the canvas
canvas.addEventListener('click', (e) => {
    const radius = parseInt(document.getElementById('sizeSlider').value);
    const speedX = (Math.random() - 0.5) * 5;
    const speedY = (Math.random() - 0.5) * 5;
    const color = document.getElementById('colorPicker').value;
    const ball = new Ball(e.clientX, e.clientY, radius, speedX, speedY, color, selectedBallType);
    balls.push(ball);
});

// Ball Type Selection
document.getElementById('ballType').addEventListener('change', (e) => {
    selectedBallType = e.target.value;
});

// Pause/Resume button
document.getElementById('pauseResume').addEventListener('click', () => {
    isPaused = !isPaused;
    document.getElementById('pauseResume').textContent = isPaused ? "Resume" : "Pause";
});

// Reset all balls
document.getElementById('reset').addEventListener('click', () => {
    balls.length = 0;
});

// FPS control and animation loop
function animate() {
    if (isPaused) return;  // Skip if paused

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill background color

    balls.forEach(ball => ball.update());
}

// Animation Loop using setInterval for FPS control
setInterval(animate, 1000 / fps); // Control FPS with this interval
