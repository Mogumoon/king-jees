//============== ALERT =================
alert("hello");

let message = "hai";
alert(message);

alert(1);
//=======================================

//============== PROMPT ================
// The function prompt accepts two arguments:
// result = prompt(title, [default]);

let age = prompt("How old are you?", 100);
alert(`you are ${age} years old`);
//=============================================

//================== CONFIRM =================
//The function confirm shows a modal window
// with a question and two buttons: OK and Cancel.
result = confirm(question);

let isBoss = confirm("Are you the boss?");
alert(isBoss); // ok = true cancel = false

//================= SUMMARY ====================
// alert == show a message
// prompt == user input
// confirm == show a message ok or cancel (True / False)
//===================================================

//================== CHELLANGE ================
// Create a web-page that asks for a name and outputs it.
let name = prompt("what youre name", "");
alert(`hello ${name}`);
//==============================================