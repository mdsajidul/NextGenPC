// Function to convert Bengali numbers to English numbers
function convertBengaliToEnglish(input) {
    const bengaliToEnglishMap = {
        '০': '0',
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9'
    };

    // Convert each character in the input string
    return input.split('').map(char => bengaliToEnglishMap[char] || char).join('');
}

// EMI Calculation function
function calculateEMI(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values and convert Bengali to English
    const loanAmountInput = document.getElementById('loan-amount').value;
    const interestRateInput = document.getElementById('interest-rate').value;
    const loanTermInput = document.getElementById('loan-term').value;

    // Convert input to English numerals
    const loanAmount = parseFloat(convertBengaliToEnglish(loanAmountInput));
    const interestRate = parseFloat(convertBengaliToEnglish(interestRateInput)) / 100 / 12;
    const loanTerm = parseFloat(convertBengaliToEnglish(loanTermInput)) * 12;

    // EMI formula calculation
    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
    const totalPayment = emi * loanTerm;
    const totalInterest = totalPayment - loanAmount;

    // Display the results
    document.getElementById('emi-amount').textContent = `আপনার EMI: ৳ ${emi.toFixed(2)}`;
    document.getElementById('total-payment').textContent = `মোট পরিশোধ: ৳ ${totalPayment.toFixed(2)}`;
    document.getElementById('total-interest').textContent = `মোট সুদ: ৳ ${totalInterest.toFixed(2)}`;
    document.getElementById('result').classList.remove('hidden'); // Show result
}

// Event listener for the form submission
document.getElementById('emi-form').addEventListener('submit', calculateEMI);
