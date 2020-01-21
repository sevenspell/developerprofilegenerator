const generateHTML = require("./generateHTML");
const convertHTMLToPDF = require("pdf-puppeteer");
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

            const githubData = userGithubData[0];
            console.log(githubData.name + " line 60");

            console.log(generateHTML.generateHTML({colorV, githubData, starCount}) + " line 61");

            // return generateHTML({colorV, userGithubData});

        }).catch(function (error) {
            console.log(error);
        })

        );

        // axios.get(queryURLGithubStarred).then(function (res) {
        //     const responseStarred = res.data;

        //     responseStarred.forEach(function (responseStarred) {

        //         starredURL.push(responseStarred.stargazers_count);

        //     })
        //     console.log(starredURL);

        //     //4c. number of github stars

        //     const starCount = starredURL.reduce((a, b) => a + b, 0);
        //     console.log(starCount);


        // }).catch(function (error) {
        //     console.log(error);
        // });



        // function returnHTML({ colorV, userGithubData }) {
        //     let favColor = `${colorV}`;
        //     console.log(favColor + " line 106");
        //     const htmlString = generateHTML.generateHTML;
        //     console.log(userGithubData + " line 110");

        //     // console.log(htmlString + " line 109");
        //     // const dataName = userGithubData[0].name;
        //     // console.log(dataName);

        //     // console.log(htmlString(favColor, dataName, dataBioIntro) + " line 111");

        // }

        // returnHTML({ colorV, userGithubData });


    });




            //4. create variables to store
            // const dataName = userGithubData[0].name;
            // console.log(dataName);

            // const dataBioIntro = userGithubData[0].bio;
            // console.log(dataBioIntro);

            // //4a. number of public repos
            // const dataNumPublicRepo = userGithubData[0].public_repos;
            // console.log(dataNumPublicRepo);

            // //4b. number of followers
            // const dataNumFollowers = userGithubData[0].followers;
            // console.log(dataNumFollowers);

            // //4d. number of followings
            // const dataNumFollowing = userGithubData[0].following;
            // console.log(dataNumFollowing);

            // //4e. user location
            // const dataUserLocation = userGithubData[0].location;
            // console.log(dataUserLocation);

            // //4f. user bio image
            // const dataUserImage = userGithubData[0].avatar_url;
            // console.log(dataUserImage);

            // //4g. user's github link
            // const dataUserGithub = userGithubData[0].html_url;
            // console.log(dataUserGithub);

            // //4h. user's github blog
            // const dataUserGithubBlog = userGithubData[0].blog;
            // console.log(dataUserGithubBlog);




//5. feed data into generateHTML() 








//6. generate html
//7. convert html file to pdf







// function writeToFile(fileName, data) {

// }

// function init() {

// }

// init();
