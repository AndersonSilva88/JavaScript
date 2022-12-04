const prompt = require("prompt-sync")();

const age = prompt("Idade: ");
let c;

if (age >= 0 && age <= 12) {
    c = "Criança";
} else if (age >= 13 && age <= 17) {
    c = "Adolescente";
} else if (age >= 18 && age < + 65) {
    c = "Adulto";
} else if (age > 66 && age <= 110) {
    c = "Senior";
} else {
    c = "Invalido";
}

console.log("Classificação: " + c);