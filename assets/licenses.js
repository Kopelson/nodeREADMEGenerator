//this initializes an array of licenses
const licenseArr = [];
//this stores an array of license objects
const licenseBadges = [
    {
        name: "Apache 2.0 License",
        badge:"[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)"
    },
    {
        name: "Boost Software License 1.0",
        badge: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    },
    {
        name: "BSD 3-Clause License",
        badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    },
    {
        name: "CC0",
        badge: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
    },
    {
        name: "Attribution-ShareAlike 4.0 International",
        badge:"[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"
    },
    {
        name:"Attribution 4.0 International",
        badge:"[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"
    },
    {
        name:"Eclipse Public License 1.0",
        badge:"[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    },
    {
        name:"GNU GPL v3",
        badge:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    },
    {
        name:"GNU AGPL v3",
        badge:"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    },
    {
        name:"GNU LGPL v3",
        badge:"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    },
    {
        name:"IBM Public License Version 1.0",
        badge:"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    },
    {
        name:"ISC License (ISC)",
        badge:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    },
    {
        name:"The MIT License",
        badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    },
    {
        name:"Mozilla Public License 2.0",
        badge:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    },
    {
        name:"Attribution License (BY)",
        badge:"[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
    },
    {
        name:"Open Database License (ODbL)",
        badge:"[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
    },
    {
        name:"Public Domain Dedication and License (PDDL)",
        badge:"[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)"
    },
    {
        name:"The Artistic License 2.0",
        badge:"[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    },
    {
        name:"SIL Open Font License 1.1",
        badge:"[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
    },
    {
        name:"The Unlicense",
        badge:"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    },
    {
        name:"The Do What the Fuck You Want to Public License",
        badge:"[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    },
    {
        name:"The zlib/libpng License",
        badge:"[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
    },
    {
        name:"None",
        badge:""
    }
];
//this function loops through the licenseBadges array and pushes the names of each license to the licenseArr
function getLicenses(){
    licenseBadges.forEach(function(index){
        licenseArr.push(index.name);
    });
};

getLicenses();
//this exports the licenseArr that contains the names of the licenses, and the array of licenses objects
module.exports = {
    licenseArr: licenseArr,
    licenseBadges: licenseBadges
  };
  