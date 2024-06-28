const stream = require("../utils/io");

const printInput = () => {
  stream.question("Enter anything: (or 'exit' to close the program)", (value) => {
    if (value !== "exit") {
      console.log(`Value ${value}!`);
      printInput();
    } else {
      stream.close();
    }
  });
};

printInput();
