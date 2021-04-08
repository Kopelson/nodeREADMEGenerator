# Node README Generator :

This is a terminal based application to produce professional looking README md files.

## Overview
 * Youtube video on how to use - https://www.youtube.com/watch?v=24iaJGACyec
 
## User Story
AS A developer <br>
I WANT a README generator <br> 
SO THAT I can quickly create a professional README for a new project <br>
 
## Acceptance Criteria

GIVEN a command-line application that accepts user input <br>
WHEN I am prompted for information about my application repository <br>
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions<br>
WHEN I enter my project title<br>
THEN this is displayed as the title of the README <br>
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions <br>
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests <br>
WHEN I choose a license for my application from a list of options <br>
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under <br>
WHEN I enter my GitHub username <br>
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile <br>
WHEN I enter my email address <br>
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions <br>
WHEN I click on the links in the Table of Contents <br>
THEN I am taken to the corresponding section of the README <br>

## Node
The application can be invoked by using the following command:
node index.js

### Node packages used:

Node fs.writefile() documentation - https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback


## NPM
Download necessary dependencies by using the following command:
npm install

### NPM Inquirer
Inquirer documentation - https://www.npmjs.com/package/inquirer#documentation
  * .prompt()
  * type: 
    -input
    -list

## Credits

Thank you lukas-h for a great list of license badges:
lukas-h - https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


## License
None

## Badges
<a href="https://img.shields.io/badge/JavaScript-100%25-yellow"><img alt="Javascript usage" src="https://img.shields.io/badge/JavaScript-100%25-yellow"></a>
