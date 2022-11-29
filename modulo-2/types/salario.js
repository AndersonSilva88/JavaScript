const prompt = require("prompt-sync")();
const salario = Number(prompt("Salario atual: "));
const incremento = Number(prompt("Porcentagem de aumento: "));

const novoSalario = salario + salario * (incremento / 100);
console.log("O novo salário é: " + novoSalario);
