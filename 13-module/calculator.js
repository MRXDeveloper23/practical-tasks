class Calculator {
  add(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  multiply(...numbers) {
    let product = 1;
    numbers.forEach((num) => (product *= num));
    return product;
  }
}
let calculator = new Calculator();
// console.log(calculator.add(1, 2, 3, 4, 5, 6));
// console.log(calculator.multiply(1, 2, 3, 4, 5));
module.exports = calculator;
