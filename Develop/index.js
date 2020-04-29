const inquirer = require("inquirer");
const fs = require('fs');



inquirer.prompt ( [
  {
    message:"What's your project name?",
    name: "project",
    type:"input"
},
{
    message:"Tell me about your project",
    name: "description",
    type:"input"
},
{
    message:"Table of Contents",
    name: "contents",
    type:"input"
},
{
    message:"What is this apps intended usage?",
    name: "usage",
    type:"input"
},
{
  message:"Whats your github url?",
  name: "github",
  type:"input"
}

])

.then(function(answers){
  console.log(answers)});

function writeToFile(fileName, data) {
}

function init() {

}

init();
