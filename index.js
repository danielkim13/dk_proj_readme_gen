// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of answers gathered by for userPrompt
const answerArray = [];

const userPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of your project? (Required)",
        validate: (title) => {
          if (title) {
            return true;
          } else {
            console.log("Write your project name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: (projDesc) => {
          if (projDesc) {
            return true;
          } else {
            console.log("Write your project description!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "Provide any installation instructions required to run the application (Required)",
        validate: (installation) => {
          if (installation) {
            return true;
          } else {
            console.log("Write the installation instruction(s)!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Provide how this application can be used (Required)",
        validate: (usageInfo) => {
          if (usageInfo) {
            return true;
          } else {
            console.log("Write the application usage!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: "What is the title of your project? (Required)",
        choices: ["ISC", "MIT", "Apache 2.0", "GNU GPLv2", "GNU GPLv3"],
        default: "ISC",
      },
      {
        type: "input",
        name: "contributing",
        message: "Provide guidelines for other developers if you want them to contribute!",
        default: "Not Available",
      },
      {
        type: "input",
        name: "tests",
        message: "Provide test steps for the application!",
        default: "Not Available",
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub username? (Required)",
        validate: (gitHubName) => {
          if (gitHubName) {
            return true;
          } else {
            console.log("Write your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your e-mail address? (Required)",
        validate: (emailAddr) => {
          if (emailAddr) {
            return true;
          } else {
            console.log("Write your e-mail address!");
            return false;
          }
        },
      },
    ])
    .then((userResponse) => {
      answerArray.push(userResponse);
    });
};

userPrompt();
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
