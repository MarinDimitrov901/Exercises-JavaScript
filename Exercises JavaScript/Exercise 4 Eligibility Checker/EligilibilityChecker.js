//Create a JavaScript program that asks the user for their age and whether they have a driver's license. Based on the inputs, print whether they are eligible to drive or not:

If age is 18 or older and they have a license, print "You are eligible to drive."
If age is below 18 or they don't have a license, print "You are not eligible to drive."



// Prompt user for age
const age = parseInt(prompt("Enter your age:"));

// Prompt user for driver's license status
const hasLicense = prompt("Do you have a driver's license? (yes/no)").toLowerCase();

// Check eligibility based on age and license status
if (age >= 18 && hasLicense === "yes") {
  console.log("You are eligible to drive.");
} else {
  console.log("You are not eligible to drive.");
}