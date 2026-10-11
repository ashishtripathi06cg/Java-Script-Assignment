// Question 1:-
let studentMarks = 78;
let passingMarks = 40;
let result =  (studentMarks > passingMarks);

console.log(result)

// Question 2:-
let todayTemperature = 35;
let yesterdayTemperature = 28;
let isHotter =  todayTemperature > yesterdayTemperature;

console.log(isHotter)


// Question 3:-
console.log("20">10);  // true
console.log("5">15);  // false
console.log("abc">10)  // false

// Question 4:-
console.log("20">15);    //true
console.log("5">"10");  //true
console.log("abc">10); //false

// // Question 5:-
let nullCheck = null > 0;
let undefinedCheck = undefined > 0;
console.log(nullCheck)
console.log(undefinedCheck)

// Question 6:-
let stockItem = 120;
let coustomerWants = 85;
let isstocksufficient = (stockItem > coustomerWants);

console.log(isstocksufficient)

// Question 7:-
console.log(8<12);
console.log(20<10);
console.log(7<7);




// 2. Less Than (<)

// Q1

let maxWeight = 50
let currentWeight = 42 
console.log(currentWeight<maxWeight)

// Q2

let age = 16 
let requiredAge = 18
console.log(age<requiredAge)

// Q3

console.log(8 < 12); // true
console.log(20 < 10); // false
console.log(7 < 7);  // false

// Q4

console.log("8" < 10); //   true
console.log("20" < "3"); // true
console.log("hello" < 5);  // false

// Q5

console.log(null<0)  // false // because null = 0 and 0 is not greater than 0 itself
console.log(undefined<0) // False // because undefined is NaN

// Q6

let capacity = 500
let waterLevel = 375
console.log(waterLevel<capacity)

// Q7

console.log(false < true); // true
console.log("5" < "15");  // false
console.log(NaN < 10);  // false

// 3. Greater than or equal to (>=)

// Q1

let num = 75 
let distinctionMarks = 75
console.log(num>=distinctionMarks)

// Q2

let price = 300 
let ticketPrice = 300 
console.log(price>=ticketPrice)

// Q3

console.log(25 >= 25); // True
console.log(30 >= 25); // True
console.log(20 >= 25); // False

// Q4

console.log("25" >= 25); // true
console.log("10" >= "2"); // false
console.log(null >= 0); // true

// Q5 

console.log(undefined>=0) // false // undefined = NaN // NaN is not equal to 0

// Q6 

let peopleInside = 8 
let maxPeople = 8 
console.log(peopleInside>=maxPeople) 

// Q7 

console.log(true >= 1); // true
console.log("" >= 0);  // true
console.log(NaN >= NaN); // false

// 4. less than or equal to (<=)

// Q1 

let speed = 60 
let maxSpeed = 60 
console.log(speed<=maxSpeed)

// Q2 

let score = 39 
let passingScore = 40
console.log(score<passingScore)

// Q3

console.log(15 <= 20); // true
console.log(20 <= 15); // false 
console.log(15 <= 15); // true

// Q4

console.log("15" <= 20); // true
console.log("30" <= "5"); // true
console.log(null <= 0);  // true

// Q5 

console.log(undefined<=0) // false // undefined = NaN // NaN is not equal to 0

// Q6 

let currentBooks = 10 
let maxBooks = 10 
console.log(currentBooks<=maxBooks)

// Q7 

console.log(false <= 0); // true 
console.log("" <= 0);  // true
console.log(NaN <= 5);  // false
