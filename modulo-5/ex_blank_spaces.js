const prompt = require("prompt-sync")();

const text = prompt("--> ");
const delimitador = " ";
let newText = "";

for (let i = 0; i < text.length; i++) {
    const c = text.charAt(i);
    newText = newText + c + delimitador;
}

console.log(newText);
