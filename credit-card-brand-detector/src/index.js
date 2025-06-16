const readline = require('readline');
const { detectCardBrand } = require('./utils/cardBrand');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your credit card number: ', (cardNumber) => {
    const brand = detectCardBrand(cardNumber);
    console.log(`The credit card brand is: ${brand}`);
    rl.close();
});