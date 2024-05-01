document.getElementById("convert-btn").addEventListener("click", function() {
    convertToRoman();
});

function convertToRoman() {
    const numberInput = document.getElementById("number").value;
    const output = document.getElementById("output");

    if (numberInput === "") {
        output.textContent = "Please enter a valid number.";
        return;
    }

    let num = parseInt(numberInput);
    if (isNaN(num) || num <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    if (isNaN(num) || num >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    const romanNumerals = [
        { numeral: 'M', value: 1000 },
        { numeral: 'CM', value: 900 },
        { numeral: 'D', value: 500 },
        { numeral: 'CD', value: 400 },
        { numeral: 'C', value: 100 },
        { numeral: 'XC', value: 90 },
        { numeral: 'L', value: 50 },
        { numeral: 'XL', value: 40 },
        { numeral: 'X', value: 10 },
        { numeral: 'IX', value: 9 },
        { numeral: 'V', value: 5 },
        { numeral: 'IV', value: 4 },
        { numeral: 'I', value: 1 }
    ];

    let romanResult = "";
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            romanResult += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }

    output.textContent = `Roman numeral equivalent is: ${romanResult}`;
}