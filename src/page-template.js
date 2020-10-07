const generateManagerCard = templateData => {
  const manager = templateData.filter(({ role }) => role === "Manager");
  // const manager = teamArray[0];
  if (manager == []) return ''
  return `
  ${manager
    .map(({ name, id, email, role, officeNumber }) => {
      return `
      <div class = "column is-3">
        <div class = "card">
          <header class = "card-header">
            <p class = "card-content">
              ${name} <br> <span class = "icon"><i class="fas fa-mug-hot"></i></span>${role}
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
      </div>
    `;
    })
    .join('')}
    `
  }

const generateEngineerCards = templateData => {
  const engineers = templateData.filter(({ role }) => role === "Engineer");
  // const engineers = teamArray[1];
  if (engineers ==[]) return ''
  return `
    ${engineers
      .map(({ name, id, email, role, github }) => {
        return `
        <div class = "column is-3">
        <div class = "card">
          <header class = "card-header">
            <p class = "card-content">
              ${name} <br> <span class = "icon"><i class="fas fa-glasses"></i></span>${role}
            </p>
            </header>
            <div class = "card-content">
              <ul>
                <li>Employee ID: ${id}</li>
                <li>Email: <a href = "mailto:${email}">${email}</a></li>
                <li>GitHub Profile: <a href = "https://www.github.com/${github}/">${github}</a></li>
              </ul>
            </div>
          </div>
        </div>
      `;
      })
      .join('')}
      `
    }
const generateInternCards = templateData => {
  const interns = templateData.filter(({ role }) => role === "Intern");
  // const interns = teamArray[2];
  if (interns == []) return ''
  return `
      ${templateData
        .filter(({ role }) => role === "Intern")
        .map(({ name, id, email, role, school }) => {
          return `

          <div class = "column is-3">
          <div class = "card">
            <header class = "card-header">
              <p class = "card-content">
                ${name} <br> <span class = "icon"><i class="fas fa-user-graduate"></i></span>${role}
              </p>
              </header>
              <div class = "card-content">
                <ul>
                  <li>Employee ID: ${id}</li>
                  <li>Email: <a href = "mailto:${email}">${email}</a></li>
                  <li>School: ${school}</li>
                </ul>
              </div>
            </div>
          </div>
        `;
        })
        .join('')}
        `
}

module.exports = templateData => {
    console.log('pagetemplate:')
    console.log(templateData);

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
        <div class = "columns is-multiline">
          ${ generateManagerCard(templateData) } 
          ${ generateEngineerCards(templateData) } 
          ${ generateInternCards(templateData) }
        </div>
      </div>
    </main>
  </body>
  </html>
  `;
};