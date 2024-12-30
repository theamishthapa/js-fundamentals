//array always has values and index

//map method

//value
//index = arrays start from 0
//map function always have return keyword

// let list = ["a", "b", "c"];
// let output = list.map((value, index) => {
//   return 5;
// });

// console.log(output);

//USE MAP METHOD IF BOTH INPUT AND OUTPUT ARE ARRAYS AND BOTH INPUT AND OUTPUT LENGTH ARE SAME

// [1,2,3,4] => [2,4,6,8]

// let list = [1, 2, 3, 4];
// let output = list.map((value, index) => {
//   return value * 2;
//   //   return output1;
// });

// console.log(output);

//Q1  [1,2,3,4] => [100, 200, 300, 400]
// let list = [1, 2, 3, 4];
// let output = list.map((value, index) => {
//   return value * 100;
// });

// console.log(output);

// let text = ["my", "name", "is"];
// let output = text.map((value, index) => {
//   return value.toUpperCase();
// });

// console.log(output);

// [1,3,4,5,6] => [100,300,0,500, 0]

// let list = [1, 3, 4, 5, 6];
// let output = list.map((value, index) => {
//   if (value % 2 === 0) {
//     return 0;
//   } else {
//     return value * 100;
//   }
// });

// console.log(output);

// let list = ["a", "b", "c", "d"];
// let output = list.map((value, index) => {
//   return `${index} ${value}`;
// });

// console.log(output);

// ['a', 'm', 'i', 's', 'h'] => ['A', 'm', 'i', 's', 'h']
// let list = ["a", "m", "i", "s", "h"];
// let output = list.map((value, index) => {
//   if (index === 0) {
//     return value.toLocaleUpperCase();
//   } else {
//     return value;
//   }
// });

// console.log(output);
