// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require("fs")
var path = require("path")
var {
    generateMarkdown

} = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"

    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?", 
        
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information for your project?"

    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contributing guidelines for your project?",

    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions for your project?",

    },
    {
        type: "input",
        name: "instructions",
        message: "What are the test instructions for your Project?",

    },
    {
        type: "list",
        name: "license",
        message: "What license do you want to use for your project?",
        choices: [
            {
                name:"license-1",
                value: "license-1",
                short: "l-1"

            },
            {
                name:"license-2",
                value: "license-2",
                short: "l-2"

            },
            {
                name:"license-3",
                value: "license-3",
                short: "l-2"

            }

        ]    
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"

    },
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 

];
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var createFile = fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
async function init() {
    const input = await inquirer.prompt(questions)
    console.log(input) 

    const text = `
# ${input.title}
${input.license && `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`}

  

## Table of Contents 
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${input.description}

## Installation
${input.installation}

## Usage
${input.usage}

## License
License ${input.license}

## Contributing
${input.contributing}

## Tests
${input.tests}

## Questions
Github: [https://github.com/${input.github}](https://github.com/${input.github})
Email: [${input.email}](${input.email})

    `

    writeToFile(path.join(__dirname, "output/README.md"), text) 
}

// Function call to initialize app
init();
