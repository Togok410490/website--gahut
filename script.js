let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById("screen").value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return; // Jika tidak ada input
    if (previousInput !== '') {
        calculateResult(); // Jika sudah ada operator sebelumnya, langsung hitung
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (previousInput === '' || currentInput === '') return; // Jika tidak ada input sebelumnya atau sekarang
    let result;
    switch(operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    
    // Periksa apakah hasilnya adalah 30
    if (result === 30) {
        document.getElementById("screen").value = "I LOVE YOU ♥️"; // Ganti dengan pesan "I LOVE YOU"
    } else {
        document.getElementById("screen").value = result; // Tampilkan hasil perhitungan
    }

    // Reset nilai
    currentInput = '';
    previousInput = '';
    operator = '';
}

function clearScreen() {
    currentInput = '';
    operator = '';
    previousInput = '';
    document.getElementById("screen").value = '';
}