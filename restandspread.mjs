// rest operator ans spread operator (...)

// let [a, b, ...c] = [1, 2, 3, 4, 5, 65, 7, 7];
// console.log(a, b, c);
//rest operator is always placed at the last parameter

//spread operator

// spread operator are wrapper opener

// let name = ["ram", "shyam", "mohan"];
// let num = [1, 2, 3, 4, 5];

// let output = ["n9", ...name, 9, 10, "harry", ...num, 1, 2];
// console.log(output);

let info = {
  name: "ram",
  age: 23,
  city: "banglore",
};

let output = { province: "bagmati", ...info, school: "trinity" };
console.log(output);
