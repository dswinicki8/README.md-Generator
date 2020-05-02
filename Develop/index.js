const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');



inquirer.prompt([
  {
    message: "What's your project name?",
    name: "project",
    type: "input"
  },
  {
    message: "Tell me about your project",
    name: "description",
    type: "input"
  },
  {
    message: "Table of Contents",
    name: "contents",
    type: "input"
  },
  {
    message: "Installation",
    name: "installation",
    type: "input"
  },
  {
    message: "What is this apps intended usage?",
    name: "usage",
    type: "input"
  },
  {
    message: "License",
    name: "License",
    type: "input"
  },
  {
    message: "Badges",
    name: "badges",
    type: "input"
  },
  {
    message: "Contributors",
    name: "contributors",
    type: "input"
  },
  {
    message: "Tests",
    name: "tests",
    type: "input"
  },
  {
    message: "Whats your github url?",
    name: "github",
    type: "input"
  }

])

  .then(function (answers) {
    console.log(answers);


    let userInfo = answers.github;
    // console.log(userInfo);

    function searchUser() {

      console.log(userInfo);

      axios
        .get("https://api.github.com/users/" + userInfo)
        .then(function (res) {
          console.log(res.data);
        });
    };
    searchUser();


    let document = `
  ## Title:
  ${answers.project}
  ## Description of Application:
  ${answers.description}
  ## Table of Contents:
  ${answers.contents}
  ## Installation:
  ${answers.installation}
  ## Usage:
  ${answers.usage}
  ## License:
  ${answers.license}
  ## Badges:
  ${answers.badges}
  ## Contributing:
  ${answers.contributors}
  ## Tests:
  ${answers.tests}
  ## Github
 

  `;
    searchInfo();


    fs.writeFile("READMEnew.md", document, function (err, data) {
      if (err) {
        console.log(err);
      }
    })
  });


function init() {

}

init();

