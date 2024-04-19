//ASSIGNMENT # 4 (Date: 17-04-2024)
//Q1: Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting: string = "Hello, World!";
console.log(greeting);
//Q2: Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1: number = 5;
let num2: number = 2;
console.log("Addition", num1 + num2);
console.log("Subtraction", num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Quotient", num1 / num2);
console.log("Power", num1 ** num2);
console.log("Modulus", num1 % num2);
//Q3: Instructions: Swap the values of two variables without using a third variable.
let a: number = 1;
let b: number = 2;
console.log("a =", a);
console.log("b =", b);
a = a + b; //3
b = a - b; //1
a = a - b; //2
console.log("a =", a);
console.log("b =", b);
//Q4: Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let message: string = "Hello";
console.log(message); //Output will be Hello
let message1: number = 2; //It's returning an error, as the variable "message" can either be a number or a string, but it can not be both. So, I have changed variable name to "message1" to avoid this error here.
//Q5: Instructions: Use the modulus operator to find the remainder of two numbers.
let num3 = 5;
let num4 = 2;
console.log("Modulus", num3 % num4);
//Q6: Instructions: Increment a variable's value by 1 using two different methods.
//Method - 1
let counter: number = 0;
counter++;
console.log(counter);
//Method - 2
let counter1: number = 0;
counter1 += 1;
console.log(counter1);
//Q7: Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a1: boolean = true;
let b1: boolean = false;
let c1: boolean = true;
// AND Logical Operator Expressions
let AND1 = a1 && b1;
console.log(AND1);
let AND2 = a1 && c1;
console.log(AND2);
let AND3 = b1 && c1;
console.log(AND3);
// OR Logical Operator Expressions
let OR1 = a1 || b1;
console.log(OR1);
let OR2 = a1 || c1;
console.log(OR2);
let OR3 = b1 || c1;
console.log(OR3);
// Not Logical Operator Expressions
let NOT1 = !a1;
console.log(NOT1);
let NOT2 = !b1;
console.log(NOT2);
let NOT3 = !c1;
console.log(NOT3);
//Q8: Instructions: Show examples of using compound assignment operators.
let num5 = 10; // Use +=, -=, *=, and /= on this variable.
num5 += 10;
console.log(num5);
num5 -= 5;
console.log(num5);
num5 *= 2;
console.log(num5);
num5 /= 3;
console.log(num5);
//Q9: Instructions: Write a program to check if a number is even or odd.
let num6 = 5;
function CHECKER(num6: number): string {
  if (num6 % 5 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(`${num6} is ${CHECKER(num6)}.`);
//Q10: Instructions: Check if a person is eligible to vote. (Check if age is 18 or older to determine voting eligibility.)
let age: number = 20;
function ELGIBILITY(age: number): string {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}
console.log(`${age} is ${ELGIBILITY(age)} to vote.`);
//Q11: Instructions: Assign a grade based on a numerical score.
let score: number = 25; // Use conditionals to assign and print grades A, B, C, D, or F.
if (score >= 90) {
  console.log("A Grade");
} else if (score >= 80) {
  console.log("B Grade");
} else if (score >= 70) {
  console.log("C Grade");
} else if (score >= 60) {
  console.log("D Grade");
} else if (score >= 50) {
  console.log("E Grade");
} else {
  console.log("F Grade");
}
//Q12: Instructions: Find the maximum of three numbers.
let x: number = 2;
let y: number = 4;
let z: number = 6;
let max;
if (x >= y && x >= z) {
  max = x;
} else if (y >= x && y >= z) {
  max = y;
} else {
  max = z;
}
console.log(`Max number is = ${max}.`);
//Q13: Instructions: Check if a given year is a leap year.
let year = 2024;
function LEAPCHECKER(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(LEAPCHECKER(year));
//Q14: Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 50;
function CONVERTER(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}
let Celsius = CONVERTER(fahrenheit);
console.log(`${fahrenheit} Fahrenheit is Equal to ${Celsius} Celsius.`);
//Q15: Instructions: Check if a number is positive, negative, or zero.
let number = 5;
if (number > 0) {
  console.log("Number is Positive");
} else if (number < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is Zero");
}
//Q16: Instructions: Write a program that prints the multiplication table of a given number up to 10.
let num7 = 2;
console.log("2 x 1 = ", num7 * 1);
console.log("2 x 2 = ", num7 * 2);
console.log("2 x 3 = ", num7 * 3);
console.log("2 x 4 = ", num7 * 4);
console.log("2 x 5 = ", num7 * 5);
console.log("2 x 6 = ", num7 * 6);
console.log("2 x 7 = ", num7 * 7);
console.log("2 x 8 = ", num7 * 8);
console.log("2 x 9 = ", num7 * 9);
console.log("2 x 10 = ", num7 * 10);