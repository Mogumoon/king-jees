//====================== Logical operators ==========================
//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
// Here we cover the first three, the ?? operator is in the next article.

//===================================================================

//======================= || (OR) ===================================
// The “OR” operator is represented with two vertical line symbols:
result = a || b;
// In classical programming, the logical OR is meant to manipulate boolean values only.
// If any of its arguments are true, it returns true, otherwise it returns false.

//There are four possible logical combinations:
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

//For instance, the number 1 is treated as true, the number 0 as false:
if (1 || 0) {
  // works just like if ( true || false)
  alert("truthy!");
}
//Most of the time, OR || is used in an if statement to test if any of the given conditions is true.
// For example:
let hour = 9;

if (hour < 10 || hour > 18) {
  alert("The office is closed");
}

// we can pass more conditions:
let jam = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("the office is closed"); // it is the weekend
}
//============================ OR "||" finds the first truthy value ==============================================
//The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.
//The extended algorithm works as follows.
// Given multiple OR’ed values:
result = value1 || value2 || value3;
// The OR || operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.

// A value is returned in its original form, without the conversion.

// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

alert(1 || 0); // 1 (1 is truthy)

alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)

alert(undefined || null || 0); // 0 (all falsy, returns the last value)

// 1
// Getting the first truthy value from a list of variables or expressions
//For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

let firstName = "";
let lastName = "";
let nickName= "jokowi";

alert( firstName || lastName || nickName || "prabowo"); // jokowi
// If all variables were falsy, "prabowo" would show up.

// 2
// Short-circuit evaluation.
/*Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed: */

true || alert("not printed");
false || alert("printed");
//In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
