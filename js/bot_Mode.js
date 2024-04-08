let sumo1 = document.getElementById("playerImg1");
let sumo2 = document.getElementById("playerImg2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let rotate1 = true;
let rotate2 = true;
let sumo1Score = document.getElementById("playerScore1");
let sumo2Score = document.getElementById("playerScore2");
let sumo1Count = 0;
let sumo2Count = 0;
let sumo1Stop = "0";
let sumo2Stop = "0";
let botMoveCheck = true;
let interval = 0;
let speed = 500;
let boxSize = document.getElementById("boxSize");
boxSize = window.getComputedStyle(boxSize);
boxSize = boxSize.width;
console.log(boxSize);

if (boxSize === "500px") {
    sumo1Stop1 = "420px";
    sumo1Stop2 = "410px";
    sumo2Stop = "410px";
}
else if (boxSize === "400px") {
    sumo1Stop1 = "330px";
    sumo1Stop2 = "320px";
    sumo2Stop = "320px";
}
else if (boxSize === "300px") {
    sumo1Stop1 = "250px";
    sumo1Stop2 = "240px";
    sumo2Stop = "240px";
}

function music() {
    var bg_song = new Audio('sound/neon_bg_song.mp3');
    bg_song.loop;
    bg_song.play();
    document.getElementById("body").removeAttribute("onclick");
}

function changeMode() {
    let Mode = document.getElementById("gameMode");
    currentMode = Mode.textContent;
    Mode.innerHTML = "Easy";

    if (currentMode == "Easy") {
        Mode.innerHTML = "Hard";
        speed = 200;
    }
    else if (currentMode == "Hard") {
        Mode.innerHTML = "Impossible";
        speed = 150;
    }
    else if (currentMode == "Impossible") {
        Mode.innerHTML = "Easy";
        speed = 500;
    }
}

async function botMove() {
    console.log(sumo1.style.paddingTop == sumo1Stop);
    if (sumo1.style.paddingTop == sumo1Stop1 || sumo1.style.paddingTop == sumo1Stop2) {
        console.log("sumo1 is stopped");
        winner(1);
    }
    else {
        var audio = new Audio('sound/figth_sound.mp3');
        audio.play();
        if (rotate1 == true) {
            sumo1.style.transform = "rotate(-2deg)";
            rotate1 = false;
        }
        else {
            sumo1.style.transform = "rotate(2deg)";
            rotate1 = true;
        }
        sumo1.style.paddingTop = parseInt(sumo1.style.paddingTop || 0) + 20 + 'px';
        sumo2.style.paddingTop = parseInt(sumo2.style.paddingTop || 0) - 10 + 'px';
        console.log("suo1", sumo1.style.paddingTop);
    }
}


function move() {
    if (botMoveCheck == true) {
        interval = setInterval(botMove, speed);
        botMoveCheck = false;
    }
    console.log("suo1", sumo1.style.paddingTop);
    if (sumo2.style.paddingTop == sumo2Stop) {
        console.log("sumo2 is stopped");
        winner(2);
    }
    else {
        var audio = new Audio('sound/figth_sound.mp3');
        audio.play();
        if (rotate2 == true) {
            sumo2.style.transform = "rotate(-182deg)";
            rotate2 = false;
        }
        else {
            sumo2.style.transform = "rotate(182deg)";
            rotate2 = true;
        }
        sumo2.style.paddingTop = parseInt(sumo2.style.paddingTop || 0) + 10 + 'px';
        sumo1.style.paddingTop = parseInt(sumo1.style.paddingTop || 0) - 20 + 'px';
        console.log("suo2", sumo2.style.paddingTop);
    }
}

function winner(winner) {
    button2.removeAttribute("onClick");
    clearInterval(interval);

    if (winner === 1) {
        sumo1Count += 1;
        sumo1Score.innerHTML = sumo1Count;
    }
    else if (winner === 2) {
        sumo2Count += 1;
        sumo2Score.innerHTML = sumo2Count;
    }
}

function gameReset() {
    clearInterval(interval);

    sumo1.style.paddingTop = "0px";
    sumo2.style.paddingTop = "0px";

    button2.setAttribute("onclick", "move()");

    sumo1.style.transform = "rotate(0deg)";
    sumo2.style.transform = "rotate(180deg)";

    botMoveCheck = true;
}

function gameRestart() {
    document.location.reload();
}