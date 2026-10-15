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