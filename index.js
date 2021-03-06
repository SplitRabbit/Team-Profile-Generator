const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const Employee = require('./lib/Employee.js');
const html = require("./src/htmlTemp");
const writeFileAsync = util.promisify(fs.writeFile);

//list of manager questions for inquirer
const questions = [
    {
        type: "list",
        name: "role",
        message: "What is the Employees Role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "name",
        message: "What is the Employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their Employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?"
    },
    //conditional questions depending on role
    {
        type: "input",
        name: "officenumber",
        message: "What is their Office Number?",
        when: (answers) => answers.role === "Manager"
    },
    {
        type: "input",
        name: "Github",
        message: "What is their Github Username?",
        when: (answers) => answers.role === "Engineer"
    },
    {
        type: "input",
        name: "school",
        message: "What school do they attend?",
        when: (answers) => answers.role === "Intern"
    },
    //recursive question to reloop through questions 
    {
        type: "confirm",
        name: "addanother",
        message: "Would you like to add another Employee?"
    },
];

//Array for team objects
let teamArray = [];
let teamString = ``;

//promptuser function
function promptUser() {
    console.log("Enter Employee Information Here.");
    return inquirer.prompt(questions).then((answers) => {
        console.log(answers)
    //conditional for pushing new employee objects into teamArray
        if (answers.role === "Manager") {
            const manager = new Manager(answers.name,answers.id,answers.email,answers.officenumber);
            teamArray.push(manager);
        } else if (answers.role === "Engineer") {
            const engineer = new Engineer(answers.name,answers.id,answers.email,answers.Github);
            teamArray.push(engineer);
        } else {
            const intern = new Intern(answers.name,answers.id,answers.email,answers.school);
            teamArray.push(intern);
        };
    //recursive function to decide whether or not to loop through again
        if (answers.addanother) {
            return promptUser();
        } else {
            return answers;
        }
    });
};

//createPage function for html
function createPage() {
    for (let i = 0; i<teamArray.length; i++) {
        teamString = teamString + html.generateCard(teamArray[i]);
    }

    let finalHTML = html.generateHTML(teamString);
    writeFileAsync("./dist/index.html", finalHTML);
    console.log("index.html file created successfully");
};

// Create a function to initialize app
async function init() {
    try {
    //ask questions
    const answers =  await promptUser();
    console.log(teamArray);

    //create page
    createPage();
  }   catch(err) {
    console.log(err);
  }
};

init();