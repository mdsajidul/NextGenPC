const colors = {
    'a': '#ff6347',  // Tomato Red
    'b': '#0000ff',  // Blue
    'c': '#00bfff',  // Deep Sky Blue
    'd': '#ff1493',  // Deep Pink
    'e': '#32cd32',  // Lime Green
    'f': '#ff4500',  // Orange Red
    'g': '#008000',  // Green
    'h': '#f0e68c',  // Khaki
    'i': '#ff69b4',  // Hot Pink
    'j': '#8a2be2',  // Blue Violet
    'k': '#7fff00',  // Chartreuse
    'l': '#ff6347',  // Tomato Red
    'm': '#ff00ff',  // Magenta
    'n': '#ff7f50',  // Coral
    'o': '#ff7f50',  // Orange
    'p': '#800080',  // Purple
    'q': '#00bfff',  // Deep Sky Blue
    'r': '#ff0000',  // Red
    's': '#ff6347',  // Tomato Red
    't': '#d2691e',  // Chocolate
    'u': '#20b2aa',  // Light Sea Green
    'v': '#800000',  // Maroon
    'w': '#9932cc',  // Dark Orchid
    'x': '#8b4513',  // Saddle Brown
    'y': '#f1c40f',  // Yellow
    'z': '#00008b',  // Dark Blue
};

// Function to scramble the content inside the textarea using the Fisher-Yates shuffle
function scrambleText(text) {
    const chars = text.split(''); // Split text into individual characters

    // Fisher-Yates shuffle to scramble the characters
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate random index
        [chars[i], chars[j]] = [chars[j], chars[i]]; // Swap characters
    }

    return chars.join(''); // Join the scrambled characters back into a string
}

// Get the input field element
const inputField = document.getElementById("inputField");

// Event listener for input field to scramble the text while typing and change background color
inputField.addEventListener("input", function() {
    const typedText = inputField.value; // Get the text typed by the user

    // Ensure we scramble only the text typed so far (no random characters)
    const scrambledText = scrambleText(typedText); // Scramble the text
    inputField.value = scrambledText; // Update the textarea with the scrambled text

    // Change background color based on the last typed letter
    const lastLetter = typedText[typedText.length - 1]?.toLowerCase();
    if (colors[lastLetter]) {
        document.body.style.backgroundColor = colors[lastLetter]; // Update the background color
    }
});
