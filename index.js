const inquirer = require('inquirer');
const fs= require("fs")

const promt=()=>
inquirer
  .prompt([
      {
    type: "input",      
    name: 'input',
    message: 'what is you name',
    default: "[Git hub name]",
      },
    {
    type: "input",
    name: 'input',   
    message: 'What is your email',
    default: "[Git hub profile email]",
    },
    {
    type: "input",
    title: 'imput',
    message: 'name of project',
    },
    {
    type: 'imput',
    message: 'what command should be run when instaling a package',
    default: "npm i",
    },
])

  .then(answers => {
    // Use user feedback for... whatever!!
    console.log (answers)
  })
  