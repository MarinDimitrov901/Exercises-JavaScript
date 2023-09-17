//Write a JavaScript program that simulates a movie night decision. Ask the user for their age and if they're accompanied by an adult. Determine if they can watch a PG-13 movie or not:

If age is 13 or older and accompanied, print "You can watch the movie."
If age is between 13 and 18 (inclusive) without an adult, print "You can watch with parental guidance."
If age is below 13, print "Sorry, you're not allowed to watch."


// Prompt user for age
const age = parseInt(prompt("Enter your age:"));

// Prompt user for adult accompaniment status
const isAccompanied = prompt("Are you accompanied by an adult? (yes/no)").toLowerCase();

// Check eligibility to watch the movie
if (age >= 13 && isAccompanied === "yes") {
  console.log("You can watch the movie.");
} else if (age >= 13 && age <= 18 && isAccompanied === "no") {
  console.log("You can watch with parental guidance.");
} else if (age < 13) {
  console.log("Sorry, you're not allowed to watch.");
} else {
  console.log("Invalid input. Please provide a valid age and accompaniment status.");
}