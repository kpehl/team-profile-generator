// Dependencies
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile} = require('./utils/generate-site');

// Prompt the user for details about the team members
const promptManager = () => {
    const teamData = [];
    console.log (`
    ===============
    Add the Manager
    ===============
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Enter the manager's employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the manager's email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Enter the manager's office number",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        },
    ])
};

// Prompt the user for details about team members
const buildTeam = teamData => {
    if (!teamData.members) {
        teamData.members = [];
    }
    console.log (`
    =====================
    Add a Team Member
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: "Would you like to:",
            choices: ['1. Add an Engineer', '2. Add an Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter an employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's GitHub user name",
            when: answers => answers.type === '1. Add an Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub user name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            when: answers => answers.type === '2. Add an Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'newTeamMember',
            message: "Would you like to add another team member?",
        }
    ])
    // add the new team member to the array and add a new team member if desired
    .then( memberData => {
        teamData.members.push(memberData);
        if (memberData.newTeamMember) {
            buildTeam(teamData)
        }
        else{ 
            console.log(teamData)
            return createTeamArray(teamData) 
        };
    });
};

// Create the employee objects using the constructors
const createTeamArray = teamData => {
    // Notify the user that the team is being finalize
    console.log('Finalizing Team')
    // create the manager object
    const manager = new Manager(teamData.managerName,teamData.managerId,teamData.managerEmail,teamData.managerOffice)
    // if there are engineers on the team, create an engineer object for each of them, otherwise create an empty array
    let engineers = teamData.members.filter(member => {return member.type.includes('1')})
        engineerObjs = engineers.map(function(engineer) { 
            const teamMember = new Engineer(engineer.name,engineer.id,engineer.email,engineer.github)
            return teamMember;
        });
    // if there are interns on the team, create an intern object for each of them, otherwise, create an empty array
    let interns = teamData.members.filter(member => {return member.type.includes('2')})
        internObjs = interns.map(function(intern) { 
            const teamMember = new Intern(intern.name,intern.id,intern.email,intern.school)
            return teamMember;
         });

    const teamArray = [];
    teamArray.push(manager,...engineerObjs,...internObjs);
    console.log(teamArray);
    // console.log(teamArray[0].name)
    return teamArray
}

// Create a team: ask about the manager, prompt for other team members, generate the page template data, write the file, and copy the CSS
promptManager()
    .then(buildTeam)
    .then((teamArray) => {
        return generatePage(teamArray)
    })
    // .then(pageHTML => {
    // return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    // console.log(writeFileResponse.message);
    // return copyFile();
    // })
    // .then(copyFileResponse => {
    // console.log(copyFileResponse.message);
    // })

    .catch(err => {
    console.log(err);
    });
