const prompt = require("prompt-sync")();

const real = prompt("Valor em R$ --> ");
const cotacao = prompt("Cotação U$ --> ");

const dolar = real / cotacao;

console.log("Valor da conversão em U$ --> " + dolar);