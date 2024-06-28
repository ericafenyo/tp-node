const stream = require("../utils/io");

// Input a file name and read its content if it exists
stream.question("Enter the name of the file to read: ", function (fileName) {
  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) {
      console.error("An error occurred while reading the file:", error);
      stream.close();
      return;
    }
    console.log("File content for ", fileName, ":");
    console.log(data);
    stream.close();
  });
});
