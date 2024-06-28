const fs = require("fs");
const { Console } = require("console");

const FileLogger = new Console({
  stdout: fs.createWriteStream("logs.txt"),
  stderr: fs.createWriteStream("errors.txt"),
});

Logger = {
  debug: (message) => {
    const date = new Date().toISOString();
    const logMessage = `${date} - DEBUG: ${message}`;
    FileLogger.log(logMessage);
    console.log(logMessage);
  },
  error: (message) => {
    const date = new Date().toISOString();
    const logMessage = `${date} - ERROR: ${message}`;
    FileLogger.error(logMessage);
    console.log(logMessage);
  },
};
