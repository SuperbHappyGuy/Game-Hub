let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};

let {title, excerpt, body, tags} = post;

let test = `<article>
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${excerpt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
      ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
    </ul>
</footer>`;
//Menu HTML
  let mainHtml = `

      <button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
      
        <img id= "bird" class="mySlides" src="./Imgs/bird.jpg">
        <img id= "dog" class="mySlides" src="./Imgs/dog.jpg">
        <img id= "cat" class="mySlides" src="./Imgs/cat.jpg">
        <img id= "fish" class="mySlides" src="./Imgs/fish.jpg">
  
      <button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095</button>

        <p>Coming soon</p>

        <ul id= "list">
        <li><a href= "https://github.com/SuperbHappyGuy/RPG-Text-Game">RPG Text Game (W.I.P.)</a></li>
        <li><button id= "rockPS" onclick= "navigate(this.id)">Rock Paper Scissors (W.I.P)</button></li>
        <li><button id= "picross" onclick= "navigate(this.id)">Picross Randomizer(W.I.P.)</button></li>
      </ul>
      `
let adventureHtml = `
                      <p>adventure</p>
                    `
let puzzleHtml = `
                    <p>puzzle</p>
                 `

let actionHtml = `
                    <p>action</p>
                 `
let multiplayerHtml = `
                        <p>multiplayer</p>
                      `
let boardGameHtml = `
                      <p>board game</p>
                    `
let pointClickHtml = `
                        <p>point & click</p>
                     `
let visualNovelHtml = `
                        <p>visual novel</p>
                      `
let arcadeHtml = `
                    <p>arcade</p>
                 `
let funnyHtml = `
                  <p>funny</p>
                `
let videoHtml = `
                  <iframe width="420" height="315" src= "https://www.youtube.com/embed/lsh0bxUVWNE"></iframe>
                `
let login = `
              <div>
                <input placeholder= "Username"> 
                <input placeholder= "Password"> 
                <button class= "sideBtn">Login</button>
             </div>

             <div>
                <input placeholder= "Email"> 
                <input placeholder= "Username"> 
                <input placeholder= "Password">
                <input placeholder= "Confirm Password"> 
                <button class= "sideBtn">Join</button>
             </div>
             `
//Game HTML
let picross = `
              <div id= "header">
              <h1>Picross</h1>
              </div>

              <div>
              <p>Coming Soon!</p>
                Gird Size: <input id= "input" type="text" name="size">
                <input id="btn" type="button" onclick="gridStart()" value="Submit"><br>
              <button id= "Start" onclick= "start()">Start</button>
              </div>

              <div id="win"></div>

              <button id= "marker" onclick="markerFlags()"><h1 id="markerText">Marker</h1></button>
              <button id= "xMarker" onclick="markerFlags()"><h1 id="xMarkerText">X Marker</h1></button>

              <div id="container"></div>

              <div id= "footer">
              <h5>Brandon Noel 2022</h5>
              </div>
              <script src="./Picross-Game/script.js"></script>
              <script src="./Picross-Game/api.js"></script>
              `
            
let rockPS = `
              <div id= "Title">
              <h1>Rock! Paper! Sicssors!</h1>
              </div>

              <div id= "main">
              <div>
                <h4>Opponent</h4>
              </div>

              <script id= "logic" type="text/javascript" src="./Js/index.js"></script>
              <p id= "game"></p>

              <div>
                <button class= "btn" type= "button" onclick="test()" id= "rock">Rock</button>
                <button class= "btn" onclick="test()" type= "button" id= "paper">Paper</button>
                <button class= "btn" type = "button" onclick= "test()" id = "scissors">Sicssors</button>
                
                <h4>You</h4>
              </div>
              </div>
              `
function navigate(clicked_id) {
  console.log(clicked_id);
    var x = document.getElementById("main");
  if(clicked_id === undefined || clicked_id == "home") {
    x.innerHTML = mainHtml;
  }
  if(clicked_id == "adventure")
  {
    x.innerHTML = adventureHtml;
  }
  if(clicked_id == "puzzle")
  {
    x.innerHTML = puzzleHtml;
  }
  if(clicked_id == "action")
  {
    x.innerHTML = actionHtml;
  }
  if(clicked_id == "multiplayer")
  {
    x.innerHTML = multiplayerHtml;
  }
  if(clicked_id == "boardGame")
  {
    x.innerHTML = boardGameHtml;
  }
  if(clicked_id == "pointClick")
  {
    x.innerHTML = pointClickHtml;
  }
  if(clicked_id == "visualNovel")
  {
    x.innerHTML = visualNovelHtml;
  }
  if(clicked_id == "arcade")
  {
    x.innerHTML = arcadeHtml;
  }
  if(clicked_id == "funny")
  {
    x.innerHTML = funnyHtml;
  }
  if(clicked_id == "video")
  {
    x.innerHTML = videoHtml;
  }
  if(clicked_id == "test")
  {
    x.innerHTML = test;
  }
  if(clicked_id == "login")
  {
    x.innerHTML = login;
  }

  if(clicked_id == "picross")
  {
    x.innerHTML = picross;
  }
  if(clicked_id == "rockPS")
  {
    x.innerHTML = rockPS;
  }
}
console.log(postHtml);