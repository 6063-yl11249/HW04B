let colors = [
  { r: 252, g: 57, b: 131 },
  { r: 125, g: 216, b: 253 },
  { r: 255, g: 224, b: 95 },
  { r: 253, g: 168, b: 5 },
  { r: 255, g: 191, b: 217 }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('ivory');
}

function mousePressed() {
  let size = random(20, 50); 
  let randomColor = random(colors);

  if (random() < 0.333) {
    drawCircle(mouseX, mouseY, size, randomColor);
  } else if (random() < 0.666) {
    drawRectangle(mouseX, mouseY, size, randomColor);
  } else {
    drawTriangle(mouseX, mouseY, size, randomColor);
  }
}

function drawCircle(x, y, size, color) {
  noStroke(); 
  fill(color.r, color.g, color.b); 
  ellipse(x, y, size, size);
}

function drawRectangle(x, y, size, color) {
  noStroke(); 
  fill(color.r, color.g, color.b); 
  rect(x, y, size, size);
}

function drawTriangle(x, y, size, color) {
  noStroke(); 
  fill(color.r, color.g, color.b); 
  triangle(x, y, x + size, y, x + size / 2, y + size);
}

function keyReleased() {
  if (key === 's' || key === 'S') {''
    saveCanvas('myCanvas', 'png');
  }
}

function keyPressed(){
  if(key == "r") {
    background('ivory');
  }
}





