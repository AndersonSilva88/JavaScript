//global escopo
const a = 1;

function f1() {
    // local escopo
    const b = 2;
    console.log(b);
}

function f2() {
    // local escopo
    const c = 2;
    console.log(c);
}

f1();
f2();


console.log(a);
console.log(c);