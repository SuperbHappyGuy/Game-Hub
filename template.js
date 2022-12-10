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
        <li><a href= "./Rock-Paper-Scissor/index.html">Rock Paper Scissors (W.I.P)</a></li>
        <li><a href= "./Picross-Game/index.html">Picross Randomizer(W.I.P.)</a>
        </li>
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
}
console.log(postHtml);