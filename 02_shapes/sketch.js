
// Example 1-1: stroke and fill

function setup() {
    createCanvas(480, 270);
    stroke('grey'); 
    strokeWeight(10);
    // fill('yellow');
    noFill();
  }
  
  function draw() {
    background(255);
    rect(100,150,75,100);
    ellipse(60,60,100,100);
    triangle(30, 75, 58, 20, 86, 75);  }
