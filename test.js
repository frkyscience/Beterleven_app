var height = process.argv[2];
var weight = process.argv[3];

var bmi = calculate(height, weight)




function calculate(height, weight) {

    var bmi = weight / (height * height);
    return bmi;

}

console.log(bmi)