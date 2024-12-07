// Retrieve saved progress from localStorage, or set defaults if not available
let money = localStorage.getItem('money') ? parseInt(localStorage.getItem('money')) : 2000;
let crops = localStorage.getItem('crops') ? parseInt(localStorage.getItem('crops')) : 0;
let productionRate = localStorage.getItem('productionRate') ? parseInt(localStorage.getItem('productionRate')) : 1;
let landCost = localStorage.getItem('landCost') ? parseInt(localStorage.getItem('landCost')) : 10000;
let cropPrice = localStorage.getItem('cropPrice') ? parseInt(localStorage.getItem('cropPrice')) : 30;
let equipmentCost = localStorage.getItem('equipmentCost') ? parseInt(localStorage.getItem('equipmentCost')) : 3000;

// Update the game information on the page with saved values
document.getElementById('money').textContent = money;
document.getElementById('crops').textContent = crops;
document.getElementById('rate').textContent = productionRate;
document.getElementById('landCost').textContent = landCost;
document.getElementById('cropPrice').textContent = cropPrice;
document.getElementById('buyEquipment').textContent = `উন্নত সরঞ্জাম কিনুন - ${equipmentCost} টাকা`;

// Harvest crops (Increase crops based on production rate)
document.getElementById('harvest').addEventListener('click', function() {
    crops += productionRate;  // Increase crops by production rate
    document.getElementById('crops').textContent = crops;

    // Enable the sell button after harvesting crops
    document.getElementById('sell').disabled = false;

    // Save progress to localStorage
    localStorage.setItem('crops', crops);
});

// Sell crops
document.getElementById('sell').addEventListener('click', function() {
    let earnings = crops * cropPrice;
    money += earnings;
    crops = 0;
    document.getElementById('money').textContent = money;
    document.getElementById('crops').textContent = crops;
    document.getElementById('sell').disabled = true;
    showNotification("ফসল বিক্রয় করা হয়েছে! আপনি " + earnings + " টাকা উপার্জন করেছেন।");

    // Save progress to localStorage
    localStorage.setItem('money', money);
    localStorage.setItem('crops', crops);
});

// Buy land
document.getElementById('buyLand').addEventListener('click', function() {
    if (money >= landCost) {
        money -= landCost;
        productionRate += 1; // Increase production rate after buying land
        landCost += 5000; // Increase future land cost
        document.getElementById('money').textContent = money;
        document.getElementById('rate').textContent = productionRate;
        document.getElementById('landCost').textContent = landCost;
        showNotification("নতুন জমি কেনা হয়েছে! আপনার উৎপাদন হার বেড়েছে।");

        // Save progress to localStorage
        localStorage.setItem('money', money);
        localStorage.setItem('productionRate', productionRate);
        localStorage.setItem('landCost', landCost);
    } else {
        showNotification("আপনার পর্যাপ্ত টাকা নেই!", true);
    }
});

// Buy equipment
document.getElementById('buyEquipment').addEventListener('click', function() {
    if (money >= equipmentCost) {
        money -= equipmentCost;
        productionRate += 1; // Slight increase in production rate
        equipmentCost += 1000; // Increase equipment cost after each purchase
        document.getElementById('money').textContent = money;
        document.getElementById('rate').textContent = productionRate;
        document.getElementById('buyEquipment').textContent = `উন্নত সরঞ্জাম কিনুন - ${equipmentCost} টাকা`;
        showNotification("উন্নত সরঞ্জাম কেনা হয়েছে! উৎপাদন হার বৃদ্ধি পেয়েছে।");

        // Save progress to localStorage
        localStorage.setItem('money', money);
        localStorage.setItem('productionRate', productionRate);
        localStorage.setItem('equipmentCost', equipmentCost);
    } else {
        showNotification("আপনার পর্যাপ্ত টাকা নেই!", true);
    }
});

// Show Instructions Modal
document.getElementById('showInstructionsBtn').addEventListener('click', function() {
    document.getElementById('instructionsModal').style.display = "block";
});

// Close Instructions Modal
document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('instructionsModal').style.display = "none";
});

// Show Notification
function showNotification(message, isError = false) {
    let notificationElement = document.getElementById('notification');
    notificationElement.textContent = message;
    notificationElement.style.backgroundColor = isError ? "#f44336" : "#67c29e";
    notificationElement.classList.add('show');
    setTimeout(function() {
        notificationElement.classList.remove('show');
    }, 3000);
}

// Check land button
function checkLandButton() {
    document.getElementById('buyLand').disabled = false;
}

// Initially check the state of the land button
checkLandButton();

// Remove the check for the equipment button, since it's always enabled now
document.getElementById('buyEquipment').disabled = false;
