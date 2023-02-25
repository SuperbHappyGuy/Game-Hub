let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};

let {title, excerpt, body, tags} = post;

//Menu HTML
  let mainHtml = `
        <ul id= "list">
        <li><a href= "https://github.com/SuperbHappyGuy/RPG-Text-Game">RPG Text Game (W.I.P.)</a></li>
        <li><button id= "rockPS" onclick= "navigate(this.id)">Rock Paper Scissors (W.I.P)</button></li>
        <li><button id= "picross" onclick= "navigate(this.id)">Picross Randomizer(W.I.P.)</button></li>
        <li><button id= "breeding" onclick= "navigate(this.id)">Breeding Game(W.I.P.)</button></li>

        <style type="text/css">
        .dreamloLBTable { border-collapse:collapse;text-align:center;width: 200px; }
        .dreamloLBTable th { border-bottom: 1px solid #EEEEEE;font-weight:bold;margin:0;padding:4px; }
        .dreamloLBTable td { border-bottom: 1px solid#EEEEEE;margin:0;padding:4px; }
        </style>

        <script src="http://dreamlo.com/lb/63c44c768f40bb08f437072f/js" type="text/javascript"></script>
      </ul>
      `
let adventureHtml = `
                      <p>adventure</p>
                      <img id= "construction" src="./Imgs/construction.png">
                    `
let puzzleHtml = `
                    <p>puzzle</p>
                    <img id= "construction" src="./Imgs/construction.png">
                 `

let actionHtml = `
                    <p>action</p>
                    <img id= "construction" src="./Imgs/construction.png">
                 `
let multiplayerHtml = `
                        <p>multiplayer</p>
                        <img id= "construction" src="./Imgs/construction.png">
                      `
let boardGameHtml = `
                      <p>board game</p>
                      <img id= "construction" src="./Imgs/construction.png">
                    `
let pointClickHtml = `
                        <p>point & click</p>
                        <img id= "construction" src="./Imgs/construction.png">
                     `
let visualNovelHtml = `
                        <p>visual novel</p>
                        <img id= "construction" src="./Imgs/construction.png">
                      `
let arcadeHtml = `
                    <p>arcade</p>
                    <img id= "construction" src="./Imgs/construction.png">
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
                Gird Size: <input id= "input" type="text" name="size">
                <input id="btn" type="button" onclick="gridStart()" value="Submit"><br>
              </div>

              <div id="time"></div>
              <div id="win"></div>

              <div id="container"></div>
              <div id="leaderBoard"></div>
              `
            
let rockPS = `
              <div id= "Title">
              <h1>Rock! Paper! Sicssors!</h1>
              </div>

              <div id= "main">
              <div>
                <h4>Opponent</h4>
              </div>

              <script id= "logic" type="text/javascript" src="./Rock-Paper-Scissor/index.js"></script>
              <p id= "game"></p>

              <div>
                <button class= "btn" type= "button" onclick="test()" id= "rock">Rock</button>
                <button class= "btn" onclick="test()" type= "button" id= "paper">Paper</button>
                <button class= "btn" type = "button" onclick= "test()" id = "scissors">Sicssors</button>
                
                <h4>You</h4>
              </div>
              </div>
              `

let breeding = `
                <button id="egg" onclick='hatch()'>Hatch</button>
                <div id="field">
                    <ul id="pen">

                    </ul>
                </div>

                <div id="barn">
                    <div id="breeding" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                    <button id="hatch" onclick="breeding()">Breed</button>
                </div>

                <div id="overflow" ondrop="drop(event)" ondragover="allowDrop(event)">Pen</div>
                <button onclick="compactor()" id="compactor">Compactor</button>
                <div id="trash" ondrop="drop(event)" ondragover="allowDrop(event)">Trash</div>          
                `
function navigate(clicked_id) {
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
  if(clicked_id == "breeding")
  {
    x.innerHTML = breeding;
  }
}