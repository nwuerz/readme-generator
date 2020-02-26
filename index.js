const fs = require('fs');
const inquirer = require("inquirer");
const axios = require("axios");


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
        name: "command",
        message: "what kind of command should be run to install dependencies?",
    },
    {
        type:"input",
        name:"contributing",
        message:"what does the user need to know about contributing to the repo?"
    },
    {
        type:"input",
        name:"tests",
        message:"what command should be run in order to run tests?"
    },
    //if you have any quesions about the repo,open an issue or contact "username" directly @ "user email"
])
.then(function({username}) {
    require('dotenv').config();
    const url = `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;

    axios.get(url).then(function(res) {
        console.log(res.data.avatar_url);
        const userAvatar = res.data.avatar_url;
        const userEmail = res.data.email;
    });
});

// create file

