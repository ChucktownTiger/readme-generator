// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs'
import util from "util"
import generateMarkdown from "./utils/generateMarkdown.js"
const writeFile= util.promisify(fs.writeFile);
const readmeLoc = "./dist/README.md"

// TODO: Create an array of questions for user input
const questions = () =>{

return inquirer
    .questions([
        {   
            type: "input",
            name: "title",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project!"
        },
        {   type: "input",
            name: "installation",
            message: "Are there any installation steps?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the intended purpose of the project?"
        },
        {
            type: "input",
            name: "contributors",
            message: "Who all contributed to the project?"
        },
        {
            type: "list",
            name: "license",
            message: "Select any licenses used",
            choices: [
                "ISC",
                "MIT",
                "Mozilla",
                "Apache",
                "Academic"
            ]
        },

        {
            type: "input",
            name: "tests",
            message: "Did you include any tests?"
        },
        {
            type: "input",
            name: "questions",
            message: "What steps should I do if there are any problems?"
        },
        {
            type: "input",
            name: "githubName",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address",
        }
    ])
 }

 async function init() { 
    try {
        const userAnswers = await questions();
        const generateReadme = generateMarkdown(userAnswers);
        await writeFile(readmeLoc, generateReadme)
        console.log("Your readme has been created! It can be found in the dist folder!")
    }   catch(err) {
        console.log(err);
        }
} 

init();


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
