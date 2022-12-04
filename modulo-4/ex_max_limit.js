const prompt = require("prompt-sync")();

const v = prompt("Valor: ");

const max = 10;

if (v > max) {
    v = max;
}


const m = v * v; //Math.pow(v, 2); // v ** 2;
console.log("--> " + m);