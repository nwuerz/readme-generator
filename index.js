const fs = require('fs');
const inquirer = require("inquirer");
const axios = require("axios");

//prompt user for info 
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
        type: "input",
        name: "installCommand",
        message: "what kind of command should be run to install dependencies?",
    },
    {
        type:"input",
        name:"contributing",
        message:"what does the user need to know about contributing to the repo?"
    },
    {
        type:"input",
        name:"testCommand",
        message:"what command should be run in order to run tests?"
    },
    //if you have any quesions about the repo,open an issue or contact "username" directly @ "user email"
])
.then(function(info) {
    //save user input to const

    const {username, project, description, license, installCommand, contributing, testCommand } = info
    
    // create option with the badge options

    // const userLicense = {
    //     MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    //     Appache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    //     GPL: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    //     BDS: "",
    //     none:"",
    // }

    //axios call using user input to grab email and user avatar
    require('dotenv').config();
    const url = `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;

    axios.get(url).then(function(res) {
        const userAvatar = res.data.avatar_url;
        const userEmail = res.data.email;
    
    // create readme using info above /\/\/\
    const newReadMe = 
    `## Description
___
${project}

## Table of Contents
___
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
## Installation
___
${installCommand}

## Usage
___
${description}

## License
___
${license}

## Contributing
___
${contributing}

## Tests
___
${testCommand}

## Questions
___
[logo]:${userAvatar}
If you have any questions about the repo, open an issue or contact directly at ${userEmail}.`;

    fs.writeFile("newReadMe.md", newReadMe, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");

        });
    });

});

