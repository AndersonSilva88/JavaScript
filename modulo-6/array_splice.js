const mes = ["Janeiro", "Fevereiro", "Maio", "Segunda-feira", "Terça-feira"];

const diasSemana = mes.splice(3);
const emptyArray = mes.splice(2, 0, "Março", "Abril");

console.log(mes);
console.log(diasSemana);
console.log(emptyArray);