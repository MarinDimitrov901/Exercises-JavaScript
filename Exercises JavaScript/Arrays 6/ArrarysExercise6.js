//6.Add and Subtract Write a function, which changes the value of odd and even numbers in an array of numbers. 
//• If the number is even - add to its value its index position • 
//If the number is odd - subtract to its value its index position Output On the first line print the newly modified array,
// on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array. 
//Examples Input Output [5, 15, 23, 56, 35] [ 5, 14, 21, 59, 31 ] 134 130 [-5, 11, 3, 0, 2] [ -5, 10, 1, 3, 6 ] 11 15

function array(j) {
  let modifiedArray = [];
  let sumOriginal = 0;
  let sumModified = 0;

  for (let i = 0; i < j.length; i++) {
    let num = j[i];
    if (num % 2 === 0) {
      modifiedArray.push(num + i);
    } else {
      modifiedArray.push(num - i);
    }

    sumOriginal += num;
    sumModified += modifiedArray[i];
  }

  return [modifiedArray, sumOriginal, sumModified];

}
let input = [-5, 11, 3, 0, 2];
let [result, sumOriginal, sumModified] = array(input);

console.log(result);
console.log(sumOriginal);
console.log(sumModified);
