let button = document.getElementById("prankButton");

// Function to move the button when the mouse is over it
button.addEventListener("mouseenter", function() {
    // Get the button's width and height
    let buttonWidth = button.offsetWidth;
    let buttonHeight = button.offsetHeight;

    // Calculate the maximum x and y positions so the button doesn't go off-screen
    let maxX = window.innerWidth - buttonWidth;
    let maxY = window.innerHeight - buttonHeight;

    // Generate random x and y positions, ensuring the button stays within the screen
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // Move the button to the new position
    button.style.position = "absolute"; // To move the button freely
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});
