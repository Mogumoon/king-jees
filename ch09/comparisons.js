//=========== COMPARISONS ========================================================
// We know many comparison operators from maths.

// In JavaScript they are written like this:

// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

//===============================================================================

//================= BOOLEAN IS THE RESULT =========================================
//All comparison operators return a boolean value:
// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison

alert( result ); // true
//================================================================================

//============= STRING COMPARISON ===========================================
// In other words, strings are compared letter-by-letter.
alert("z" > "A"); //true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true
//==========================================================================

//=============== COMPARISON OF DIFFERENT TYPES =============================
//When comparing values of different types, JavaScript converts the values to numbers.
alert("2" > 1); // true, string "2" becomes a number 2
alert("01" == 1); // true, string "01" becomes a number 1

//For boolean values, true becomes 1 and false becomes 0.
alert(true == 1); // true
alert(false == 0); // true
alert(true == 0); // false
alert(false == 1); // false

// It is possible that at the same time:

// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.
let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true!
//==============================================================================

//======================= STRICT EQUALITY =======================================
//A regular equality check == has a problem. It cannot differentiate 0 from false:
alert(0 == false); // true
// the same thing happens an empty string
alert("" == false); // true

// strict equality (===)
alert(0 === false); // false, because the types are different
//=================================================================================

//======= COMPARISON WITH NULL AND UNDEFINED ======================================
// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check (===)
alert (null === undefined); // false, because the types are different

//For a non-strict check (==)
alert( null == undefined ); // true, because equal value

// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
//====================================================================================

//====================== STRANGE RESULT: NULL VS 0 ====================================
// Let’s compare null with a zero:
alert( null > 0 );  // (1) false, converse null to 0 so its like ( 0 > 0)
alert( null == 0 ); // (2) false, not converse null to 0 
alert( null >= 0 ); // (3) true, converse null to 0 so its like (0 >= 0)

//=======================================================================================

//======================== AN INCOMPARABLE UNDEFINED ====================================
// The value undefined shouldn’t be compared to other values:
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

// We get these results because:

// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// The equality check (3) returns false because undefined only equals null, undefined, and no other value.
//=========================================================================================

//=========================== SUMMARY ======================================================
// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// The values null and undefined are equal == to themselves and each other, but do not equal any other value.
// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
//=================================================================================================

//=========================== TASKS ==============================================================
// What will be the result for these expressions?
5 > 4 // true
"apple" > "pineapple" // false, "a" is smaller than "p".
"2" > "12" //true, first char "2" is greater than the first char "1".
undefined == null // true, Values null and undefined equal each other only.
undefined === null // false, Strict equality is strict. Different types from both sides lead to false.
null == "\n0\n" // false, imilar to (4), null only equals undefined.
null === +"\n0\n" // false, Strict equality of different types.
