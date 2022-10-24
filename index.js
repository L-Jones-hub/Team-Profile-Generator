const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Employee = require(`./lib/Employee`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const { isGeneratorFunction } = require("util/types");

let employeeArray = [];

const manQuestions = [
  {
    type: `input`,
    message: `What is the manager's name?`,
    name: `name`,
  },
  {
    type: `input`,
    message: `What is the manager's employee ID number?`,
    name: `ID`,
  },
  {
    type: `input`,
    message: `What is the manager's email address?`,
    name: `email`,
  },
  {
    type: `input`,
    message: `What is the manager's office number?`,
    name: `office`,
  },
  {
    type: `list`,
    message: `Would you like to add anymore team members?`,
    choices: [`Manager`, `Engineer`, `Intern`, `No, I'm done.`],
    name: `addMore`,
  },
];

const engQuestions = [
  {
    type: `input`,
    message: `What is the engineer's name?`,
    name: `name`,
  },
  {
    type: `input`,
    message: `What is the engineer's employee ID number?`,
    name: `ID`,
  },
  {
    type: `input`,
    message: `What is the engineer's email address?`,
    name: `email`,
  },
  {
    type: `input`,
    message: `What is the engineer's GitHub username?`,
    name: `github`,
  },
  {
    type: `list`,
    message: `Would you like to add anymore team members?`,
    choices: [`Manager`, `Engineer`, `Intern`, `No, I'm done.`],
    name: `addMore`,
  },
];

const intQuestions = [
  {
    type: `input`,
    message: `What is the intern's name?`,
    name: `name`,
  },
  {
    type: `input`,
    message: `What is the intern's employee ID number?`,
    name: `ID`,
  },
  {
    type: `input`,
    message: `What is the intern's email address?`,
    name: `email`,
  },
  {
    type: `input`,
    message: `What is the intern's school?`,
    name: `school`,
  },
  {
    type: `list`,
    message: `Would you like to add anymore team members?`,
    choices: [`Manager`, `Engineer`, `Intern`, `No, I'm done.`],
    name: `addMore`,
  },
];

function createManager(manQuestions) {
  inquirer.prompt(manQuestions).then((response) => {
    employeeArray.push(
      new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      )
    );
    switch (response.addMore) {
      case `Engineer`:
        createEngineer(engQuestions);
        return;
      case `Intern`:
        createIntern(intQuestions);
        return;
      case `No, I'm done.`:
        console.log(employeeArray);
        console.log(employeeArray[0].getPosition());
        console.log(employeeArray[0].name);
        isGeneratorFunction.generateHTML(employeeArray);
        return;
      default:
        console.log(`Invalid response.`);
    }
  });
}

function createEngineer(engQuestions) {
  inquirer.prompt(engQuestions).then((response) => {
    employeeArray.push(
      new Engineer(response.name, response.id, response.email, response.github)
    );
    switch (response.addMore) {
      case `Engineer`:
        createEngineer(engQuestions);
        return;
      case `Intern`:
        createIntern(intQuestions);
        return;
      case `No, I'm done.`:
        console.log(employeeArray);
        console.log(employeeArray[0].getPosition());
        console.log(employeeArray[0].name);
        generateHTML(employeeArray);
        return;
      default:
        console.log(`Invalid response.`);
    }
  });
}

function createIntern(intQuestions) {
  inquirer.prompt(intQuestions).then((response) => {
    employeeArray.push(
      new Engineer(response.name, response.id, response.email, response.school)
    );
    switch (response.addMore) {
      case `Engineer`:
        createEngineer(engQuestions);
        return;
      case `Intern`:
        createIntern(intQuestions);
        return;
      case `No, I'm done.`:
        console.log(employeeArray);
        console.log(employeeArray[0].getPosition());
        console.log(employeeArray[0].name);
        generateHTML(employeeArray);
        return;
      default:
        console.log(`Invalid response.`);
    }
  });
}

createManager(manQuestions);
