# week9-assignment - Developer Profile Generator

GIF link
https://github.com/sevenspell/week9-assignment/blob/master/week9homeworkx1000x5frames.gif

PDF Sample File
https://github.com/sevenspell/week9-assignment/blob/master/Develop/sevenspell.pdf

## Description 

This project allows users to quickly generate different Github profiles based on a pre-designed html/css template via Node.js.

It uses NPM package Inquirer to prompt questions to collect user information in order to make API calls to Github to retrieve the necessary data using NPM package Axios. 

It then reads HTML code from a different Javascript file and feeds user data into the HTML template in order to generate user profile-based PDF files. This includes user's name, image, bio, location, Github profile link, blog link, number of followers, number of followings, number of Github public repositories, and number of stars the user has received for their repositories.

All users need to do is enter via Node.js, the Github username and their colour preference, and the PDF file will be generated in the same root folder. Entering color preference would then create a variety in color scheme in the PDFs.


## Usage 

1. Open up Gitbash for the root folder where index.js is.
2. Enter 'node index.js' in the command line and press 'Enter'.
3. Enter Github username as prompted in command line and press 'Enter'.
4. Select colour preference from list of colours provided and press 'Enter'.
5. A PDF file will be generated. Go to the same root folder to look for a PDF file with the same name as the Githubusername entered.

See GIF for animated steps.

https://github.com/sevenspell/week9-assignment/blob/master/week9homeworkx1000x5frames.gif


## Credits

I had help from Sandesh, as well as some guidance from Dhani (https://github.com/pozengineer) who finished way faster than I did.




