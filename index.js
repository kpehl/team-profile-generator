// Dependencies
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const generatePage = require('./src/page-template');
const { writeFile, copyFile} = require('./utils/generate-site');

const promptManager = () => {
    console.log(`
    ============
    Team Manager
    ============
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
        }
        // {
        //     type: 'confirm',
        //     name: 'confirmAbout',
        //     message: 'Would you like to enter some information about yourself for an "About" section?',
        //     default: true
        // },
        // {
        //     type: 'input',
        //     name: 'about',
        //     message: 'Provide some information about yourself:',
        //     when: ({ confirmAbout }) => {
        //         if (confirmAbout) {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
        // }
    ]);
};


const teamSelection = teamData => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'newTeamMember',
            message: "Would you like to:",
            choices: ['1. Add an Engineer', '2. Add an Intern', '3. Finish building my team']
        }
    ])
    .then( answer => {
        if (answer.newTeamMember.includes('1')) {promptEngineer(teamData)}
        else if (answer.newTeamMember.includes('2')) {promptIntern(teamData)}
        else {
            console.log('Finalizing Team')
            createTeamArray(teamData)
        }
    })
}

const createTeamArray = teamData => {
    const manager = new Manager(teamData.managerName,teamData.managerId,teamData.managerEmail,teamData.managerOffice)
    console.log(manager)
    console.log(teamData)
}

const promptEngineer = teamData => {
    if (!teamData.engineers) {
        teamData.engineers = [];
    }
    console.log (`
    =====================
    Add a New Engineer
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
    ])
    .then(memberData => {
        teamData.engineers.push(memberData);
        teamSelection(teamData)
    })
};

const promptIntern = teamData => {
    if (!teamData.interns) {
        teamData.interns = [];
    }
    console.log (`
    =====================
    Add a New Intern
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        }
    ])
    .then(memberData => {
        teamData.interns.push(memberData);
        teamSelection(teamData)
    })
};


promptManager()
  .then(teamSelection)
//   .then(promptEngineer)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
    // .then(teamData => console.log(teamData))
    // .then( teamData => createTeamArray(teamData))
//   });