const stream = require("../utils/io");

console.log("Enter anything: (or 'exit' to close the program)");

stream.on("line", (value) => {
  if (value !== "exit") {
    console.log(`Value: ${value}!`);
  } else {
    stream.close();
  }
});
