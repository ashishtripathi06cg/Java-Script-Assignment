////////////////////////////////////////// Logical or ||:-

// Question 1:-
let passwordCorrect = true;
let otpValid = false;
let loginAllow = (passwordCorrect || otpValid);

console.log(loginAllow)

// Question 2:-
let isMember = false;
let hasCoupon =true;
let discountApplies = (isMember || hasCoupon);
console.log(discountApplies);


//Question 3:-
let age = 16;
let height = 155;

let entryAllowed = (age>18 || height > 150);
console.log(entryAllowed);


// Question 4:-
let emailGiven = true;
let phoneGiven = false;
let validEmail = (emailGiven || phoneGiven);
console.log(validEmail)

// Question 5:-
let score = 900;
let timeBonus = true;
let gameOpen = (score>1000 || timeBonus);
console.log(gameOpen)

///////////////////////////////////////// Additional Questions (Logical OR ||):-


// Question 6:-
let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log(result); //42

// Question 7:-
let x = "Hello" || 0;
let y = 0 || "Hi";
console.log(x, y);  //Hello,Hi

// Question 8:-
let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log(result); //true

// Question 9:-
let val = 5;
let condition = val || (val = 0);
console.log(condition);
console.log(val); //5

// Question 10:-
let x = "" || 0 || false || null || undefined || "OK";
console.log(x); //OK




























