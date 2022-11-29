const prompt = require("prompt-sync")();
const peso = Number(prompt("Peso: "));
const altura = Number(prompt("Altura: "));

const imc = peso / Math.pow(altura, 2);
console.log("o IMC é: " + imc.toFixed());