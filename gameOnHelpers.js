function moveHelicopter() {
    // Move Helicopter
    if (mouseIsPressed) {
        heli.y -= 5;
    } else {
        heli.y += grav;
    }
}

function moveWalls() {
    // Speed up walls every 100 points
    if (score % 100 == 0) {
        wallSpeed += 0.5;
    }

    // Move Walls & Teleport to right side if off left side
    wall1.x -= wallSpeed;
    if (wall1.x + wall1.w < 0) {
        wall1.x = width;
        wall1.y = random(50, height - 150);
    }

    wall2.x -= wallSpeed;
    if (wall2.x + wall2.w < 0) {
        wall2.x = width;
        wall2.y = random(50, height - 150);
    }

    wall3.x -= wallSpeed;
    if (wall3.x + wall3.w < 0) {
        wall3.x = width;
        wall3.y = random(50, height - 150);
    }


    wall4.x -= wallSpeed;
    if (wall4.x + wall4.w < 0) {
        wall4.x = width;
        wall4.y = random(50, height - 150);
    }

    wall5.x -= wallSpeed;
    if (wall5.x + wall5.w < 0) {
        wall5.x = width;
        wall5.y = random(50, height - 150);
    }

    // SLOW WALLS
    if (slowwalls == 1) {
        wallSpeed = 1;
        slowwalls = 0;
    }
}

function checkCollision() {
    // SHIELD
    if (shield == 1) {
        if (heli.y - 40 < 15 || heli.y + 40 > height - 55) {
            shield = 0;
        }

        // Check for collision with the walls
        if (heli.x + 80 > wall1.x && heli.x - 5 < wall1.x + wall1.w &&
            heli.y + 40 > wall1.y && heli.y - 5 < wall1.y + wall1.h) {
            shield = 0;
            wall1.y = wall1.y + 1000;
        }

        if (heli.x + 80 > wall2.x && heli.x < wall2.x + wall2.w &&
            heli.y + 40 > wall2.y && heli.y - 5 < wall2.y + wall2.h) {
            shield = 0;
            wall2.y = wall2.y + 1000;
        }

        if (heli.x + 80 > wall3.x && heli.x < wall3.x + wall3.w &&
            heli.y + 40 > wall3.y && heli.y + 5 < wall3.y + wall3.h) {
            shield = 0;
            wall3.y = wall3.y + 1000;
        }
    }
    // NUKE
    if (nuke == 1) {
        wall1.y = wall1.y + 1000;
        wall2.y = wall2.y + 1000;
        wall3.y = wall3.y + 1000;
        nuke = 0;
    }


    // Check for collision w/ ceiling & floor
    if (heli.y - 40 < 15 || heli.y + 40 > height - 55) {
        gameState = "gameOver"
        gameOverTimer = frameCount;
    }

    // Check for collision with the walls
    if (heli.x + 80 > wall1.x && heli.x - 5 < wall1.x + wall1.w &&
        heli.y + 40 > wall1.y && heli.y - 5 < wall1.y + wall1.h) {
        gameState = "gameOver"
        gameOverTimer = frameCount;
    }

    if (heli.x + 80 > wall2.x && heli.x < wall2.x + wall2.w &&
        heli.y + 40 > wall2.y && heli.y - 5 < wall2.y + wall2.h) {
        gameState = "gameOver"
        gameOverTimer = frameCount;
    }

    if (heli.x + 80 > wall3.x && heli.x < wall3.x + wall3.w &&
        heli.y + 40 > wall3.y && heli.y + 5 < wall3.y + wall3.h) {
        gameState = "gameOver"
        gameOverTimer = frameCount;

    }
    // ITEM BOX
    if (heli.x + 80 > wall4.x && heli.x < wall4.x + wall4.w &&
        heli.y + 40 > wall4.y && heli.y + 5 < wall4.y + wall4.h) {
        wall4.y = wall4.y + 1000;
        itembox();
    }
    // COIN
    if (heli.x + 80 > wall5.x && heli.x < wall5.x + wall5.w &&
        heli.y + 40 > wall5.y && heli.y + 5 < wall5.y + wall5.h) {
        wall5.y = wall5.y + 1000;
        wall5.y = wall5.y + 1000;
    }

}


function drawGameOn() {
    // DRAWING
    image(imgs.back, 0, 0, width, height); //background
    noStroke();
    fill(0, 20, 245)
    rect(0, 0, width, 50); // Ceiling
    rect(0, height - 50, width, 50); //Floor
    fill(110, 120, 115)
    rect(wall1.x, wall1.y, wall1.w, wall1.h); // Wall 1
    rect(wall2.x, wall2.y, wall2.w, wall2.h); // Wall 2
    rect(wall3.x, wall3.y, wall3.w, wall3.h); // Wall 3
    fill(136, 0, 255)
    rect(wall4.x, wall4.y, wall4.w, wall4.h); // Wall 4
    fill(255, 220, 0)
    ellipse(wall5.x, wall5.y, wall5.w, wall5.h); //Wall 5
    if (shield == 1) {
        text("SHIELD!", width / 2, height / 2);
    }

    if (grav == 15) {
        text("GRAVITY!", width / 2, height / 2)
    }

    if (yackpot == 1) {
        text("JACKPOT!!!!", width / 2, height / 2)
    }

    if (pointingus == 1) {
        text("POINTS!", width / 1.45, height / 2)
    }

    image(imgs.heli, heli.x, heli.y) // Helicopter   
    fill(255);
    text("Score: " + score, width / 20, height - 10);
    text("HI Score: " + best, width / 2, height - 10);
    text("Rocket Game", width / 3, height / 15);
}
