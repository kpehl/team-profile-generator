// Generate the cards for the team
const generateTeam = team => {

    // Generate a manager card
    const generateManager = manager => {
        return `
        <div class = "column is-3">
        <div class = "card">
          <header class = "card-header">
            <p class = "card-content">
                ${manager.getName()} <br> <span class = "icon"><i class="fas fa-mug-hot"></i></span><span> ${manager.getRole()}</span>
            </p>
          </header>
          <div class = "card-content">
            <ul>
              <li>Employee ID: ${manager.getId()}</li>
              <li>Email: <a href = "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li>Office Number: ${manager.getOffice()}</li>
            </ul>
          </div>
        </div>
      </div>
        `;
    };

    // Generate an engineer card
    const generateEngineer = engineer => {
        return `
        <div class = "column is-3">
        <div class = "card">
          <header class = "card-header">
            <p class = "card-content">
              ${engineer.getName()} <br> <span class = "icon"><i class="fas fa-glasses"></i></span><span> ${engineer.getRole()}</span>
            </p>
            </header>
            <div class = "card-content">
              <ul>
                <li>Employee ID: ${engineer.getId()}</li>
                <li>Email: <a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li>GitHub Profile: <a href = "https://www.github.com/${engineer.getGitHub()}/" target = "_blank">${engineer.getGitHub()}</a></li>
              </ul>
            </div>
          </div>
        </div>
        `;
    };

    // Generate an intern card
    const generateIntern = intern => {
        return `
        <div class = "column is-3">
        <div class = "card">
          <header class = "card-header">
            <p class = "card-content">
              ${intern.getName()} <br> <span class = "icon"><i class="fas fa-user-graduate"></i></span><span> ${intern.getRole()}</span>
            </p>
            </header>
            <div class = "card-content">
              <ul>
                <li>Employee ID: ${intern.getId()}</li>
                <li>Email: <a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li>School: ${intern.getSchool()}</li>
              </ul>
            </div>
          </div>
        </div>
        `;
    };

    // Set up an empty array for the cards
    const cards = [];

    // Add the manager card, filtering out the manager object from the team array provided by index.js, 
    // and using map to perform the function of generating the card above
    cards.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    // Add cards for the engineers, filtering out engineer objects from the team array, 
    // map to perform the card generation for each engineer object, and join to add each one to the array
    cards.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    // Add cards for the interns, filtering out engineer objects from the team array, 
    // map to perform the card generation for each engineer object, and join to add each one to the array
    cards.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    // Join all the cards and return the cards as a block of html that can be inserted into the webpage
    return cards.join("");

}

// Generate the webpage, inserting the cards, and export the html so it can be used by the write file function
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <header>
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
    </header>
    <main>
      <div class = "container is-centered">
        <div class = "columns is-centered is-multiline">
          ${ generateTeam(team) } 
        </div>
      </div>
    </main>
  </body>
  </html>
  `;
};