const prompt = require("prompt-sync")();

const n = Number(prompt("--> "));

let i = 1;

while (i <= 10) {
    console.log(n + " X " + i + " = " + (n * i));
    i++;
}