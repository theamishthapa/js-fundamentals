let fun1 = () => {};
let fun2 = () => {};

//higher order function
//callback function = a callback function is a functon passed into another function as an argument
fun1(fun2);

// eg .map(()=> {}) filter etc

//error handling

let error = new Error("this is an error");
throw error;
