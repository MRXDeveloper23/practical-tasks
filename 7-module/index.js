//Regular expression
const string = "ahb acb aeb aeeb adcb axeb";
console.log(string.match(/a.b/g));

const numberString = "2 + 3 223 2223";
console.log(numberString.match(/2\s\+\s3/g));

const today = new Date();
const day = today.getDate();
const month = today.toLocaleString("default", {
  month: "long",
});
const year = today.getFullYear();
console.log(`Day: ${day}\nMonth: ${month}\nYear: ${year}`);
