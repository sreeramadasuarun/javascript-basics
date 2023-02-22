// .................................................................................Coding Challenge #2

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);

// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Marks's !`);
// }

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
// }

// ..............................................................................Values and Variables

// let country = "Portugal";
// let continent = "Europe";
// let population = 10;
// console.log(country);
// console.log(continent);
// console.log(population);

// ...............................................................................Data Types

// // String
// const firstName = "Arun";
// // Number
// const number = 100;
// // Boolean
// const value1 = true;
// const value2 = false;
// // Null
// const name = null;
// // Undefined
// let lastName;

// console.log(typeof firstName);
// console.log(typeof "hello world");
// console.log(typeof number);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof name);
// console.log(typeof lastName);

// ...............................................................................Basic Operators

// const country = "India";
// const continent = "Asia";
// const population = 100;
// const language = "English";

// console.log(population / 2);
// console.log(population + 1);

// console.log(population > 6);
// console.log(population < 33);

// const description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
// console.log(description);

// ...................................................................Taking Decisions: if / else Statements

// const country = "India";
// // const population = 130;
// const population = 13;

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million
//     below average`
//   );
// }

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,........................,......Type Conversion and Coercion

// console.log("9" - "5");
// console.log("2" + "2" + "10");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 1 + "4" + 9 - 4 - 2);

// ................................................................................Equality Operators:

// const numNeighbours = alert(
//   "How many neighbour countries does your country have?"
// );
// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

// // ..........................................................................converted string to number

// // const numNeighbours = Number(
// //   prompt("How many neighbour countries does your country have?")
// // );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// alert("hi");

// ,,,,,,,,,,,,,,,,,,........................,.......................................Logical Operators

// const language = "English";
// const population = "40";
// const isIsland = false;
// const country = "India";

// if (language === "English" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// .....................................................................................Coding Challenge #3

// const scoreDolphins = (96 + 107 + 88) / 3; //dolphis wins
// const scoreKoalas = (80 + 91 + 110) / 3;

// const scoreDolphins = (96 + 107 + 88) / 3; //both wins
// const scoreKoalas = (90 + 91 + 110) / 3;

// const scoreDolphins = (86 + 107 + 88) / 3; //koalas wins
// const scoreKoalas = (90 + 91 + 110) / 3;

// const scoreDolphins = (96 + 107 + 88) / 3; //not found wins data
// const scoreKoalas = (90 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   (scoreDolphins >= 100) & (scoreKoalas >= 100)
// ) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("not found match data");
// }

// console.log(scoreDolphins, scoreKoalas);

// let username = "arun";
// console.log(Number(username.length));

// console.log("Apple" + "apple");

// .....................................................................................Backtick Characters

// Backtick Characters

// const firstName = "Arun";
// const age = 27;

// const sentance = "Hey it's " + firstName + " he is " + age + " years old";

// const value = `Hey it's ${firstName} he is ${age} years old. Math Calc ${
//   4 + 3
// }`;

// console.log(value);

// console.log(sentance);

// .............................................................................Conditional Statements

// >, <, >=, <=, ==, ===, !=, !==
// else if and !

// const num1 = 7;
// const num2 = 70;

// const value = false;
// if (!value) {
//   console.log("heyy i am coming");
// }

// if (num1 > num2) {
//   console.log("First number is greater than second number");
// } else if (num1 >= num2) {
//   console.log("Both are equall");
// } else {
//   console.log("Second number is greater than first number");
// }

// const value1 = 2 < 1;
// // console.log(typeof value1);

// if (value1) {
//   console.log("Hello Everyone!");
// } else {
//   console.log("heyyyy!!");
// }

//................................................................................................. ternary operator

// const firstName = "Arun";
// const firstName = "";

// firstName
//   ? console.log(`This is True and name is ${firstName}`)
//   : console.log("This is False");

//.................................................................................................... Switch

// const score = 4;

// switch (score) {
//   case 1:
//     console.log("score one");
//     break;
//   case 2:
//     console.log("score two");
//     break;
//   case 3:
//     console.log("score three");
//     break;
//   case 4:
//     console.log("score four");
//     break;
//   case 5:
//     console.log("score five");
//     break;
//   case 6:
//     console.log("score six");
//     break;
//   default:
//     console.log("you did not roll the dice");
// }

//____________________________________________________________________________________________Coding Challenge #4

// const bill = 300;
// const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

// console.log(bill);

// console.log(tip);

// console.log(
//   `the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
// );

// __________________________________________________________________________________________________functions

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and
// its capital city is ${capitalCity}`;
// }

// const Portugal = describeCountry("Portugal", 10, "Lisbon");
// const Germany = describeCountry("Germany", 83, "Berlin");
// const Finland = describeCountry("Finland", 6, "Helsinki");
// console.log(Portugal);
// console.log(Germany);
// console.log(Finland);

//................other practice

// ..................................
// function addNumbers(num1, num2) {
//   return num1 + num2;
// }

// const firstValue = addNumbers(1, 5);
// const secondValue = addNumbers(2, 3);

// console.log(firstValue, secondValue);

// // function
// const add = function (num1, num2) {
//   return num1 + num2;
// };

// const thirdValue = add(100, 200);

// console.log(thirdValue);

// console.log(add(10, 20));

// console.log(firstValue, secondValue, add(100, 200));

// const Addition = (num1, num2) => num1 + num2; //arrow

// console.log(Addition(10, 50));
//...................................................

// ________________________________________________________Array

// const numbers = [10, 20, 30, 40, 50];

// console.log(numbers[2]);

//........................................
// let fruit = ["apple", "banana", "cherries", "orange", "pineapple"];
// console.log(fruit);

// console.log(fruit.length);

// console.log(fruit[fruit.length - 1]);

// console.log(fruit.length - 1);

// fruit.push("Grapes");
// console.log(fruit);

// fruit.pop();
// console.log(fruit);

// fruit.unshift("BlackBerries");
// fruit.unshift("Grapes");
// console.log(fruit);

//..........................................

//...................................Function Declarations vs. Expressions challenge

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const india = percentageOfWorld1(10);
// const china = percentageOfWorld1(1441);
// const usa = percentageOfWorld1(332);

// console.log(india, china, usa);

// function percentageOfWorld2(population) {
//   return (population / 7900) * 100;
// }

// const india2 = percentageOfWorld1(80);
// const china2 = percentageOfWorld1(141);
// const usa2 = percentageOfWorld1(132);

// console.log(india2, china2, usa2);

//.............................................
// const percentageOfWorld1 = (population) => (population / 7900) * 100;

// const india = percentageOfWorld1(10);
// const china = percentageOfWorld1(1441);
// const usa = percentageOfWorld1(332);

// console.log(india, china, usa);

//.............................................
// const percentageOfWorld1 = (population) => {
//   return (population / 7900) * 100;
// };

// const india = percentageOfWorld1(10);
// const china = percentageOfWorld1(1441);
// const usa = percentageOfWorld1(332);

// console.log(india, china, usa);

//.............................................
