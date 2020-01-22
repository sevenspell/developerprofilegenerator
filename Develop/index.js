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

            //4c. number of github stars

            const starCount = starredURL.reduce((a, b) => a + b, 0);

            //5. feed data into generateHTML() and generate

            const githubData = userGithubData[0];

            const htmlFile = generateHTML.generateHTML({ colorV, githubData, starCount });

            //6. convert html file to pdf

            function convertToPDF(htmlFile) {

                var conversion = convertFactory({
                    converterPath: convertFactory.converters.PDF

                });

                conversion({ html: htmlFile }, function (err, result) {
                    if (err) {
                        return console.error(err);
                    }

                    var filename = githubData.login.toLowerCase().split(' ').join('') + ".pdf"

                    // console.log(result.numberOfPages);
                    // console.log(result.logs);
                    result.stream.pipe(fs.createWriteStream('./' + `${filename}`));
                    conversion.kill(); 

                    console.log("PDF file " + `${filename}` + " created");
                });
            }

            convertToPDF(htmlFile);

        }).catch(function (error) {
            console.log(error);
        })
        )
    });
