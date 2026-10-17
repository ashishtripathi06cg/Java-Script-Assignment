//////////////////////// Part A:-

// Question 1:-
let number2 = 25;
if(number2%5==0){
    console.log("Divisible by 5")
}


// Question 2:-
let age9 = 62;
if (age9>=60){
    console.log("Senior citizen");
}


// Question 3:-
let num =100;
if(num>=100){
    console.log("Big number")
}


// Question 4:-
let temp = 10;
if(temp<=10){
    console.log("very cold")
}


// Question 5:-
let score = 100;
if(score = 100){
    console.log("Perfect score")
}


// Question 6:-
let number = -1;
if(number<0){
    console.log("Negative number");
}


// Question 7:-




// Question 8:-
let year1 =2000;
if(year1/100){
    console.log("century year")
}


// Question 9:-
let number3 = 12;
if(number3 >0 && number3%2==0){
    console.log("Positive even number")
}


// Question 10:-
let marks = 20;
if(marks>=35 && marks<=100){
    console.log("valid marks")
}


///////////////////////////////// B part=> if...else:-

// Question 1:-
let number4= 34;
if(number4%2==0){
    console.log("number is even")
}else{
    console.log("number is odd")
}


// Question 2:-
let age =20;
if(age>=18){
    console.log("eligible for vote")
}else{
    console.log("not eligible for vote")
}

// Question 3:-
let number5 = 5;
if(number5>0){
    console.log("Positive Number")
}else{
    console.log("Negative number")
}

// Question 4:-
let mark = 33;
if(mark>=35){
    console.log("Pass")
}else{
    console.log("Not pass")
}

// Question 5:-
let char= "a";
if(char>="A" && char <="Z"){
    console.log("Its a uppercase letter")
}else{
    console.log("its not")
}


// Question 6:-
let number6 = 6;
if(number6 % 6==0){
    console.log("Divisible by 3")
}else{
    console.log("Not divisible by 6")
}

// Question 7:-
let password = "admin123";
if(password = "admin123"){
    console.log("Login successful")
}else{
    console.log("Incorrect Password")
}

// Question 8:-
let year = 2016;
if(year%4==0){
    console.log("Leap year")
}else{
    console.log("Not a leap year")
}

// Question 9:-
let num6 = 100;
let num7 = 200;
if(num6 < num7){
    console.log("num6 is smaller than num7")
}else{
    console.log("num7 is smaller than num6")
}

// Question 10:-
let number8 = 10;
if(number8>=0){
    console.log("number is positive")
}else if(number8<0){
    console.log("number is negative")
}

////////////////////////////////// Part C=> if...else if...else:-

//Question 1:-
let day = "monday";
if(day == "monday" || day =="Tuesday" || day =="Wednestday" || day == "Thursday" || day == "Friday"){
    console.log("Weekday");
}else if(day == "Saturday" || day == "Sunday"){
    console.log("Weekday")
}

//Question 2:-
let income =500000;
if(income < 300000){
    console.log("No Tax");
}else if(income>300000 && income <=700000){
    console.log("5% Tax")
}else if(income >700000 && income<=100000){
    console.log("10% Tax")
}else{
    console.log("15% Tax")
}

//Question 3:-
let studentScore = 100;
if(studentScore >=90 && studentScore <=100){
    console.log("Outstanding")
}else if(studentScore <=70 && studentScore <=89){
    console.log("Good")
}else if(studentScore >=40 && studentScore <=69){
    console,log("Average")
}else if(studentScore <=40){
    console.log("Needs improvement")
}else{
    console.log("invalid")
}

//Question 4:-
let speed = 50
if(speed <40){
    console.log("slow")
}else if(speed >=40 && speed <=80){
    console.log("Normal")
}else if(speed >80){
    console.log("Fast")
}

// Question 5:-
let height =174;
if(height <150){
    console.log("short")
}else if(height >=150 && height <=170){
    console.log("Average")
}else if(height >170){
    console.log("Tall")
}


//////////////////////////// part D=> Nested if:-
// Question 1:-
let numbers = 15;

if (numbers > 10) {
    if (numbers % 3 === 0) {
        console.log(numbers + " is greater than 10 and divisible by 3.");
    } else {
        console.log(numbers + " is greater than 10, but NOT divisible by 3.");
    }
} else {
    console.log(numbers + " is not greater than 10.");
}

// Question 2:-
let ages = 20;
let hasVoterID = true;

if (ages >= 18) {
    if (hasVoterID) {
        console.log("Can Vote");
    } else {
        console.log("Cannot vote: You are 18 or older, but you do not have a voter ID.");
    }
} else {
    console.log("Cannot vote: You must be 18 or older.");
}

// Question 3:-
let markss = 85;

if (markss >= 40) {
    if (markss >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed (Marks are 40 or above, but below 80).");
    }
} else {
    console.log("Failed: Scored below 40 marks.");
}

// Question 4:-
let correctPIN = 1234;
let enteredPIN = 1234;
let accountBalance = 5000;
let withdrawalAmount = 2000;

if (enteredPIN === correctPIN) {
    if (accountBalance >= withdrawalAmount) {
        console.log("Transaction successful! Please collect your cash.");
    } else {
        console.log("Transaction failed: Insufficient balance.");
    }
} else {
    console.log("Transaction failed: Incorrect PIN.");
}
// Question 5:-
let years = 2000;

if (years % 4 === 0) {
    if (years % 100 === 0) {
        if (years % 400 === 0) {
            console.log(years + " is a Leap Year.");
        } else {
            console.log(years + " is NOT a Leap Year (Divisible by 100 but not by 400).");
        }
    } else {
        console.log(years + " is a Leap Year.");
    }
} else {
    console.log(years + " is NOT a Leap Year (Not divisible by 4).");
}







//////////////////////////////////////////////// Part (E)  Switch statement:-

// Question 1:-


// ==========================================
// SWITCH STATEMENT SOLUTIONS (Using `let`)
// ==========================================

// --- Question 1 & 2: Days in a Month ---
let month = 2;
let days;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28; // 28 for February as simplified
    break;
  default:
    days = "Invalid month number";
}
console.log("1. Days in Month:", days);


// --- Question 3: Vowel or Consonant ---
let char = 'e';
let charResult;
switch (char.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    charResult = "Vowel";
    break;
  default:
    charResult = "Consonant";
}
console.log("2. Character Check:", charResult);


// --- Question 4, 5 & 6: Seasons (1-2: Winter, 3-4: Summer) ---
let seasonNum = 3;
let seasonResult;
switch (seasonNum) {
  case 1:
  case 2:
    seasonResult = "Winter";
    break;
  case 3:
  case 4:
    seasonResult = "Summer";
    break;
  default:
    seasonResult = "Invalid number";
}
console.log("3. Season:", seasonResult);


// --- Question 7 to 12: Class Assignment using switch(true) ---
let marks = 68;
let classResult;
switch (true) {
  case (marks >= 75):
    classResult = "Distinction";
    break;
  case (marks >= 60):
    classResult = "1st class";
    break;
  case (marks >= 50):
    classResult = "2nd class";
    break;
  case (marks >= 35):
    classResult = "3rd class";
    break;
  default:
    classResult = "Failed";
}
console.log("4. Class for Marks:", classResult);


// --- Question 13 to 16: Nested Switch for Roles and Actions ---
let role = "admin";
let action = "create";
let accessResult;

switch (role) {
  case "admin":
    switch (action) {
      case "create":
        accessResult = "Admin Action: Record Created";
        break;
      case "edit":
        accessResult = "Admin Action: Record Edited";
        break;
      case "delete":
        accessResult = "Admin Action: Record Deleted";
        break;
      default:
        accessResult = "Invalid admin action";
    }
    break;
  case "user":
    accessResult = "Limited Access";
    break;
  default:
    accessResult = "Invalid role";
}
console.log("5. Nested Switch Result:", accessResult);


// ==========================================
// TERNARY OPERATOR SOLUTIONS (Using `let`)
// ==========================================

// --- Question 1: 
let num = 49;
let divisibleResult = (num % 7 === 0) ? "Divisible by 7" : "Not Divisible by 7";
console.log("1. Divisible by 7:", divisibleResult);


// --- Question 3: 
let temperature = 32;
let tempResult = (temperature >= 30) ? "Hot Day" : "Pleasant Day";
console.log("2. Temperature Check:", tempResult);


// --- Question 4: 
let text = "";
let stringResult = (text === "") ? "Empty String" : "String has content";
console.log("3. String Check:", stringResult);


// --- Question 5: 
let age = 16;
let ageResult = (age < 13) ? "Child" : (age <= 19) ? "Teenager" : "Adult";
console.log("4. Age Group:", ageResult);


// --- Question 6: 
let a = 12, b = 45, c = 30;
let maxNumber = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log("5. Greatest Number:", maxNumber);