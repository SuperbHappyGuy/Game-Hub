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

function navigate(clicked_id) {
    var x = document.getElementById("main");
  if(clicked_id === undefined || clicked_id == "home") {
    x.innerHTML = mainHtml;
  }

  if(clicked_id == "picross")
  {
    x.innerHTML = picross;
  }
}