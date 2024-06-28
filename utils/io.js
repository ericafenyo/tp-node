// Define a readline interface for input and output stream.
const readline = require("readline");

const stream = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = stream;
