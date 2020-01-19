const generateHTML = require("./generateHTML");
const convertHTMLToPDF = require("pdf-puppeteer");
const axios = require("axios");
const inquirer = require("inquirer");

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
        choices: ["Green", "Purple", "Pink", "Red", "Blue", "Yellow"]
    }

];

const userGithubData = [];
const starredURL = [];

//2. get data from Github based on username profile
inquirer.prompt(questions[0])

    .then(function getUserData({ usernameV }) {

        const queryURLGithubProfile = `https://api.github.com/users/${usernameV}`;
        const queryURLGithubStarred = `https://api.github.com/users/${usernameV}/starred`;

        axios.get(queryURLGithubProfile).then(function (res) {
            const responseData = res.data;

            //3. store username profile data into array
            userGithubData.push(responseData);

            //4. create variables to store
            //4a. number of public repos
            const dataNumPublicRepo = userGithubData[0].public_repos;
            console.log(dataNumPublicRepo);

            //4b. number of followers
            const dataNumFollowers = userGithubData[0].followers;
            console.log(dataNumFollowers);

            //4d. number of followings
            const dataNumFollowing = userGithubData[0].following;
            console.log(dataNumFollowing);

            //4e. user location
            const dataUserLocation = userGithubData[0].location;
            console.log(dataUserLocation);

            //4f. user bio image
            const dataUserImage = userGithubData[0].avatar_url;
            console.log(dataUserImage);

            //4g. user's github link
            const dataUserGithub = userGithubData[0].html_url;
            console.log(dataUserGithub);


        }).catch(function (error) {
            console.log(error);
        });

        axios.get(queryURLGithubStarred).then(function (res) {
            const responseStarred = res.data;

            responseStarred.forEach(function (responseStarred) {
                starredURL.push(responseStarred.html_url);
            })
            console.log(starredURL);

            //4c. number of github stars
            const numOfStarredURL = starredURL.length
            console.log(numOfStarredURL);

        }).catch(function (error) {
            console.log(error);
        });

    })

    // inquirer.prompt(questions[1])
    // .then(function getFavColor({ colorV }){
    //     const favColor = `${colorV}`;
    //     console.log(favColor);
    
    
    // }).catch(function (error) {
    //     console.log(error);
    // })



//5. feed data into generateHTML() 

// const htmlString = generateHTML();

//6. generate html
//7. convert html file to pdf







// function writeToFile(fileName, data) {

// }

// function init() {

// }

// init();
