var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "what is your username?"
    },
    {
        type: "input",
        name: "project",
        message: "what is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "please write a short description of your project:",
    },
    {
        type: "checkbox",
        message: "what kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: 
    }
]);