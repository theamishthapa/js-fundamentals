//ARROW FUNCTIONS
let fun1 = () => {
  console.log("i am an arrow function");
};

fun1();

let fun2 = (a, b) => {
  let c = a + b;
  return c;
};

let output = fun2(4, 6);
console.log(output);
