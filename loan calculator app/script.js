function getInputValues() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value) / 100;
    var years = parseInt(document.getElementById('years').value);
    var interestType = document.getElementById('interestType').value;
    return { principal, rate, years, interestType };
}

function calculateSimpleInterest(principal, rate, years) {
    var simpleInterest = principal * rate * years;
    var totalSimple = principal + simpleInterest;
    return { simpleInterest, totalSimple };
}
function calculateCompoundInterest(principal, rate, years) {
    var compoundInterest = principal * Math.pow(1 + rate, years) - principal;
    var totalCompound = principal + compoundInterest;
    return { compoundInterest, totalCompound };
}

function displayResult(resultText) {
    document.getElementById('result').innerHTML = resultText;
}

function calculateLoan() {
    var { principal, rate, years, interestType } = getInputValues();
    var resultText = '';

    if (interestType === 'simple') {
        var { simpleInterest, totalSimple } = calculateSimpleInterest(principal, rate, years);
        resultText = 'Simple Interest: $' + simpleInterest.toFixed(2) + '<br>Total Amount to be Paid: $' + totalSimple.toFixed(2);
    } else if (interestType === 'compound') {
        var { compoundInterest, totalCompound } = calculateCompoundInterest(principal, rate, years);
        resultText = 'Compound Interest: $' + compoundInterest.toFixed(2) + '<br>Total Amount to be Paid: $' + totalCompound.toFixed(2);
    }

    displayResult(resultText);
}