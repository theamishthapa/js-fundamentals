// JSON : JAVASCRIPT OBJECT NOTATION

// JSON.Stringify() : converts a js object to a json string

// JSON.parse() : converts a json string to a js obj

let info = {
  name: "amish",
  age: 20,
  location: "Handigaun",
};

let output = JSON.stringify(info);
console.log(output);

let name1 = JSON.parse(output);
console.log(name1);
