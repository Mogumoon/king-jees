//================= let ==============================
/*let message;

message = "hello!";
alert(message);*/

/* let message = "hello!";
 alert(message); */

//let user = "Jhon", age = 25, message ="hello";

/*let user = "Jhon";
let age = 25;
let message = "Hello"; */

// GW LEBIH SUKA PAKE INI
/*let user = "Jhon",
  age = 25,
  message = "Hello"; */

/*let user = "Jhon"
  ,age = 25
  ,message = "Hello"; */
//=======================================================

//==================== var ===============================
// var itu versi old nya let jadi more rekomended let
//var message = "Hello";
//=========================================================

//================ CONTOH NYATA =======================
// let bisa mengubah atau mengganti variable sebelumnya
/*let message;

message = "hello";
message = "world"; //ini mengubah variable sebelumnya

alert(message);*/

// CONTOH COPY DATA
/*let hello = "hello world";
let message;

// copy hello world dari variabel hello ke variable message
message = hello;

// sekarang 2 variable punya data yg sama
alert(hello);
alert(message);*/

// CONTOH COPY DATA YG SALAH
/*let message = "THIS";
let message = "THAT"; // error karena menggunakan let dgn variable yg sama

alert(message);*/
//====================================================================================

//========================== PENAMAAN VARIABEL ==========================================
// PENAMAAN HARUS DIAWALI DENGAN CHARACTER TIDAK BOLEH NUMBER
// The name must contain only letters, digits, or the symbols $ and _

/*let userName;
let test123;

let $ = 1; // MENDKLARASIKAN VARIABLE DENGAN NAMA $
let _ = 2; // MENDKLARASIKAN VARIABLE DENGAN NAMA _

alert($ + _);*/

//CONTOH PENAMAAN VARIABLE YANG SALAH
/*let 1a;
let my-name;
let let = 5;
let return = 5*/

//=============================== CONSTANTS (CONST) =============================
// UNTUK MENDKLARASIKAN VARIABLE YANG TIDAK BERUBAH GUNAKAN CONST

/*const myBirthDay = "24-11-2001";

// CONTOH UPERCASE CONST

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// WHEN WE NEED PICK A COLOR
let color = COLOR_BLUE;
alert(color); */

//======================= TASK CONTOH TUGAS ==============================
/* Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”). */

let name, admin;
name = "jhon";
admin = name;

alert(admin);

/*Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable? */

const planet = "earth";
const user = "user";
