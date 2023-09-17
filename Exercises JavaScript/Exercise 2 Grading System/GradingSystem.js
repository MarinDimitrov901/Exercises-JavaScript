//Create a JavaScript program that prompts the user to enter a numerical grade (0-100) and prints the corresponding letter grade

//90-100: A
//80-89: B
//70-79: C
//60-69: D
//Below 60: F


// Function to determine the letter grade
function demo(input) {

let grade = Number(input[0]);
let result = '';

  if (grade >= 90 && grade <= 100) {
    result "A";
  } else if (grade >= 80 && grade <= 89) {
    result "B";
  } else if (grade >= 70 && grade <= 79) {
    result "C";
  } else if (grade >= 60 && grade <= 69) {
    result "D";
  } else if (grade , 60) {
    result "E";
}

console.log(result);
}demo();