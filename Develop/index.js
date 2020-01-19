const generateHTML = require("./generateHTML");
const convertHTMLToPDF = require("pdf-puppeteer");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "Enter your Github username:",
        name: "usernameV"
    }
];


inquirer.prompt(questions).then(function ({ usernameV }) {

    const queryURLRepo = `https://api.github.com/users/${usernameV}/repos?per_page=100`;
    const queryURLNumPublicRepo = `https://api.github.com/users/${usernameV}/repos?per_page=100`;
    const queryURLNumFollowers = `https://api.github.com/users/${usernameV}**?per_page=100`;
    const queryURLNumGithubStars = `https://api.github.com/users/${usernameV}**?per_page=100`;
    const queryURLNumFollowing = `https://api.github.com/users/${usernameV}**?per_page=100`;
    const queryURLBioImage = `https://api.github.com/users/${usernameV}/**?per_page=100`;


    const queryURLUserLocation = `https://api.github.com/users/${usernameV}/**?per_page=100`;
    const queryURLGithubProfile = `https://api.github.com/users/${usernameV}/**?per_page=100`



});

function getRepo(queryURLRepo){

    axios.get(queryURLRepo).then(function (res) {
        const repoNames = res.data.map(function (repo) {
            return repo.name;
            
        });
        console.log(repoNames);
    })
}





// function writeToFile(fileName, data) {

// }

// function init() {

// }

// init();
