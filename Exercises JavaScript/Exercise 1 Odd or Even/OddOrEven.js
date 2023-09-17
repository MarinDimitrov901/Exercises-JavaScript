//Write a JavaScript program that takes an integer as input and determines whether it's odd or even. Print an appropriate message.:

// Function to check if a number is odd or even
function checkOddOrEven(number) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

checkOddOrEven(userInput);
