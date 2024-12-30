// {} = block

// {
//   let a = 10;
//   console.log(a);
// }

// console.log(a);

// a variable will be know within it's block or scope

// {
// parent block
//   let a = 10;
//   {
//     //child block
//     let b = 20;
//     console.log(a);
//   }
//   console.log(b); //this will throw error
// }

// when a variable is called first ir is searched in its own block. if it is not found in its own block then it will search the variable in its parent block

// {
//   //parent block
//   let a = 10;
//   {
//     //child block
//     let a = 1;
//     console.log(a);
//   }
//   console.log(a);
// }

// a variable cant be redefined in the same block but it can be redefined in the different block

{
  //parent block
  let a = 10;
  {
    //child block
    let a = 30;
    console.log(a);
    let b = 20;
  }
}

//OOP concept
