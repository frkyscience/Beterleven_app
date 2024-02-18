document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('bmiCalculatorForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var height = parseFloat(document.getElementById('height').value);
        var weight = parseFloat(document.getElementById('weight').value);

        var bmi = calculateBMI(height, weight);

        var bmiResultElement = document.getElementById('bmiResult');
        bmiResultElement.innerText = "Your BMI is: " + bmi.toFixed(2);

        var bmiResultContainer = document.getElementById('bmiResultContainer');
        if (bmi < 18.5) {
            bmiResultContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            bmiResultContainer.style.borderColor = 'red';
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiResultContainer.style.backgroundColor = 'green';
            bmiResultContainer.style.borderColor = 'darkgreen';
        } else if (bmi >= 25) {
            bmiResultContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            bmiResultContainer.style.borderColor = 'red';
        } else {
            bmiResultContainer.style.backgroundColor = 'none';
            bmiResultContainer.style.border = 'none';
        }
    });

    function calculateBMI(height, weight) {
        var bmi = weight / (height * height);
        return bmi;
    }
});
