const generateHTML = require("./generateHTML");
const convertFactory = require("electron-html-to");
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

//1. Prompt username
const questions = [
    {
        type: "input",
        message: "Enter your Github username:",
        name: "usernameV"
    },
    {
        type: "list",
        message: "Choose your favourite color:",
        name: "colorV",
        choices: ["green", "purple", "pink", "red", "blue", "yellow"]
    }
];

//2. get data from Github based on username profile

inquirer.prompt(questions)

    .then(function getUserData({ usernameV, colorV }, data) {

        // const userName = data.usernameV;
        const userGithubData = [];
        const starredURL = [];

        const queryURLGithubProfile = `https://api.github.com/users/${usernameV}`;
        const queryURLGithubStarred = `https://api.github.com/users/${usernameV}/repos`;


        axios.get(queryURLGithubProfile).then(function (res) {
            const responseData = res.data;

            //3. store username profile data into array
            userGithubData.push(responseData);

        }).catch(function (error) {
            console.log(error);
        }).then(axios.get(queryURLGithubStarred).then(function (res) {
            const responseStarred = res.data;

            responseStarred.forEach(function (responseStarred) {

                starredURL.push(responseStarred.stargazers_count);

            })
            console.log(starredURL);

            //4c. number of github stars

            const starCount = starredURL.reduce((a, b) => a + b, 0);
            console.log(starCount);

            //5. feed data into generateHTML() 

            const githubData = userGithubData[0];
            // console.log(githubData.name + " line 60");
            // console.log(generateHTML.generateHTML({colorV, githubData, starCount}) + " line 61");

            const htmlFile = generateHTML.generateHTML({ colorV, githubData, starCount });

            // console.log(htmlFile + " line 67");

            function convertToPDF(htmlFile) {

                // console.log(htmlFile + " line 75");

                var conversion = convertFactory({
                    converterPath: convertFactory.converters.PDF

                });

                conversion({ html: htmlFile }, function (err, result) {
                    if (err) {
                        return console.error(err);
                    }

                    var filename = githubData.name.toLowerCase().split(' ').join('') + ".pdf"

                    fs.writeFile(filename, htmlFile, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("success!");
                    })

                    // console.log(result.numberOfPages);
                    // console.log(result.logs);
                    // result.stream.pipe(fs.createWriteStream('./html.pdf`'));
                    // conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
                });


            }

            convertToPDF(htmlFile);


            // return htmlFile;


        }).catch(function (error) {
            console.log(error);
        })

        )
        // .then(function convertToPDF() {

        //     console.log(htmlFile + " line 75");


        //     // var conversion = convertFactory({
        //     //     converterPath: convertFactory.converters.PDF
        //     // });

        //     // conversion({ html: '<h1>Hello World</h1>' }, function (err, result) {
        //     //     if (err) {
        //     //         return console.error(err);
        //     //     }

        //     //     console.log(result.numberOfPages);
        //     //     console.log(result.logs);
        //     //     result.stream.pipe(fs.createWriteStream('/path/to/anywhere.pdf'));
        //     //     conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
        //     // });


        // }



        // )

    });














//6. generate html
//7. convert html file to pdf







// function writeToFile(fileName, data) {

// }

// function init() {

// }

// init();
