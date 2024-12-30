// array is a collection of values whereas object is a collection of key-value pairs that are called properties

// let info = {
//     name: "amish",
//     age: 20,
//     location: "Handigaun",
//     name: "amu",
//   };

// //DUPLICATE KEYS DOES NOT EXISTS. IF IT EXISTS THEN IT IS OVERWRITTEN BY THE LAST OR LATEST KEY
// console.log(info.location);
// console.log(info.name);

// let info = {
//   name: "amish",
//   age: 20,
//   location: "Handigaun",
// };

// //change value
// info.age = 40;
// console.log(info.age);

// //delete value, key
// delete info.age;
// console.log(info);

// let info = {
//   name: "ram",
//   favFruits: ["apple", "banana", "mango"],
//   location: {
//     country: "nepal",
//     province: "bagmati",
//     city: "ktm",
//   },
//   age: () => {
//     console.log("my age is 21 ");
//   },
// };

// console.log(info.name);
// console.log(info.favFruits[1]);
// info.age();

// console.log(info.favFruits[2]);
// console.log(info.location.city);

//ALIAS

// let info = [
//   { name: "earphone", price: 2000 },
//   { name: "mouse", price: 500 },
//   { name: "keyboard", price: 1000 },
// ];

// let prices = info.map((value, index) => {
//   return value.price;
// });

// console.log(prices);

// let total = prices.reduce((previos, current) => {
//   return previos + current;
// }, 0);

// console.log(total);

// let sortedPrice = info.sort((a, b) => {
//   return a.price - b.price;
// });

// console.log(sortedPrice);

// CONVERT OBJECT INTO ARRAY
//use OBject.key(object)

// let info = {
//   name: "ram",
//   age: 21,
//   location: "ktm",
// };

// let output = Object.keys(info);
// console.log(output);
// let output1 = Object.values(info);
// console.log(output1);

// //array of key & value
// let output2 = Object.entries(info);
// console.log(output2);

// CONVERT ARRAY INTO OBJECTS
// let info = [
//   ["name", "ram"],
//   ["age", 21],
//   ["location", "ktm"],
// ];

// let output = Object.fromEntries(info);
// console.log(output);

//MATH METHOD

// console.log(Math.random()); //0-1 values
// console.log(Math.random() * 100); //0-100
// console.log(Math.ceil(1.23)); //gives 2
// console.log(Math.floor(1.23)); //gives 1

// console.log(Math.random());

let randomNumber = Math.random() * 100;
console.log(randomNumber);

let fixedNo = Math.floor(randomNumber);
console.log(fixedNo);
