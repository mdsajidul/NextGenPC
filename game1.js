const butterfly = document.getElementById('butterfly');
let butterflyX = window.innerWidth / 2;
let butterflyY = window.innerHeight / 2;
let targetX = butterflyX;
let targetY = butterflyY;
const moveSpeed = 0.05; // The speed at which the butterfly chases the mouse
const sidebarWidth = 250; // Width of the sidebar

// Set initial butterfly position
butterfly.style.left = butterflyX + 'px';
butterfly.style.top = butterflyY + 'px';

// Function to smoothly move the butterfly towards the target (mouse position)
function animateButterfly() {
    // Calculate new position
    butterflyX += (targetX - butterflyX) * moveSpeed;
    butterflyY += (targetY - butterflyY) * moveSpeed;

    // Check if the sidebar is active and adjust boundaries
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        // Restrict butterfly's x position to prevent it from going into the sidebar
        butterflyX = Math.max(butterflyX, sidebarWidth);
    }

    butterfly.style.left = butterflyX + 'px';
    butterfly.style.top = butterflyY + 'px';

    requestAnimationFrame(animateButterfly); // Continuously call this function for smooth movement
}

// Update target position to mouse coordinates on mouse move
document.addEventListener('mousemove', function (e) {
    targetX = e.clientX - butterfly.offsetWidth / 2;
    targetY = e.clientY - butterfly.offsetHeight / 2;
});

// Start the animation
animateButterfly();

// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


