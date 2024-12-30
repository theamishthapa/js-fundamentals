for (let i = 0; i < 5; i++) {
  console.log(i);
}

// initialization ; condition ; after thought

// the initialization only runs at first
let ouput = Array.map((value, index) => {
  return value * 2;
});
console.log(output);
