const prompt = require("prompt-sync")();

const n1 = Number(prompt("Valor 1: "));
const n2 = Number(prompt("Valor 2: "));
const n3 = Number(prompt("Valor 3: "));

const avg = (n1 + n2 + n3) / 3;

console.log("Média: " + avg);