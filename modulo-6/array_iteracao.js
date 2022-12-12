const itens = ["arroz", "feijão", "farinha", "azeite"];

for (let i = 0; i < itens.length; i++) {
    console.log("--> " + itens[i]);
}

console.log("");

for (const item of itens) {
    console.log("--> " + item);
}