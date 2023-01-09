function countElement(array, elem) {
    let count = 0;
    for (i of array) {
        if (i == elem) {
            count++;
        }
    }
    return count;
}


const itens = ["A", "A", "B", "B", "B"];
console.log(countElement(itens, "A"));
console.log(countElement(itens, "B"));
console.log(countElement(itens, "C"));
