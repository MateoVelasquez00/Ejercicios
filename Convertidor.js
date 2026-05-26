const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la temperatura en Celsius: ", (grados) => {
    let fahrenheit = (Number(grados) * 9/5) + 32;
    console.log("La temperatura en Fahrenheit es: " + fahrenheit + "°F");
    rl.close();
});