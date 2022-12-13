const fruits = ["Laranja", "Banana", "Figo", "Abacate"];
const sliceFruits = fruits.slice(1, 3);
const newFruits = fruits.concat("Melancia");
newFruits.reverse().sort();

console.log(fruits);
console.log(newFruits);
console.log(newFruits.join("||"));
console.log(sliceFruits);
console.log(fruits.indexOf("Figo"));