const prompt = require("prompt-sync")();

const grades = [];

let grade;
let n = 1;

do {
    grade = Number(prompt("Nota " + n + ": "));

    if (grade >= 0) {
        if (grade >= 0 && grade <= 10) {
            grades.push(grade);
            console.log(grades.toString());
            n++;
        } else {
            console.log("Nota inválida!!")
        }
    }
} while (grade >= 0);

let sum = 0;
for (grade of grades) {
    sum += grade;
}

const avg = sum / grades.length;

console.log("Média: " + avg);