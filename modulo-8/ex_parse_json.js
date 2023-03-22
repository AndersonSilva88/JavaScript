const prompt = require("prompt-sync")();

const jsonStr = prompt(">> ");
const obj = JSON.parse(jsonStr);

for (const p in obj) {
    console.log("--> " + p + ": " + obj[p]);
}