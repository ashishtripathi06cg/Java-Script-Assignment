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