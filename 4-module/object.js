const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const car = {
  color: "black",
};
car.color = "green";
car.power = () => {
  console.log("Engine power");
};
const acceptedItems = (pears, apples) => {
  return pears + apples;
};
const terminal = {
  name: "Khurmatillo",
  defineName() {
    readline.question("Enter your name: ", (input) => {
      if (input == this.name) console.log("Hello " + input);
      else console.log("There is no such name");
      readline.close();
    });
  },
};
// terminal.defineName();

const typeOfArgument = (arg) => {
  console.log(typeof arg);
};
// typeOfArgument("abcs");

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  let ans = false;
  if ((num - 1) % 6 === 0) ans = true;
  else if ((num + 1) % 6 === 0) ans = true;
  return ans;
}
// console.log(isPrime(11));
module.exports = isPrime;
