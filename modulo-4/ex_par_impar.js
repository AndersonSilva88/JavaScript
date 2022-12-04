const prompt = require("prompt-sync")();

const n = prompt("Número: ");
let resultado;

if (n % 2 == 0) {
    resultado = "PAR";
} else {
    resultado = "IMPAR";
}

console.log("O número é --> " + resultado);