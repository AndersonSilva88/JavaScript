const n = 10;
let r;

if (n % 2 == 0) {
    r = "PAR";
} else {
    r = "IMPAR";
}
console.log(r)

//operador ternário
r = n % 2 == 0 ? "PAR" : "IMPAR";
console.log("operador ternário: " + r);
