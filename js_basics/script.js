/* 
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

/*
Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion: changing undefined into string
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old' + job + ' is he married? ' + isMarried);
//Variable mutation: to change the value of a variable
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old' + job + ' is he married? ' + isMarried);

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);

*/

// var firstName = prompt("enter your first name ");
// var lastName = prompt("enter your last name ");
// var fullName = alert("Your fullname is " + firstName + " " + lastName);

// var number = prompt("Enter a number between 1 and 99");
// if (number > 0 && number < 100) {
//   alert(number);
// } else {
//   alert("Your input is invalid");
// }

/* Basic operators */

// var now, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// //Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// //Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'mark is older than John');
// var x;
// console.log(typeof x);

/* 
 * Operator precedence
 */

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var difference = now - yearJohn;
// console.log(difference);

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More opetators
// x *= 2; // x = x * 2;
// console.log(x); // 52
// x += 10; // x = x + 10;
// console.log(x);
// x++; // x = x + 1 // x+= 1;
// console.log(x);

/***
 * Coding Challenge 
 * 
 */

var markHeight = prompt('Enter the height of Mark');
var markMass = prompt('Enter the mass of Mark');
var johnHeight = prompt('Enter the height of John');
var johnMass = prompt('Enter the mass of John');
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
var higherBMI = (markBMI > johnBMI);
console.log('mark\'s BMI is ' + markBMI, 'john\'s BMI is ' + johnBMI);
console.log('Is Mark\'s BMI higher than John\'s BMI? ' + higherBMI);