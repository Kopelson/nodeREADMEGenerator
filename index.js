const fs = require("fs");
const inquirer = require("inquirer");
const licenses = require("licenses");

inquirer.prompt([
  {
   type: "input",
    name: "title",
    message: "What is the title of your project?"
  }, 
  {
    type: "input",
     name: "description",
     message: "What is the description of your project?"
  },
  {
    type: "input",
     name: "installation",
     message: "What is the installation instructions of your project?"
   },
   {
    type: "input",
     name: "usage",
     message: "What is the usage information of your project?"
   },
   {
    type: "input",
     name: "contribution",
     message: "What is the contribution guidelines of your project?"
   },
   {
    type: "input",
     name: "tests",
     message: "What is the test instructions of your project?"
   },
   {
    type: "list",
    message: "Choose a license for your application.",
    name: "license",
    choices: getLicenses()
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },    
]).then(function(data) {

  const filename = "_README.md";

  fs.writeFile(filename, generateReadme(data), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});


function generateReadme(data){
    let readme = `# ${data.title} \n
\n
## Description \n
\n
<p>${data.description}</p> \n
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
<p>See the [LICENSE](LICENSE.md) file for license rights and limitations (${data.license}).</p> \n
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
    return readme;
};
