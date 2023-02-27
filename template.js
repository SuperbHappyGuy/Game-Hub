//Menu HTML
  let mainHtml = `
        <ul id= "list">
        <li><a href= "https://github.com/SuperbHappyGuy/RPG-Text-Game">RPG Text Game (W.I.P.)</a></li>
        <li><button id= "picross" onclick= "navigate(this.id)">Picross Randomizer(W.I.P.)</button></li>
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