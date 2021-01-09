const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a description of your application.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'List your Table of Content sections.',
      name: 'contents',
    },
    {
      type: 'input',
      message: 'Enter the installation information required for your application.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide the usage instructions for your project.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter any license information.',
      name: 'license',
    },
    {
      type: 'input',
      message: 'List anyone who contributed to this application.',
      name: 'contributing',
    },
    {
      type: 'confirm',
      message: 'Did you test your application?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter any questions.',
      name: 'questions',
    },
  ];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    //ask question 1, save question1 response as title
    inquirer
    .prompt(questions)
    .then((response) =>
    //   response.confirm === response.password
    //     ? console.log('Success!')
    //     : console.log('You forgot your password already?!')
    writeToFile("README.md",)
    );
    
     generateMarkdown(response)
    

    //returning our response data
    

}

// function call to initialize program
init();
