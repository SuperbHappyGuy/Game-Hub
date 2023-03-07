//Menu HTML
  let mainHtml = `
        <img id="picross" src= "./Imgs/nonogram.png" id= "picross" onclick= "navigate(this.id)">
      `

//Game HTML
let picross = `
              <div id= "header">
              <h1>Picross</h1>
              </div>

              <div class="dropdown">
                <button class="dropbtn">Puzzle Size</button>
                <div class="dropdown-content">
                  <button onclick="gridStart(2)" class="dropDownOptions">2x2</button>
                  <button onclick="gridStart(3)" class="dropDownOptions">3x3</button>
                  <button onclick="gridStart(4)" class="dropDownOptions">4x4</button>
                  <button onclick="gridStart(5)" class="dropDownOptions">5x5</button>
                  <button onclick="gridStart(6)" class="dropDownOptions">6x6</button>
                  <button onclick="gridStart(7)" class="dropDownOptions">7x7</button>
                  <button onclick="gridStart(8)" class="dropDownOptions">8x8</button>
                  <button onclick="gridStart(9)" class="dropDownOptions">9x9</button>
                  <button onclick="gridStart(10)" class="dropDownOptions">10x10</button>
                  <button onclick="gridStart(11)" class="dropDownOptions">11x11</button>
                  <button onclick="gridStart(12)" class="dropDownOptions">12x12</button>
                  <button onclick="gridStart(13)" class="dropDownOptions">13x13</button>
                  <button onclick="gridStart(14)" class="dropDownOptions">14x14</button>
                  <button onclick="gridStart(15)" class="dropDownOptions">15x15</button>
                  <button onclick="gridStart(16)" class="dropDownOptions">16x16</button>
                  <button onclick="gridStart(17)" class="dropDownOptions">17x17</button>
                  <button onclick="gridStart(18)" class="dropDownOptions">18x18</button>
                  <button onclick="gridStart(19)" class="dropDownOptions">19x19</button>
                  <button onclick="gridStart(20)" class="dropDownOptions">20x20</button>
                </div>
              </div>

              <div id="time"></div>
              <div id="win"></div>

              <div id="container" onmousedown="return false" onselectstart="return false"></div>

              <nav id="table">
                <ul id="leaderBoard"></ul>
              </nav>
              `

function navigate(clicked_id) {
    var x = document.getElementById("main");
  if(clicked_id === undefined || clicked_id == "home") {
    x.innerHTML = mainHtml;
  }

  if(clicked_id == "picross")
  {
    x.innerHTML = picross;
    //gridStart(5);
  }
}