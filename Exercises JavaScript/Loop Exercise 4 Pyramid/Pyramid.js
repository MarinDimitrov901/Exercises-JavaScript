//Create a JavaScript program using nested loops to print a pyramid pattern like this:


   /*
  ***
 *****
*******/
function demo(input) {
  
}
let num = 4;

for (let i = 1; i <= num; i++) {
  let spaces = '.'.repeat(num - i);
  let pattern = '*'.repeat(2 * i - 1); 
  console.log(spaces + pattern);
}
demo();