//code snippet adapted from https://editor.p5js.org/juliamaltz/sketches/H1sO_VBSb
// var color1;
// var color2;

// function setup() { 
//   createCanvas(windowWidth, windowHeight);
//   color1 = color(255, 0, 0);
//   color2 = color(0, 0, 255);
// } 

// function draw() { 
//   var percentage = map(mouseY, 0, height, 0, 1);
//   var color = lerpColor(color1, color2, percentage);
//   stroke(250);
//   fill(color);
//   ellipse(mouseX, mouseY, 50,50);
// }

let img;
function preload() 
{
  img = loadImage('bunny.jpeg');
  // https://cf.ltkcdn.net/small-pets/images/std-xs/261832-340x227-brown-bunny.jpg
}
// function setup() {
//   image(img, 0, 0);
// }


function setup() {
  createCanvas(windowWidth, windowHeight);
  //add code!

  // loadImage
  // ('bunny.jpeg', img => 
  // {
  //   image(img, 0, 0);
  // });
  noStroke();
  // img = loadImage('../11_images/bunny.jpeg');
  
  stroke(50, 200, 195);
  fill(50, 200, 195);
  background('white');
}

// function mouseClicked()
// {
//   image(img, mouseX, mouseY);
// }

function draw() {
  //add code!
  
  if(mouseIsPressed)
  {
      // stroke('white');
      // fill('white');
    image(img, mouseX, mouseY, 300, 300);
  }
  else
  {
    ellipse(mouseX, mouseY, 400, 400);
      stroke(50, 200, 195);
      fill(50, 200, 195);
      // fill('black');
  }
  
}