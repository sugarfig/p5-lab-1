
function setup() {
    createCanvas(windowWidth, windowHeight);
    //add code!

    stroke(50, 200, 195);
    fill(50, 200, 195);
    background('white');
}

function draw() {
    //add code!
    if(mouseIsPressed)
    {
        stroke('white');
        fill('white');
    }
    else
    {
        stroke(50, 200, 195);
        fill(50, 200, 195);
        // fill('black');
    }
    ellipse(mouseX, mouseY, 400, 400);
}