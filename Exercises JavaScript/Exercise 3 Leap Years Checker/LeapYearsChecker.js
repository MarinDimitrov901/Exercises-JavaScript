//Write a JavaScript program that prompts the user to enter a year and checks if it's a leap year or not. Leap years are divisible by 4, but not by 100, unless they are divisible by 400.


function isLeapYear(input) {

  
  for(let index == 0; index < input.lenght; index++){
    let currectYears = Number(input[index]);

    let isLeapYear = (currectYears % 4 === 0 && currectYears % 100 !== 0);
    || currectYears= % 400 ===0;

  if (isLeapYear) {
    console.log('leap years');
  }else if {
    console.log('not leap years');
  }
  }
}
isLeapYear(['2003', '1999', '2000', '1024']);