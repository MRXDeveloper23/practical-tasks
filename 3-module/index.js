//Addition
let stringPlusNumber = "abcd" + 5;
let stringPlusBoolean = "abcd" + true;
let numberPlusBoolean = 5 + false;
console.log(
  stringPlusBoolean,
  stringPlusNumber,
  numberPlusBoolean
);

//Multiplication
let stringMulBoolean = "dod" * true;
let stringMulNumber = "abcd" * 5;
let numberMulBoolean = 23 * false;
console.log(
  stringMulBoolean,
  stringMulNumber,
  numberMulBoolean
);

//Divisiion
let stringDivBoolean = "abcd" / true;
let stringDivNumber = "abcd" / 3;
let numberDivBoolean = 5 / false;
console.log(
  stringDivBoolean,
  stringDivNumber,
  numberDivBoolean
);

//Explicit type conversion
let convertToNumber = Number(true);
let convertToString = String(23);
let convertToBoolean = Boolean("sdjkjdd0");
console.log(
  convertToString,
  convertToBoolean,
  convertToNumber
);
