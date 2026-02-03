//====================== DATA TYPES ============================
// A value in JavaScript is always of a certain type. For example, a string or a number.
let message = "hello";
massage = 12345;
//==============================================================

//======================= DATA NUMBER ==========================
// there is 2 type data number its integer and floating
let n = 12345; // integer
n = 12.345; // floating
//=============================================================

//====================== BIGINT ================================

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
//===============================================================

//================ STRING =======================================
//A string in JavaScript must be surrounded by quotes.

let str = "hello"; // double quotes / petik 2
let str2 = "single quotes are ok to"; // single quotes / petik 1
let phrase = `can embed another ${str}`; // backticks

// contoh program
let name = "jhon";
// embed variable
alert(`hello ${name}!`); // hello jhon!
// embed expression
alert(`the result is ${1 + 2}`); // the result is 3

//contoh program kurang tepat
alert("the result is ${1 + 2}"); // the result is ${1 + 2}
//==========================================================

//====================== BOLEAN (True, False) ================

