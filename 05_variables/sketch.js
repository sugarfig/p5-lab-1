//Code Snippet from Derrick McMillen https://replit.com/@demcrepl/p5js-Spirals?v=1 and // Lauren McCarthy, Casey Reas, Ben Fry

let backgroundcol;
var y = 60; // 100
var d = 80; // 130

function setup() {
    // TRY CHANGING the following variable:
    backgroundcol = color(245, 224, 66);
    createCanvas(windowWidth, windowHeight);
    stroke(245, 66, 173);
    noFill();
    angleMode(DEGREES);
}


// function draw() {
//   ellipse(75, y, d, d);   // left
//   ellipse(175, y, d, d);  // middle
//   ellipse(275, y, d, d);  // right
// }

function draw() {
    background(backgroundcol);
    translate(width / 2, height / 2);
    // TRY CHANGING the following three variables:
    let length = 1;
    let angle = 30;
    let loops = 500;

    for(var i = 0; i < loops; i++) {
        rotate(angle);
        ellipse(-length/2, -length/2, length, length);
        length = length + 1;
    }
}