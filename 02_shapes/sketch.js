
// Example 1-1: stroke and fill

function setup() {
    createCanvas(480, 270);
    stroke('pink'); 
    // noStroke();
    strokeWeight(3);
    // fill('blue');
    noFill();
  }
  
  function draw() {
    background(255);
    rect(100,100,75,100);
    ellipse(60,60,100,100);
    triangle(30, 70, 58, 20, 86, 75);
  }
