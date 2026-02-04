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
// the boolean type has only two values : true and false

let nameFieldChecked = true; // yes, name field is checked
let ageFieldCheked = false; //no,age field is not checked

//Boolean values also come as a result of comparisons:
let isGreater = 4 > 1;
alert(isGreater); // true
// ===========================================================

//================== THE "NULL" VALUE (empty) ================
//the null value its mean empty not zero
let age = null;
//===========================================================

//================= THE "UNDEFINED" VALUE ===================
// the meaning of undefined is (value is not asigned)

let age1;
alert(age1); // shows "undefined"

//change the value to undefined
let age2 = 100;

age2 = undefined;
alert(age2); // undefined

//================= OBJECT AND SYMBOLS ===================
/*The object type is special.
All other types are called “primitive” because their values can
contain only a single thing (be it a string or a number or whatever). 
In contrast, objects are used to store collections of
data and more complex entities.
 */
//===========================================================

//==================== THE TYPEOF OPERATOR ===================
// the typeof operator returns the type of the operand
// its useful when we want to process values of different types
// differently or just want to do a quick check

typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "bolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object" (1)
typeof null; // "object" (2)
typeof alert; // "function" (3)
//=============================================================

//================== SUMMARY =================================
// there are 8 basic data types in JavaScript
// number = for numbers of any kind
// bigint = for integer numbers of arbitrary length.
// string = character use quotes or backticks
// boolean = true / false
// null = empty not zero
// undefined = value is no asigned
// symbol = for uniqe identifiers
// object = for more complex data structures
//============================================================


