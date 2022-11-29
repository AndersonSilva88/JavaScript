const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Digite a nota 1: "));
const nota2 = Number(prompt("Digite a nota 2: "));
const nota3 = Number(prompt("Digite a nota 3: "));

const media = (nota1 + nota2 + nota3) / 3;

console.log("Media: " + media.toFixed());