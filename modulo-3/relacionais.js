console.log(5 < 3); //false
console.log(5 > 3); //true


//////iqualdade/////
console.log(1 === "1");
console.log(1 === true);
console.log(null === undefined);


console.log(1 == "1");
console.log(1 == true);
console.log(null == undefined);

console.log(1 != "1");
console.log(1 != true);
console.log(null != undefined);

//operadores lógicos
//operador &&
console.log("FALSE && FALSE --> " + (false && false));
console.log("TRUE  && FALSE --> " + (true && false));
console.log("FALSE && TRUE  --> " + (false && true));
console.log("TRUE  && TRUE  --> " + (true && true));

//operador ou
console.log("FALSE || FALSE --> " + (false || false));
console.log("TRUE  || FALSE --> " + (true || false));
console.log("FALSE || TRUE  --> " + (false || true));
console.log("TRUE  || TRUE  --> " + (true || true));

//negação !
console.log("!FALSE --> " + (!false));
console.log("!TRUE  --> " + (!true));