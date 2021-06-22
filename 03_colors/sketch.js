// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-3: RGB Color
function setup() {
    createCanvas(displayWidth, displayHeight);
    noStroke();
}
  
  function draw() {
  
    background(255);
    
    // Bright red -> change my fill!
    fill(255,0,0);
    ellipse(100,100,100,100);
  
    // Dark red -> change my fill!
    fill(127,0,0);
    ellipse(300,100,100,100);
  
    // Pink (pale red) -> change my fill!
    fill(255,200,200);
    ellipse(500,100,100,100);
  }