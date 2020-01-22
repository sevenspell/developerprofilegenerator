const colors = {
  green: {
    wrapperBackground: "#ccff33",
    headerBackground: "#006600",
    headerColor: "white",
    photoBorderColor: "#ff99cc"
  },
  purple: {
    wrapperBackground: "#cc99ff",
    headerBackground: "#330080",
    headerColor: "white",
    photoBorderColor: "#009973"
  },
  pink: {
    wrapperBackground: "#ff6699",
    headerBackground: "#ffe6ff",
    headerColor: "black",
    photoBorderColor: "#ff00bf"
  },
  red: {
    wrapperBackground: "#ff9999",
    headerBackground: "#b3003b",
    headerColor: "white",
    photoBorderColor: "white"
  },
  blue: {
    wrapperBackground: "#cce6ff",
    headerBackground: "#004d99",
    headerColor: "white",
    photoBorderColor: "white"

  },
  yellow: {
    wrapperBackground: "#ffcc00",
    headerBackground: "#fff0b3",
    headerColor: "black",
    photoBorderColor: "#ff00ff"
  },

};

function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
      <title>Developer Profile Generator</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[data.colorV].wrapperBackground};
         padding-top: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.15em;
         }
         h7 {
          font-size: 1.1em;
          }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[data.colorV].headerBackground};
         color: ${colors[data.colorV].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 300px;
         height: 300px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -95px;
         border: 6px solid ${colors[data.colorV].photoBorderColor};
         box-shadow: #fcfcfc 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h2 {
         margin-top: 80px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 30px 0;
         font-size: 1.3em;  /* 1.1em */
         }
         .nav-link {
         display: inline-block;
         margin: 5px 5px 5px 5px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .bio {
           background-color: #f5f5ff;
           margin-top: -20px;
           padding-top: 15px;
           padding-bottom: 0;
           margin-bottom: -20px;

         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[data.colorV].headerBackground};
           color: ${colors[data.colorV].headerColor};
           margin: 20px;
           box-shadow: #fcfcfc 4px 1px 20px 4px;
         }
         
         .col {
         flex: 0.4;
         text-align: center;

         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      </head>
      <body>
        <section class="content">
          <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 wrapper">
                    <div class="container photo-header">
                        <div class="row justify-content-center">
                            <div class="col-md-6 offset-md-2 photo-header">
                                <img src="${data.githubData.avatar_url}" alt="profilepic"
                                    class="photo-header">
                                <h2>Hi, I'm ${data.githubData.name}.</h2>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col nav-link">
                                <a href="https://www.google.com/maps/place/${data.githubData.location}" target="blank" class="nav-link links-nav"><i
                                        class="fas fa-location-arrow"> ${data.githubData.location}</i>
                                </a>
                            </div>
                            <div class="col nav-link">
                                <a href="${data.githubData.html_url}" target="blank" class="nav-link links-nav"><i
                                        class="fa fa-github"> Github</i>
                                </a>
                            </div>
                            <div class="col nav-link">
                                <a href="${data.githubData.blog}" target="blank" class="nav-link links-nav"><i
                                        class="fas fa-rss"> Blog</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container bio">
                <div class="row justify-content-center">
                    <div class="col-sm-8 links-nav">
                        <h6>${data.githubData.bio}</h6>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col card links-nav">
                        Public Repositories
                        <br>
                        ${data.githubData.public_repos}
                    </div >
                    <div class="col card links-nav">
                        Followers
                        <br>
                        ${data.githubData.followers}
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col card links-nav">
                        Github Stars
                        <br>
                        ${data.starCount}
                    </div>
                    <div class="col card links-nav">
                        Following
                        <br>
                        ${data.githubData.following}
                    </div>
                </div>
            </div>
            <div class="container wrapper">
            <div class="row wrapper">
            </div>
            </div>
          </div>
        </section >

        <section class="scripts">
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
          <script src="./index.js"></script>
        </section>
      </body >

      </html > `};


    
        module.exports = { colors: colors, generateHTML: generateHTML };

  