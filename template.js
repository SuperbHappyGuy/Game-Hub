//Menu HTML
  let mainHtml = `
            <span id="picross">
              <img class="gameApp" id="picrossImg" src= "./Imgs/nonogram.png" onclick= "navigate(this.id); gridStart(5)">
              <img class="gameApp" id="picrossImg2" src= "./Imgs/nonogram.png" onclick= "navigate(this.id); gridStart(5)">
              <span id="otherGames" onclick= "navigate(this.id)">
                <img class="gameApp" src= "./Imgs/other people's games.png" id= "otherGamesImgs" >
              </span>

              <h1 id="puzzleSize">Picross

              <div class="dropdown">
                <button class="dropbtn">Puzzle Size</button>
                <div class="dropdown-content">
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(2)" class="dropDownOptions">2x2</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(3)" class="dropDownOptions">3x3</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(4)" class="dropDownOptions">4x4</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(5)" class="dropDownOptions">5x5</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(6)" class="dropDownOptions">6x6</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(7)" class="dropDownOptions">7x7</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(8)" class="dropDownOptions">8x8</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(9)" class="dropDownOptions">9x9</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(10)" class="dropDownOptions">10x10</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(11)" class="dropDownOptions">11x11</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(12)" class="dropDownOptions">12x12</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(13)" class="dropDownOptions">13x13</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(14)" class="dropDownOptions">14x14</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(15)" class="dropDownOptions">15x15</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(16)" class="dropDownOptions">16x16</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(17)" class="dropDownOptions">17x17</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(18)" class="dropDownOptions">18x18</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(19)" class="dropDownOptions">19x19</button>
                  <button id="picrossStart" onclick="navigate(this.id); gridStart(20)" class="dropDownOptions">20x20</button>
                </div>
              </div>
            </h1>


            </span>

      `

//Game HTML
let picross = `
              <div id="time"></div>
              <span id="win"></span>
              
              <span id="container" onmousedown="return false" onselectstart="return false"></span>
              `

let otherGames = `
                <iframe id="digGame" src='https://www.bubblebox.com/html5/embed/diggy2/' width='600' height='750' frameborder='0' scrolling='no' marginwidth='0' marginheight='0'></iframe>
                `

let ballGame = `

              `

function navigate(clicked_id) {
    var x = document.getElementById("main");
  if(clicked_id === undefined || clicked_id == "home") {
    x.innerHTML = mainHtml;
  }

  if(clicked_id == "picrossImg" || clicked_id == "picrossStart")
  {
    x.innerHTML = picross;
  }

  if(clicked_id == "otherGames")
  {
    x.innerHTML = otherGames;
  }

  if(clicked_id == "ballGame")
  {
    x.innerHTML = ballGame;
  }
}