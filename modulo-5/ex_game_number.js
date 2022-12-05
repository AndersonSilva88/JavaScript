const prompt = require("prompt-sync")();

const min = 1;
const max = 10;

const secret = Math.trunc((Math.random() * (max - min + 1) + min));

let playing = true;
let tries = 0;

while (playing) {
    const n = Number(prompt("--> "));
    tries++;

    if (n == secret) {
        playing = false;
    } else if (n < secret) {
        console.log("O número secreto é maior...");
    } else {
        console.log("O número secreto é menor...");
    }
}

console.log("O jogo acabou! o número era " + secret + ". Numero de tentativas: " + tries);