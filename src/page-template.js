const generateManagerCard = teamArray => {
  const manager = teamArray.filter(({ role }) => role === "Manager");
  if (manager == []) return ''
  return `
  ${manager
    .map(({ name, id, email, role, officeNumber }) => {
      return `
      <div class = "card">
        <header class = "card-header">
          <p class = "card-header-title">
            ${name} \n <span class = "icon"><i class="fas fa-mug-hot"></i></span>${role}
          </p>
        </header>
        <div class = "card-content">
          <ul>
            <li>Employee ID: ${id}</li>
            <li>Email: <a href = "mailto:${email}">${email}</a></li>
            <li>Office Number: ${officeNumber}</li>
          </ul>
        </div>
      </div>
    `;
    })
    .join('')}
    `
  }

const generateEngineerCards = teamArray => {
  const engineers = teamArray.filter(({ role }) => role === "Engineer");
  if (engineers ==[]) return ''
  return `
    ${engineers
      .map(({ name, id, email, role, github }) => {
        return `
        <div>
          <h2>
          ${name}
          <br>
          <i class="fas fa-glasses"></i>${role}
          </h2>
          <ul>
            <li>Employee ID: ${id}</li>
            <li>Email: <a href = "mailto:${email}">${email}</a></li>
            <li>GitHub Profile: <a href = "https://www.github.com/${github}/">${github}</a></li>
          </ul>
        </div>
      `;
      })
      .join('')}
      `
    }
const generateInternCards = teamArray => {
  const interns = teamArray.filter(({ role }) => role === "Intern");
  if (interns == []) return ''
  return `
      ${teamArray
        .filter(({ role }) => role === "Intern")
        .map(({ name, id, email, role, school }) => {
          return `
          <div>
            <h2>
            ${name}
            <br>
            <i class="fas fa-user-graduate"></i>${role}
            </h2>
            <ul>
              <li>Employee ID: ${id}</li>
              <li>Email: <a href = "mailto:${email}">${email}</a></li>
              <li>School: ${school}</li>
            </ul>
          </div>
        `;
        })
        .join('')}
        `
}

module.exports = templateData => {
    const teamArray = templateData;

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
      <div class = "container">
        <div class = "columns">
          <div class = "column is-3">${ generateManagerCard(teamArray) } ${ generateEngineerCards(teamArray) } ${ generateInternCards(teamArray) }</div>
        </div>
      </div>
    </main>
  </body>
  </html>
  `;
};