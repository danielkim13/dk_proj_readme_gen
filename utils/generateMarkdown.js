// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU GPLv2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && license !== "None") {
    return `[License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== "None") {
    return `## License
      ${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function genMarkDown(data) {
  const { title, description, installation, usage, license, contributing, tests, gitHub, email } = data;

  return `# ${title}

${renderLicenseBadge(license)}

## Description
  
  ${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* ${renderLicenseLink(license)}
* [Contributing](#Contributing)
* [Test](#test)
* [Question](#question)

## Installation
  
  ${installation}

## Usage
  
  ${usage}

${renderLicenseSection(license)}

## Contributing
  
  ${contributing}

## Test
  
  ${tests}

## Question
Please contact me if you have any questions! <br />
GitHub: [${gitHub}](https://github.com/${gitHub}) <br />
E-mail address: ${email}
`;
}

module.exports = genMarkDown;
