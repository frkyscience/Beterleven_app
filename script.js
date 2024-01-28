document.getElementById('bmiCalculatorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    var bmi = calculateBMI(height, weight);


    document.getElementById('bmiResult').innerText = "Uw BMI is; " + bmi.toFixed(2);
});
function calculateBMI(height, weight) {

    var bmi = weight / (height * height);
    return bmi;

}