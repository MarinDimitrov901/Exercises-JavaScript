//Write a JavaScript program that uses nested loops to print the following pattern:


/*
**
***
****
*****/

function demo(input) {
  
let maxChars = Number(input[0]);
let symbol = input[1];

for (let i = 1; i <= maxChars; i++) {
  console.log('*'.repeat(i));
  }
}
demo(['7']);