//=================== THE IF STATEMENT =======================
//The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
let year = prompt("In which year was JOKOWI become a president?", "");

if (year == 2015) alert("You are right!");

//If we want to execute more than one statement, we have to wrap our code block inside curly braces:
if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
} else {
  alert("hutang");
}
//=================================================================

//=================== BOLOEAN CONVERSION ============================
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.

//for example
if (0) {
  // 0 is falsy
  //...
}

if (1) {
  // 1 is truthy
  //...
}

//We can also pass a pre-evaluated boolean value to if, like this:
let cond = year == 2015; // equality evaluates to true or false

if (cond) {
  //...
}
//=========================================================================

//================== THE "ELSE" CLAUSE ====================================
// The if statement may contain an optional else block. It executes when the condition is falsy.

let nut = prompt(" many nut that guy have? ");

if (nut == 1) {
  alert(" you are correct ");
} else {
  alert(" you are so wrong ");
}
//===========================================================================

//===================== SEVERAL CONDITIONS : "ELSE IF" ======================
// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
let age = prompt ("how old are you?");

if (age < 20){
    alert("you are so young")
}else if (age > 20){
    alert(" you are so old man")
}else {
    alert("input correctly please")
}

//================= CONDITIONAL OPERATOR "?" ==================================
// Sometimes, we need to assign a variable depending on a condition.
let accessAllowed;
let umur = prompt('How old are you?', '');

if (umur > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// for example 
let result = condition ? value1 : value2;
//let accessAllowed = (age > 18) ? true : false;
// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
//let accessAllowed = age > 18 ? true : false;
