let accountNumberDisplay = document.getElementById('accountNumber');
let currentBalanceDisplay = document.getElementById('currentBalance');
let currentBalance = 10000; // Initial balance (like in your Python code)
let accountNumber = 1234444455; // Account number

accountNumberDisplay.textContent = accountNumber;
currentBalanceDisplay.textContent = currentBalance;

function debitAmount() {
    let amount = parseFloat(document.getElementById('debitAmount').value);
    if (!isNaN(amount) && amount > 0 && amount <= currentBalance) {
        currentBalance -= amount;
        currentBalanceDisplay.textContent = currentBalance;
        alert(`Rs ${amount} debited successfully.`);
        document.getElementById('debitAmount').value = ''; // Clear input
    } else if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive debit amount.');
    } else {
        alert('Insufficient balance.');
    }
}

function creditAmount() {
    let amount = parseFloat(document.getElementById('creditAmount').value);
    if (!isNaN(amount) && amount > 0) {
        currentBalance += amount;
        currentBalanceDisplay.textContent = currentBalance;
        alert(`Rs ${amount} credited successfully.`);
        document.getElementById('creditAmount').value = ''; // Clear input
    } else if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive credit amount.');
    }
}