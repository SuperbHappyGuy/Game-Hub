var creatureCount = 0;
var swim = "";
var fly;
var run;
var power;
var stamina;
var luck;
var intelligence;
var skill = "";
var skills;
var skillsVar;
var breedSkills;
var breedSkillsVar = "";
var compactorBool = false;


function hatch() {
    creatureCount++;
    
    skillGradeAssign();

    if(compactorBool == true) {
        document.getElementById("pen").removeChild(document.getElementById("pen").firstElementChild);
    }

    document.getElementById("pen").innerHTML += `<li draggable="true" ondragstart="drag(event)" class= "creatures" id= "creature` + creatureCount + skillsVar + `">Creature: ` + creatureCount + " (" + skills + ")" + `</li>`;
}

function breeding() {
        let x = document.getElementById("breeding").children[0].id.length - 7;
        let y = document.getElementById("breeding").children[1].id.length - 7;

        console.log(x);
        console.log(document.getElementById("breeding").children[0].id[x]);

        for(let i = 0; i < 7; i ++) {
            let rand = Math.floor(Math.random() * 101);

            if(rand < 51) {
                breedSkillsVar += document.getElementById("breeding").children[0].id[x + i];
            } else {
                breedSkillsVar += document.getElementById("breeding").children[1].id[y + i];
            }
            console.log(rand);
        }
        breedSkills = breedSkillsVar[0] + ", " + breedSkillsVar[1] + ", " + breedSkillsVar[2] + ", " + breedSkillsVar[3] + ", " + breedSkillsVar[4] + ", " + breedSkillsVar[5] + ", " + breedSkillsVar[6];
        console.log(breedSkills);
        console.log(breedSkillsVar);
        creatureCount++;

        document.getElementById("pen").innerHTML += `<li draggable="true" ondragstart="drag(event)" class= "creatures" id= "creature` + creatureCount + breedSkillsVar + `">**Creature: ` + creatureCount + " (" + breedSkills + ")**" + `</li>`;
        breedSkillsVar = "";
}

function skillGrade() {
    let rand = Math.floor(Math.random() * 101);

    if(rand == 0) {
        skill = "S";
    }
    if(rand < 40 && rand != 0) {
        skill = "E"
    }
    if(rand < 65 && rand >= 40) {
        skill = "D"
    }
    if(rand < 80 && rand >= 65) {
        skill = "C"
    }
    if(rand < 95 && rand >= 80) {
        skill = "B"
    }
    if(rand <= 101 && rand >= 95) {
        skill = "A"
    }
    //console.log(rand);
    return skill;
}

function skillGradeAssign() {
    swim = skillGrade();
    fly = skillGrade();
    run = skillGrade();
    power = skillGrade();
    stamina = skillGrade();
    luck = skillGrade();
    intelligence = skillGrade();

    skillsVar = swim + fly + run + power + stamina + luck + intelligence;
    skills = swim + ", " + fly + ", " + run + ", " + power + ", " + stamina + ", " + luck + ", " + intelligence;
}

function compactor() {
    if(compactorBool == false) {
        compactorBool = true;
        document.getElementById("compactor").style.backgroundColor = "green";
    } else {
        compactorBool = false;
        document.getElementById("compactor").style.backgroundColor = "white";
    }
    console.log(compactorBool);
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById("trash").innerHTML = "";
  }