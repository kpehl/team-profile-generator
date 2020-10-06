const generateCards = teamArray => {
  return `
  <div>
  ${teamArray
    .filter(({ role }) => role === "Manager")
    .map(({ name, id, email, role, officeNumber }) => {
      return `
        <h2>
        ${name}
        ${role}
        </h2>
        <ul>
          <li>Employee ID: ${id}</li>
          <li>Email: <a href = "mailto:${email}">${email}</li>
          <li>Office Number: ${officeNumber}</li>
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
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <header>
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
    </header>
    <main>
          <p>${ generateCards(teamArray) }</p>
    </main>
  </body>
  </html>
  `;
};