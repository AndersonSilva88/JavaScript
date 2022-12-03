const e = (5 + 2) * 2 < 30 / 2 || !(5 - 1 <= 8 % 3);

// 8 * 2 < 30 / 2 || !(5 - 1 <= 2)
// 16 < 15 || !(4 <= 2)
// false || !false
// false || true
// true

console.log(e);

const ex = !(2 * 4 >= 16 / 2 && 5 == 4 + 1);

// !(8 >= 8 && 5 == 5)
// !(true && true)
// !true
//  false

console.log(ex);