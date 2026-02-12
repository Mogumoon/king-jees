//====================== STRING CONVERSION ==================
//String conversion happens when we need the string form of a value.
let value = true;
alert(typeof value); // Boolean

value = String(value); // now value is a string
alert(typeof value); // String
//============================================================

//==================== NUMERIC CONVERSION ====================
//Numeric conversion in mathematical functions and expressions happens automatically.
//For example, when division / is applied to non-numbers:
alert("6" / "2"); // 3, strings are converted to number

//We can use the Number(value) function to explicitly convert a value to a number:
let str = "123";
alert(typeof str); // String

let num = Number(str);
alert(typeof num); // Number

//If the string is not a valid number, the result of such a conversion is NaN. For instance:
let age = Number("an arbitrary string instead of a number");
alert (age); // NaN, conversion failed

// Numeric conversion rules:
// undefined becomes NaN
// null becomes 0
// true and false becomes 1 and 0
// string if its a "123" becomes a number
// string if its a "" becomes 0
// string if its a "hello" becomes NaN
// EXAMPLES
alert (Number("123")); // becomes a number
alert (Number("123z")); // becomes a NaN
alert (Number("true")); // becomes a 1
alert (Number("false")); // becomes a 0

//============ BOOLEAN CONVERSION =======================
// It happens in logical operations
alert(Boolean (1)); // true
alert(Boolean (0)); // false
alert(Boolean ("hello")); // true
alert(Boolean ("")); // false
//==========================================================

//=============== SUMMARY =================================
// String Conversion – Occurs when we output something. Can be performed with String(value).
// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).
