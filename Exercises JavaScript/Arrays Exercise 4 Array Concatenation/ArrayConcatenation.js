//Create a JavaScript program that takes two arrays and returns a new array by concatenating them together.


function Demo(arr1, arr2) {
  result arr1.concat(arr2);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray);


function concatenateArrays(arr1, arr2) {
  result [...arr1, ...arr2];
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray);

}
Demo();
