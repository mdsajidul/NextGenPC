// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Add event listener for the download button
    document.getElementById("download-button").addEventListener("click", function () {

        // Create an instance of jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Capture the contents of the canvas using html2canvas
        html2canvas(document.querySelector(".canvas")).then(function (canvas) {
            // Convert canvas to image data URL
            const imgData = canvas.toDataURL("image/png");

            // Add the image to the PDF (parameters: image, format, x, y, width, height)
            doc.addImage(imgData, 'PNG', 10, 10, 190, 250);

            // Save the PDF as a file
            doc.save("business-model-canvas.pdf");

        }).catch(function (error) {
            console.error("Error generating PDF:", error);
        });
    });
});
