// Initial values (with fallback to localStorage values)
let energy = localStorage.getItem('energy') ? parseInt(localStorage.getItem('energy')) : 100;
let food = localStorage.getItem('food') ? parseInt(localStorage.getItem('food')) : 50;
let colonists = localStorage.getItem('colonists') ? parseInt(localStorage.getItem('colonists')) : 5;
let solarCost = localStorage.getItem('solarCost') ? parseInt(localStorage.getItem('solarCost')) : 200;
let foodPlantCost = localStorage.getItem('foodPlantCost') ? parseInt(localStorage.getItem('foodPlantCost')) : 150;

// Grabbing HTML elements
const energyElement = document.getElementById('energy');
const foodElement = document.getElementById('food');
const colonistsElement = document.getElementById('colonists');
const solarCostElement = document.getElementById('solarCost');
const foodPlantCostElement = document.getElementById('foodPlantCost');

// Function to show notifications
function showNotification(message, isError = false) {
    const notificationElement = document.getElementById('notification');
    notificationElement.textContent = message;
    notificationElement.style.backgroundColor = isError ? "#f44336" : "#4caf50"; // Red for errors, green for success
    notificationElement.classList.add('show');
    setTimeout(() => {
        notificationElement.classList.remove('show');
    }, 3000); // Notification disappears after 3 seconds
}

// Function to update localStorage
function updateLocalStorage() {
    localStorage.setItem('energy', energy);
    localStorage.setItem('food', food);
    localStorage.setItem('colonists', colonists);
    localStorage.setItem('solarCost', solarCost);
    localStorage.setItem('foodPlantCost', foodPlantCost);
}

// Generate energy
document.getElementById('generateEnergy').addEventListener('click', function () {
    if (energy <= 0) {
        showNotification("আপনার শক্তি পর্যাপ্ত নেই!", true);
    } else {
        energy += 10;
        energyElement.textContent = energy;
        updateLocalStorage();
    }
});

// Generate food
document.getElementById('generateFood').addEventListener('click', function () {
    food += 5;
    foodElement.textContent = food;
    updateLocalStorage();
});

// Add a colonist
document.getElementById('addColonist').addEventListener('click', function () {
    if (food >= 10) {
        colonists += 1;
        food -= 10;
        colonistsElement.textContent = colonists;
        foodElement.textContent = food;
        updateLocalStorage();
    } else {
        showNotification("আপনার কাছে পর্যাপ্ত খাদ্য নেই নতুন কলোনিস্ট যোগ করার জন্য!", true);
    }
});

// Build solar panel
document.getElementById('buildSolarPanel').addEventListener('click', function () {
    if (energy >= solarCost) {
        energy -= solarCost;
        solarCost += 50;
        solarCostElement.textContent = solarCost;
        energyElement.textContent = energy;
        updateLocalStorage();
    } else {
        showNotification("আপনার শক্তি পর্যাপ্ত নেই সোলার প্যানেল তৈরি করতে!", true);
    }
});

// Build food plant
document.getElementById('buildFoodPlant').addEventListener('click', function () {
    if (energy >= foodPlantCost) {
        energy -= foodPlantCost;
        foodPlantCost += 50;
        foodPlantCostElement.textContent = foodPlantCost;
        energyElement.textContent = energy;
        updateLocalStorage();
    } else {
        showNotification("আপনার শক্তি পর্যাপ্ত নেই খাদ্য প্লান্ট তৈরি করতে!", true);
    }
});

// Game rules modal functionality
document.getElementById('showRulesBtn').addEventListener('click', function () {
    document.getElementById('rulesModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
    document.getElementById('rulesModal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    const modal = document.getElementById('rulesModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize the UI with values from localStorage
energyElement.textContent = energy;
foodElement.textContent = food;
colonistsElement.textContent = colonists;
solarCostElement.textContent = solarCost;
foodPlantCostElement.textContent = foodPlantCost;
