const assert = require("assert");
const calculator = require("../calculator");
describe("Calculator test", () => {
  it("check addition functionality", () => {
    assert.equal(calculator.add(1, 2, 3, 4, 5), 15);
  });
  it("check multiplication functionality", () => {
    assert.equal(calculator.multiply(1, 2, 3, 4, 5), 120);
  });
});
