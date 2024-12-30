// let num = [1, 2, 3, 4, 5];
// let output = num.reduce((previous, current) => {
//   return previous + current;
// }, 0);

// console.log(output);

// FIND THE SUM OF ALL EVEN NUMBERS IN AN ARRAY

let num = [3, 5, 7, 9, 10, 12];
let evenOutput = num
  .filter((value, index) => {
    if (value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })
  .reduce((prev, curr) => {
    return prev + curr;
  }, 0);

console.log(evenOutput);

// let sumEven = evenOutput.reduce((previous, current) => {
//   return previous + current;
// }, 0);

// console.log(sumEven);
