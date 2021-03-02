var inquirer = require('inquirer');
inquirer
  .prompt([
    
    (
    type: 'input',
    name: 'imput',
    message: 'what is you name',
    default: "[Git hub name]",
    ).

(
   type: 'input',
    email: 'imput',
    message: 'what is your email',
    default: "[Git hub profile email]",
    )
(
type: 'input',
title: 'imput',
message: 'README Genorator',
)
(
    type: 'input',
    command 1: 'imput',
    message: 'what command should be run when instaling a package',
    default: "npm i",
)
(
    type: 'input',
    command 2: 'imput',
    message: 'what is you n',
    default: "[Git hub name]",
)
(
    type: 'input',
    name: 'imput',
    message: 'what is you name',
    default: "[Git hub name]",
)
])

  .then(answers => {
    // Use user feedback for... whatever!!
    console.log (answers)
  })
  