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
    fill(127,0,0, 50);
    ellipse(300,100,100,100);
  
    // Pink (pale red) -> change my fill!
    fill(255,200,200);
    ellipse(500,100,100,100);


    noStroke();
    colorMode(RGB, 100);
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        stroke(i, j, 100);
        point(i, j);
      }
    }
  }
