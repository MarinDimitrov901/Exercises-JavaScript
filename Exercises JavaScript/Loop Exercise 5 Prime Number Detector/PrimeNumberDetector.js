//Write a JavaScript program that uses a for loop to check if a given number is prime (only divisible by 1 and itself). Print whether the number is prime or not.

function Demo(number) {
  if (number <= 1) {
    result false; 
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      result false;
    }
  }
  result true;
}
Demo()