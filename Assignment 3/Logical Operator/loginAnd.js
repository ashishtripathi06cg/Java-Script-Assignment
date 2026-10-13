// Question 1:-
let storedUserName = "admin";
let storedPassword = 1234;

let inputUserName = "admin";
let inputPassword = 1234;

let isValid = (storedUserName === inputUserName)  && (storedPassword === inputPassword);
console.log("Are credentials Valid?:-", isValid )

// Question 2:-
let isLoggedIn = true;
let hasPermission = true;

let canAccess = (isLoggedIn && hasPermission);
console.log("canAccessPage:-", canAccess)

// Question 3:-
let inStock = true;
let price = 800;

let canBuy = (inStock && (price<1000));

console.log("canBuy:-", canBuy)

// Question 4:-
let studentMarks = 75;
let studentAttendence =  80;

let requireMarks = 65;
let requiredAttendence = 70;
let isPass =("isPass:-",studentMarks>65 && studentAttendence>70);
console.log(isPass);

// Question 5:-
let isWeekend = true;
let isHoliday = false;

let partyHappen = (isWeekend && isHoliday);
console.log(partyHappen);

////////////////////////////////////////// Additional Question:-

// Question 6:-
let a = 0;
let b = 10;
let result = a && b;
console.log(result); //0

// Question 7:-
let x = 5;
let y =10;
let result = (x > 3 && y) || 0;
console.log(result); // 10

// Question 8:-
let p ="Hello"
let q = "";
let r = "world";
let result = p && q && r;
console.log(result) //world

// Question 9:-
let val = 5;
let condition = val && (val = 0);
console.log(condition); // 0
console.log(val);  // 0


// Question 10:-
let x = 10;
let y = 20;
let result = (x&&y) && (x > y);
console.log(result) // false