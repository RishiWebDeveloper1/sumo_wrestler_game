let sumo1 = document.getElementById("playerImg1");
let sumo2 = document.getElementById("playerImg2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let rotate1 = true;
let rotate2 = true;
let sumo1Score = document.getElementById("playerScore1")
let sumo2Score = document.getElementById("playerScore2")
let sumo1Count = 0;
let sumo2Count = 0;
let sumo1Stop = "0";
let sumo2Stop = "0";
let boxSize = document.getElementById("boxSize");
boxSize = window.getComputedStyle(boxSize);
boxSize = boxSize.width;
console.log(boxSize);

if (boxSize === "500px") {
    sumo1Stop = "405px";
    sumo2Stop = "405px";
}
else if (boxSize === "400px") {
    sumo1Stop = "315px";
    sumo2Stop = "315px";
}
else if (boxSize === "300px") {
    sumo1Stop = "235px";
    sumo2Stop = "235px";
}

function music() {
    var bg_song = new Audio('sound/neon_bg_song.mp3');
    bg_song.play();
    document.getElementById("body").removeAttribute("onclick")
}

function move1(move) {
    if (move == 1) {
        button1.style.backgroundColor = "rgb(190, 6, 6)";
    if (sumo1.style.paddingTop == sumo1Stop) {
        console.log("sumo1 is stopped");
        winner(1);
    }
    else {
        var audio = new Audio('sound/figth_sound.mp3');
        audio.play();
        if (rotate1 == true) {
            sumo1.style.transform = "rotate(-2deg)";
            rotate1 = false
        }
        else {
            sumo1.style.transform = "rotate(2deg)";
            rotate1 = true
        }
        sumo1.style.paddingTop = parseInt(sumo1.style.paddingTop || 85) + 5 + 'px'; // Increment paddingTop
        sumo2.style.paddingTop = parseInt(sumo2.style.paddingTop || 85) - 5 + 'px'; // Decrement paddingTop
        console.log("suo1", sumo1.style.paddingTop);
        console.log("suo2", sumo2.style.paddingTop);
        button1.style.backgroundColor = "red";
    }
    }
    else if (move == 2) {
        button2.style.backgroundColor = "rgb(190, 6, 6)";
    if (sumo2.style.paddingTop == sumo2Stop) {
        console.log("sumo2 is stopped");
        winner(2);
    }
    else {
        var audio = new Audio('sound/figth_sound.mp3');
        audio.play();
        if (rotate2 == true) {
            sumo2.style.transform = "rotate(-182deg)";
            rotate2 = false
        }
        else {
            sumo2.style.transform = "rotate(182deg)";
            rotate2 = true
        }
        sumo2.style.paddingTop = parseInt(sumo2.style.paddingTop || 85) + 5 + 'px'; // Decrement paddingTop
        sumo1.style.paddingTop = parseInt(sumo1.style.paddingTop || 85) - 5 + 'px'; // Increment paddingTop
        console.log("suo1", sumo1.style.paddingTop);
        console.log("suo2", sumo2.style.paddingTop);
        button2.style.backgroundColor = "red";
    }
    }
}

function winner(winner) {
    button1.removeAttribute("onclick");
    button2.removeAttribute("onClick");

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
    sumo1.style.paddingTop = "5px";
    sumo2.style.paddingTop = "5px";

    button1.setAttribute("onclick", "move1(1)");
    button2.setAttribute("onclick", "move1(2)");

    sumo1.style.transform = "rotate(0deg)";
    sumo2.style.transform = "rotate(180deg)";
}

function gameRestart() {
    document.location.reload();
}
