let height = parseFloat(process.argv[2]);
let weight = parseFloat(process.argv[3]);
let age = parseFloat(process.argv[4]);
let sex = process.argv[5].toLowerCase();

if (sex === 'men') {
    let BMRMen = 88.362 + (13.7 * weight) + (5 * height) - (6.8 * age);
    console.log(`Als man zou je ongeveer ` + BMRMen + ` moeten innemen.`);
} else if (sex === 'women') {
    let BMRWomen = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    console.log(`Als vrouw zou je ongeveer ` + BMRWomen + ` moeten innemen.`);
} else {
    console.log("Invalid input for sex. Please provide 'men' or 'women'.");
}
