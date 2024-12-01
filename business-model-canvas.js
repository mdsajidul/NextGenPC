document.addEventListener('DOMContentLoaded', function () {
    // Load data if exists in localStorage
    loadData();

    // Handle saving form data automatically every 5 seconds
    setInterval(saveData, 5000);

    // Set default values for text areas
    function setDefaultValues() {
        document.getElementById('customer-text').value = localStorage.getItem('customer-text') || '';
        document.getElementById('value-text').value = localStorage.getItem('value-text') || '';
        document.getElementById('channels-text').value = localStorage.getItem('channels-text') || '';
        document.getElementById('customer-relations-text').value = localStorage.getItem('customer-relations-text') || '';
        document.getElementById('revenue-text').value = localStorage.getItem('revenue-text') || '';
        document.getElementById('resources-text').value = localStorage.getItem('resources-text') || '';
        document.getElementById('activities-text').value = localStorage.getItem('activities-text') || '';
        document.getElementById('partners-text').value = localStorage.getItem('partners-text') || '';
        document.getElementById('cost-text').value = localStorage.getItem('cost-text') || '';
    }

    // Save data to localStorage
    function saveData() {
        localStorage.setItem('customer-text', document.getElementById('customer-text').value);
        localStorage.setItem('value-text', document.getElementById('value-text').value);
        localStorage.setItem('channels-text', document.getElementById('channels-text').value);
        localStorage.setItem('customer-relations-text', document.getElementById('customer-relations-text').value);
        localStorage.setItem('revenue-text', document.getElementById('revenue-text').value);
        localStorage.setItem('resources-text', document.getElementById('resources-text').value);
        localStorage.setItem('activities-text', document.getElementById('activities-text').value);
        localStorage.setItem('partners-text', document.getElementById('partners-text').value);
        localStorage.setItem('cost-text', document.getElementById('cost-text').value);
    }

    // Load data from localStorage
    function loadData() {
        setDefaultValues();
    }

    // Clear all fields function
    function clearCanvas() {
        if (confirm("আপনি কি নিশ্চিত যে আপনি সব ডেটা মুছে ফেলতে চান?")) {
            localStorage.clear();
            setDefaultValues();
        }
    }

    // Event listener to clear canvas
    document.getElementById('clear-button').addEventListener('click', clearCanvas);

    // Event listener for textarea change (no border change, no error message)
    document.querySelectorAll('textarea').forEach(function (textarea) {
        textarea.addEventListener('input', function () {
            validateSection(textarea);
        });
    });

    // Real-time validation without border color or error message
    function validateSection(textarea) {
        // No visual feedback (just validation logic removed)
    }

    // Automatically validate all sections on form load
    setDefaultValues();
});
