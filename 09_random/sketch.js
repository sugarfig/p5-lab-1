    let colors = ['blue', 'red', 'green', 'yellow'];
    let color;
    let size;

function setup() {

    createCanvas(windowWidth, windowHeight);
    //add code!
    // stroke(50, 200, 195);
    color = random(colors); // select random color
    size = random(100);
    stroke(color);
    // fill(50, 200, 195);
    fill(color);
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
        // stroke(50, 200, 195);
        // fill(50, 200, 195);
        // stroke(random(colors));
        noStroke();
        fill(color);
        // fill('black');
    }
    ellipse(mouseX, mouseY, size, size);
}