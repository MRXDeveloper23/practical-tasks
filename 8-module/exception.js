//Exception handling
try {
  console.log(a);
  let a = 3;
} catch (err) {
  console.log("'let must be declared' before use");
}

try {
  if (1 / 0 == Infinity) {
    throw new Error("cannot be divided by zero");
  }
} catch (err) {
  console.log(err.message);
}
