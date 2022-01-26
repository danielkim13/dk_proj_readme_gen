// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkDown = require("./utils/generateMarkdown");

// TODO: Create an array of answers gathered by for userPrompt
// const answerArray = []; not gonna push it into array since an object w/ keys will be made by inquirer

const userPrompt = () => {
  return inquirer.prompt([
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
      message: "Choose your license? (Required)",
      choices: ["ISC", "MIT", "Apache 2.0", "GNU GPLv2", "GNU GPLv3", "None"],
      default: "None",
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
  ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile(data) {
  fs.writeFile("./dist/README.md", genMarkDown(data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README file has been created!");
    }
  });
}
// TODO: Create a function to initialize app
userPrompt().then((userResponse) => writeToFile(userResponse));
