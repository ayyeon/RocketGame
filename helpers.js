function initialize() {
    // Initialize Global Variables
    heli.x = 100;
    heli.y = height / 2;
    gameState = "start"; // or "gameOn" or "gameOver"
    wall1 = {
        x: 500,
        y: random(50, height - 150),
        w: 50,
        h: 100
    };
    wall2 = {
        x: 800,
        y: random(50, height - 150),
        w: 50,
        h: 100
    };
    wall3 = {
        x: 1100,
        y: random(50, height - 150),
        w: 50,
        h: 100
    };
    wall4 = {
        x: 1800,
        y: random(50, height - 150),
        w: 50,
        h: 50,
    };
    wall5 = {
        x: 2100,
        y: random(50, height - 150),
        w: 30,
        h: 30,
    };
    wallSpeed = 3;
    score = 0;
    grav = 5;
    text("HI Score: " + best, width / 2, height - 10);
}

function drawStartScreen() {
    image(imgs.back, 0, 0, width, height); //background
    noStroke();
    fill(0, 20, 245)
    rect(0, 0, width, 50); // Ceiling
    rect(0, height - 50, width, 50); //Floor
    image(imgs.heli, heli.x, heli.y) // Helicopter
    fill(255)
    textSize(42);
    text("CLICK TO START!", width / 2, height / 2);
    text("HI Score: " + best, width / 3, height - 10);
    text("Rocket Game", width / 3, height / 15);
    stahp = 0;
    score = 0;
}

function gameOn() {
    // LOGIC
    score++;
    moveHelicopter();
    moveWalls();
    drawGameOn();
    checkCollision();
    text("HI Score: " + best, width / 2, height - 10);
    text("Rocket Game", width / 3, height / 15);
}

function gameOver() {
    console.log("Game Over")
    bestscore();
}

function bestscore() {
    if (stahp < 1) {
        stahp = 1
        name = prompt("Enter your name:");
    }
    if (score > best) {
        best = score;
        console.log(best)
    }
    gameState = "leaderboard"
    leaderboard();
}


function leaderboard() {

    if (score > best1) {
        leader1 = (name + ": " + score)
        leader2 = (name1 + ": " + best1)
        leader3 = (name2 + ": " + best2)
        leader4 = (name3 + ": " + best3)
        leader5 = (name4 + ": " + best4)

        console.log("1rst");
        text("Leaderboards", width - 600, height - 500);
        text("HISCORE1: " + leader1, width - 600, height - 450);
        text("HISCORE2: " + leader2, width - 600, height - 400);
        text("HISCORE3: " + leader3, width - 600, height - 350);
        text("HISCORE4: " + leader4, width - 600, height - 300);
        text("HISCORE5: " + leader5, width - 600, height - 250);

        name5 = name4
        name4 = name3
        name3 = name2
        name2 = name1
        name1 = name

        best5 = best4
        best4 = best3
        best3 = best2
        best2 = best1
        best1 = score


    } else if (score > best2) {
        leader1 = (name1 + ": " + best1)
        leader2 = (name + ": " + score)
        leader3 = (name2 + ": " + best2)
        leader4 = (name3 + ": " + best3)
        leader5 = (name4 + ": " + best4)

        console.log("2nd");
        text("Leaderboards", width - 600, height - 500);
        text("HISCORE1:" + leader1, width - 600, height - 450);
        text("HISCORE2:" + leader2, width - 600, height - 400);
        text("HISCORE3:" + leader3, width - 600, height - 350);
        text("HISCORE4:" + leader4, width - 600, height - 300);
        text("HISCORE5:" + leader5, width - 600, height - 250);

        name5 = name4
        name4 = name3
        name3 = name2
        name2 = name
        name1 = name1

        best5 = best4
        best4 = best3
        best3 = best2
        best2 = score
        best1 = best1

    } else if (score > best3) {
        leader1 = (name1 + ": " + best1)
        leader2 = (name2 + ": " + best2)
        leader3 = (name + ": " + score)
        leader4 = (name3 + ": " + best3)
        leader5 = (name4 + ": " + best4)

        console.log("3rd");
        text("Leaderboards", width - 600, height - 500);
        text("HISCORE1:" + leader1, width - 600, height - 450);
        text("HISCORE2:" + leader2, width - 600, height - 400);
        text("HISCORE3:" + leader3, width - 600, height - 350);
        text("HISCORE4:" + leader4, width - 600, height - 300);
        text("HISCORE5:" + leader5, width - 600, height - 250);

        name5 = name4
        name4 = name3
        name3 = name
        name2 = name2
        name1 = name1

        best5 = best4
        best4 = best3
        best3 = score
        best2 = best2
        best1 = best1

    } else if (score > best4) {
        leader1 = (name1 + ": " + best1)
        leader2 = (name2 + ": " + best2)
        leader3 = (name3 + ": " + best3)
        leader4 = (name + ": " + score)
        leader5 = (name4 + ": " + best4)

        console.log("4th");
        text("Leaderboards", width - 600, height - 500);
        text("HISCORE1:" + leader1, width - 600, height - 450);
        text("HISCORE2:" + leader2, width - 600, height - 400);
        text("HISCORE3:" + leader3, width - 600, height - 350);
        text("HISCORE4:" + leader4, width - 600, height - 300);
        text("HISCORE5:" + leader5, width - 600, height - 250);

        name5 = name4
        name4 = name
        name3 = name3
        name2 = name2
        name1 = name1

        best5 = best4
        best4 = score
        best3 = best3
        best2 = best2
        best1 = best1

    } else if (score > best5) {
        leader1 = (name1 + ": " + best1)
        leader2 = (name2 + ": " + best2)
        leader3 = (name3 + ": " + best3)
        leader4 = (name4 + ": " + best4)
        leader5 = (name + ": " + score)

        console.log("5th");
        text("Leaderboards", width - 600, height - 500);
        text("HISCORE1:" + leader1, width - 600, height - 450);
        text("HISCORE2:" + leader2, width - 600, height - 400);
        text("HISCORE3:" + leader3, width - 600, height - 350);
        text("HISCORE4:" + leader4, width - 600, height - 300);
        text("HISCORE5:" + leader5, width - 600, height - 250);

        name5 = name
        name4 = name4
        name3 = name3
        name2 = name2
        name1 = name1

        best5 = score
        best4 = best4
        best3 = best3
        best2 = best2
        best1 = best1

    } else {
        leader1 = (name1 + ": " + best1)
        leader2 = (name2 + ": " + best2)
        leader3 = (name3 + ": " + best3)
        leader4 = (name4 + ": " + best4)
        leader5 = (name5 + ": " + best5)

        console.log("5th");
        text("Leaderboards", width - 600, height - 500);
        text("HISCORE1:" + leader1, width - 600, height - 450);
        text("HISCORE2:" + leader2, width - 600, height - 400);
        text("HISCORE3:" + leader3, width - 600, height - 350);
        text("HISCORE4:" + leader4, width - 600, height - 300);
        text("HISCORE5:" + leader5, width - 600, height - 250);
    }
    gameState = "gameDone"
}

function itembox() {
    let dice = Math.random();
    let comeback = frameCount;

    if (dice < 0.2) {
        // 20%
        text("SHIELD!", width / 2, height / 2);
        console.log("shield")
        wall4.y = wall4.y + 1000;
        shield = 1;


    } else if (dice < 0.30) {
        // 10%
        console.log("nuke")
        wall4.y = wall4.y + 1000;
        nuke = 1;


    } else if (dice < 0.35) {
        // 5%
        console.log("slow")
        wall4.y = wall4.y + 1000;
        slowwalls = 1;

    } else if (dice < 0.37) {
        // 2%
        text("GRAVITY!", width / 2, height / 2)
        console.log("gravity")
        wall4.y = wall4.y + 1000;
        grav = 15
        setTimeout(function gravity() {
            text("GRAVITY!", width / 2, height / 2)
            grav = 5
        }, 1000);

    } else if (dice < 0.3702) {
        // 0.02
        console.log("JACKPOT")
        wall4.y = wall4.y + 1000;
        yackpot = 1;
        setTimeout(function () {
            yackpot = 0;
        }, 2000);

    } else {
        //
        console.log("points")
        wall4.y = wall4.y + 1000;
        pointingus = 1;
        setTimeout(function () {
            pointingus = 0;
        }, 500);
    }

    if (comeback > 3000) {
        console.log("comeback")
        wall4.y = wall4.y - 1000;
    }

    if (yackpot == 1) {
        score = score + 5000
    }

    if (pointingus == 1) {
        score = score + 200
    }
}
