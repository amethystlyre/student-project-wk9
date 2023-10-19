const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
      },
    {
      type: 'input',
      message: 'What is your favourite food?',
      name: 'favFood',
    },
    {
      type: 'input',
      message: 'What is your Github account name?',
      name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your Linkedin account url?',
        name: 'linkedin',
      },
  ])
  .then( function (response) {
    //console.log(response)
    fs.writeFile('index.html', generateHTML(response), (err) => err ? console.error(err) : console.log('Success!'));
}
  );

let generateHTML = function (responseObj){
    const {username,location,favFood,gitHub,linkedin} = responseObj;
    let HtmlTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Profile</title>
        <!-- Add Bootstrap CSS link here -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-8">
                    <h1>${username}</h1>
                    <p><strong>Location:</strong> ${location}</p>
                    <p><strong>Bio:</strong> My favourite food is ${favFood}!</p>
                    <p><strong>Linkedin account:</strong> ${linkedin}</p>
                    <p><strong>Github account:</strong> ${gitHub}</p>
                    <p>
                        <!-- Social Media Links -->
                        <a href="https://www.linkedin.com/in/${linkedin}" class="btn btn-primary" target="_blank">LinkedIn</a>
                        <a href="https://github.com/${gitHub}" class="btn btn-secondary" target="_blank">GitHub</a>
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Add Bootstrap JS here -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </html>`;

    return HtmlTemplate;
}
