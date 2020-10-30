//Require file system, inquirer, and licenses.js
const fs = require("fs");
const inquirer = require("inquirer");
const licenses = require("./assets/licenses.js");
//this uses prompt method on inquirer to gather information from the user
inquirer.prompt([
  {
    //this gets the title of the project from the user
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  }, 
  {
    //this gets the description of the project from the user
    type: "input",
    name: "description",
    message: "What is the description of your project?"
  },
  {
    //this gets the installation instruction of the project from the user
    type: "input",
    name: "installation",
    message: "What is the installation instructions of your project?"
   },
   {
    //this gets the usage information of the project from the user
    type: "input",
    name: "usage",
    message: "What is the usage information of your project?"
   },
   {
    //this gets the contribution guidelines of the project from the user
    type: "input",
    name: "contribution",
    message: "What is the contribution guidelines of your project?"
   },
   {
    //this gets the test instructions of the project from the user
    type: "input",
    name: "tests",
    message: "What is the test instructions of your project?"
   },
   {
    //this gets the license that the user wants to use in a form of a list
    type: "list",
    message: "Choose a license for your application.",
    name: "license",
    choices: licenses.licenseArr
  },
  {
    //this gets the Github username of the user
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    //this gets the email of the user
    type: "input",
    name: "email",
    message: "What is your email?"
  },   
  // this is the call back function for the prompt method of the inquirer 
]).then(function(data) {
  //this assigns the name and type of file that fs will write too
  const filename = "README.md";
  //this uses node's fs to write a new readme.md file, parameters are file name, data, and err callback 
  fs.writeFile(filename, generateReadme(data), function(err) {
    //this handles errs the file system might through
    if (err) {
      //this logs an error message if the file system fails
      return console.log(err);
    }
    //this logs a success message if the file system writes a new file
    console.log("Success!");

  });
});

//this function creates the data the writes in the new readme.md file
function generateReadme(data){
    //this assigns a license badge that the user selected
    let badge = licenses.licenseBadges.filter(license => license.name === data.license);
    //this stores a template literal for the README.md
    let readme = `# ${data.title} \n
\n
## Description \n
\n
<p>${data.description}</p> \n
${badge[0].badge}
\n
## Table of Contents \n
\n
* [Installation](#installation) \n
* [Usage](#usage) \n
* [License](#license) \n
* [Contributing](#contributing) \n
* [Tests](#tests) \n
* [Questions](#questions) \n
\n
## Installation \n
\n
<p>${data.installation}</p> \n
\n
## Usage \n
\n
<p>${data.usage}</p> \n
\n
## License \n
\n 
<p>This project is licensed under the terms of the ${data.license}</p> \n
${badge[0].badge}
\n
## Contributing \n
\n
<p>${data.contribution}</p> \n
\n
## Tests \n
\n
<p>${data.tests}</p> \n
\n
## Questions \n
\n
<p>Feel free to reach me with additional questions @ ${data.email}.</p> \n
<p>Check out my GitHub profile: <a href="https://github.com/${data.username}">${data.username}</a></p> 
` 
  //this returns the readme data
  return readme;
};
