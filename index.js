// Dependencies
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile} = require('./utils/generate-site');

// Prompt the user for details about the team manager
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
    ]);
};

// Ask the user if they would like to add another team member, direct them to the correct prompts, and finalize the team when done
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
        if (answer.newTeamMember.includes('1')) {return promptTeamMember(teamData, answer.newTeamMember)}
        else if (answer.newTeamMember.includes('2')) {return promptTeamMember(teamData, answer.newTeamMember)}
        else {
            console.log('Finalizing Team')
            return createTeamArray(teamData);
        }
    })
}

// Create the employee objects using the constructors
const createTeamArray = teamData => {
    // create the manager object
    const manager = new Manager(teamData.managerName,teamData.managerId,teamData.managerEmail,teamData.managerOffice)
    // if there are engineers on the team, create an engineer object for each of them, otherwise create an empty array
    let engineers = [];
    if (teamData.engineers) {
        engineers = teamData.engineers.map(function(engineer) { 
            const teamMember = new Engineer(engineer.name,engineer.id,engineer.email,engineer.github)
            return teamMember;
        });
    }
    // if there are interns on the team, create an intern object for each of them, otherwise, create an empty array
    let interns = [];
    if (teamData.interns) {
        interns = teamData.interns.map(function(intern) { 
            const teamMember = new Intern(intern.name,intern.id,intern.email,intern.school)
            return teamMember;
         });
    }

    const teamArray = [];
    teamArray.push(manager,...engineers,...interns);
    // console.log(teamArray);
    // console.log(teamArray[0].name)
    return teamArray
}

// Prompt the user for details about an engineer or an intern
const promptTeamMember = (teamData, type) => {
    if (!teamData.engineers) {
        teamData.engineers = [];
    }
    if (!teamData.interns) {
        teamData.interns = [];
    }
    if (type.includes('1')){
        console.log (`
        =====================
        Add a New Engineer
        =====================
        `);
    } else {
        console.log (`
        =====================
        Add a New Intern
        =====================
        `);
    }
    return inquirer.prompt([
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
            when: type.includes('1'),
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
            when: type.includes('2'),
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    ])
    // add the new team member to the appropriate array
    .then(memberData => {
        if (type.includes('1')) {
            teamData.engineers.push(memberData);
        } else {
            teamData.interns.push(memberData);
        }
        return teamSelection(teamData)
    })
};

// Create a team: ask about the manager, prompt for other team members, generate the page template data, write the file, and copy the CSS
promptManager()
    .then(teamSelection)
    // .then(teamArray => {
    //     console.log(teamArray)
    // })
    .then((teamArray) => {
        return generatePage(teamArray)
    })
    .then(pageHTML => {
    return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
    console.log(writeFileResponse.message);
    return copyFile();
    })
    .then(copyFileResponse => {
    console.log(copyFileResponse.message);
    })

    .catch(err => {
    console.log(err);
    });