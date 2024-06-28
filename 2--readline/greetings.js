const stream = require("../utils/io");

stream.question("Enter your name: ", (value) => {
  console.log(`Hello ${value}!`);
  stream.close();
});
