function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

// draw square divided into 4 triangles
function drawSquare4(x, y, topColor1, topColor2, bottomColor1, bottomColor2, middleColor) {

  let xPos = x;
  let yPos = y;

  if (xPos < mouseX && mouseX < (xPos + 100) && mouseY > yPos && mouseY < (yPos + 100)) {
    fill(topColor1);
  } else {
    fill(topColor2);
  }
  triangle(xPos, yPos, xPos + 100, yPos, xPos + 50, yPos + 50);

  if (xPos < mouseX && mouseX < (xPos + 100) && mouseY > yPos && mouseY < (yPos + 100)) {
    fill(bottomColor1);
  } else {
    fill(bottomColor2);
  }
  triangle(xPos + 50, yPos + 50, xPos + 100, yPos + 100, xPos, yPos + 100);

  fill(middleColor);
  triangle(xPos, yPos + 100, xPos, yPos, xPos + 50, yPos + 50);
  triangle(xPos + 100, yPos, xPos + 100, yPos + 100, xPos + 50, yPos + 50);
}

//draw 4 circles
function drawCircle4(x, y, topColor1, topColor2, bottomColor1, bottomColor2, middleColor) {

  let xPos = x;
  let yPos = y;

  if (xPos < mouseX && mouseX < (xPos + 100) && mouseY > yPos && mouseY < (yPos + 100)) {
    fill(topColor1);
  } else {
    fill(topColor2);
  }
  ellipse(xPos + 75, yPos + 25, 50,50);

  if (xPos < mouseX && mouseX < (xPos + 100) && mouseY > yPos && mouseY < (yPos + 100)) {
    fill(bottomColor1);
  } else {
    fill(bottomColor2);
  }
  ellipse(xPos + 25, yPos + 75, 50,50);

  fill(middleColor);
  ellipse(xPos + 25, yPos + 25, 50,50);
  ellipse(xPos + 75, yPos + 75, 50,50);
}

function draw() {
  background('beige');

  let x1 = 10;
  let y1 = 10; 

  drawSquare4(x1, y1, 'rgb(242, 28, 0)', 'rgb(102, 174, 44)', 'rgb(251, 165, 156)', 'rgb(250, 98, 8)', 'rgb(252, 204, 24)');
  drawSquare4(x1, y1 + 220, 'rgb(251, 165, 156)', 'rgb(66,170,208)', 'rgb(251, 165, 156)', 'rgb(66,170,208)', 'rgb(161,109,150)');
  drawCircle4(x1, y1 + 770,'rgb(242, 28, 0)', 'rgb(102, 174, 44)', 'rgb(251, 165, 156)', 'rgb(250, 98, 8)', 'rgb(252, 204, 24)');
  drawCircle4(x1, y1 + 770,'rgb(242, 28, 0)', 'rgb(102, 174, 44)', 'rgb(251, 165, 156)', 'rgb(250, 98, 8)', 'rgb(252, 204, 24)');
  drawCircle4(x1 + 330, y1 + 550,'rgb(242, 28, 0)', 'rgb(102, 174, 44)', 'rgb(251, 165, 156)', 'rgb(250, 98, 8)', 'rgb(252, 204, 24)');

}

