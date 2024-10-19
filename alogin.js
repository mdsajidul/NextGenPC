document.getElementById("signup-form").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values
    var contactInput = document.getElementById("contact").value;
    var nameInput = document.getElementById("name").value;

    // Check if both inputs are "mdsajidulbd"
    if (contactInput === "mdsajidulbd" && nameInput === "mdsajidulbd") {
        // Redirect to dmin.html
        window.location.href = "dmin.html";
    } 
});
