const prompt = require("prompt-sync")();

const op1 = Number(prompt("--> "));
const o = prompt("--> ");
const op2 = Number(prompt("--> "));

let r;

switch (o) {
    case "+":
        r = op1 + op2;
        break;
    case "-":
        r = op1 - op2;
        break;
    case "*":
        r = op1 * op2;
        break;
    case "/":
        r = op1 / op2;
        break;
    default:
        r = null;
        break;
}

console.log("--> " + r);