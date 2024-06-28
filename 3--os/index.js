const stream = require("../utils/io");
const os = require("os");

console.log("Select a number (1-6) to display details: (or 'exit' to close the program)");
console.log("1. OS CPU architecture");
console.log("2. Free memory of the system");
console.log("3. OS Platform");
console.log("4. Information about the current user");
console.log("5. Path to the temp folder");
console.log("6. Hostname of the operating system");

stream.on("line", (input) => {
  switch (input) {
    case "1":
      console.log(`The CPU architecture is ${os.arch()}`);
      break;
    case "2":
      console.log(`The free memory of the system is ${os.freemem()}`);
      break;
    case "3":
      console.log(`The OS platform is ${os.platform()}`);
      break;
    case "4":
      console.dir(`The information about the current user is ${JSON.stringify(os.userInfo())}`);
      break;
    case "5":
      console.log(`The path to the temp folder is ${os.tmpdir()}`);
      break;
    case "6":
      console.log(`The hostname of the operating system is ${os.hostname()}`);
      break;
    case "exit":
      stream.close();
      break;
    default:
      console.log("Invalid input!, please try again.");
      break;
  }
});
