const exec = require("child_process").exec;
const os = require("os");

if (os.type() === "Darwin") exec("cd ./ios && pod update && cd ..");
else console.log("CocoaPods is not supported in this OS: " + os.type());
