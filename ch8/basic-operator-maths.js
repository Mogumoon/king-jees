//========== TERMS: "UNARY", "BINARY", "OPERAND" ==========
//An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands:
// the left operand is 5 and the right operand is 2.
// Sometimes, people call these “arguments” instead of “operands”.
let x = 1;
x = -x;
alert(x); // -1, unary negation was applied

//An operator is binary if it has two operands.
// The same minus exists in binary form as well:
let z = 1,
  y = 3;
alert(y - x); // 2, binary minus subtracts value
//========================================================

//=================== MATHS =============================
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.
//===========================================================

//================== REMAINDER (%) ==========================
//The remainder operator %, despite its appearance, is not related to percents.
//The result of a % b is the remainder of the integer division of a by b.
alert(5 % 2); // 1, the remainder of 5 divided by 2
alert(8 % 3); // 2, the remainder of 8 divided by 3
alert(8 % 4); // 0, the remainder of 8 divided by 4
//============================================================

//==================== EXPONENTIATION (**) ===================
// The exponentiation operator a ** b raises a to the power of b.
alert(2 ** 2); // 2² = 4
alert(2 ** 3); // 2³ = 8
alert(2 ** 4); // 2⁴ = 16
//=============================================================

//=============== STRING CONCATENATION WITH BINARY ===========
// Usually, the plus operator + sums numbers.
let s = "my" + "school";
alert(s); // myschool
//Note that if any of the operands is a string,
// then the other one is converted to a string too.
alert("1" + 2); // "12"
alert(2 + "1"); // "21"
alert(2 + 2 + "1"); // "41"
alert("1" + 2 + 2); // "14"  so it’s like '1' + 2 = "12" and "12" + 2 = "122".
// Here’s the demo for subtraction and division:
alert(6 - "2"); // 4, convert "2" to a number
alert(6 / "2"); // 3, converts both operands to numbers
//==============================================================

//========== NUMERIC CONVERSION, UNARY + ========================
//The plus + exists in two forms: the binary form that we used above and the unary form.
// No effect on numbers
let a = 1;
alert(+a); // 1

let b = -2;
alert(+b); // -2

// Convert non-numbers
alert(+true); // 1
alert(+""); // 0

//The binary plus would add them as strings:
let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23", the binary plus concatenates strings
let appless = "2";
let orangess = "3";

// both values converted to numbers before the binary plus
alert(+appless + +orangess); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
//=========================================================================

//================== ASSIGNMENT ===============================
//Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.
let m = 2 * 2 + 1;
alert(m); // 5

//Assignment = returns a value
let q = 1;
let w = 2;
let e = 3 - (q = w + 1);

alert(q); // 3
alert(e); // 0

// Chaining assignments
let h, i, j;

h = i = j = 2 + 2;

alert(h); // 4
alert(i); // 4
alert(j); // 4
//==============================================================

//=============== MODIFY-IN-PLACE ==============================
//We often need to apply an operator to a variable
// and store the new result in that same variable
let nn = 2;
nn = nn + 5;
nn = nn * 2;
//This notation can be shortened using the operators += and *=:
let v = 2;
v += 5; // now n = 7 (same as v = v + 5)
v *= 2; // now n = 14 (same as v = v * 2)

alert(n); // 14
let n = 2;
n *= 3 + 5; //right part evaluated first, same as n *= 8
alert(n); // 16
//======================================================

//=========== INCREMENT / DECREMENT =================================
//Increasing or decreasing a number by one
// is among the most common numerical operations.

//Increment ++ increases a variable by 1:
let counter = 2;
cunter++; // works the same as counter = counter + 1, but is shorter
alert(counter);

//Decrement -- decreases a variable by 1:
let counters = 2;
counter--; // works the same as counter = counter - 1, but is shorter
alert(counters); // 1

//Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception.
// The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).
let counter1 = 1;
let l = ++counter1; // (*)
alert(l); // 2

//Now, let’s use the postfix form:
let counter2 = 1;
let p = counter2++; // (*) changed ++counter to counter++
alert(p); // 1

//Specifik Difrent
let counter3 = 0;
alert(++counter3); // 1

let counter4 = 0;
alert(counter4++); // 0
//================================================================================

//==================== BITWISE OPERATOR ========================================
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )
//==================================================================================

//============================= COMMA =============================================
//The comma operator allows us to evaluate several expressions, dividing them with a comma ,. 
let koma = (1 + 2, 3 + 4);
alert(koma);// 7 (the result of 3 + 4)

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 //... just for example
}
//========================== TASKS ====================================
//What are the final values of all variables a1, b1, c1 and d1 after the code below?
let a1 = 1, b1 = 1;

let c1 = ++a1; // ?
let d1 = b1++; // ?

//What are the values of a2 and x2 after the code below?
let a2 = 2;

let x2 = 1 + (a2 *= 2);