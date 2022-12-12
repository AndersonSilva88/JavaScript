const temperaturas = [12.0, 22.0, 25.5, 9.9, 14.4, 18.6];

let min = null;
let max = null;
let avg = 0;

for (const temp of temperaturas) {
    if (temp < min || min == null) {
        min = temp;
    }

    if (temp > max || max == null) {
        max = temp;
    }

    avg += temp;
}

avg /= temperaturas.length;

console.log("Min: " + min);
console.log("Max: " + max);
console.log("Média: " + avg);