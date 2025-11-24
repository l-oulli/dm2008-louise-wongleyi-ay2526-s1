// DM2008 — Activity 3b
// (Painting App, 50 min)

// 1) Palette + size
const palette = ["#00F4FF", "#FF00D7", "#0EFF00", "#FFFFFF"];
let colorIndex = 0;
let sizeVal = 20;

// 2) Brush registry (array of functions)
const brushes = [brushCircle, brushSquare, brushStreak];
let currentBrush = 0; // 0, 1, or 2

function setup() {
  createCanvas(600, 600);
  background(0);
  rectMode(CENTER);
}

function draw() {
  // paint only while mouse is held
  if (mouseIsPressed) {
    const col = palette[colorIndex];
    // call the selected brush function
    brushes[currentBrush](mouseX, mouseY, col, sizeVal);
  }
}

// 3) Brush functions (students can customize/extend)
function brushCircle(x, y, c, s) {
  noStroke();
  fill(c);
  ellipse(x, y, s);
}

function brushSquare(x, y, c, s) {
  push();
  translate(x, y);
  noStroke();
  fill(c);
  rect(0, 0, s, s);
  pop();
}

function brushStreak(x, y, c, s) {
  stroke(c);
  strokeWeight(max(2, s / 8));
  point(x, y);
}

// 4) Brush UI: select brush, cycle color, change size, clear
function keyPressed() {
  switch (key) {
    case "1":
      currentBrush = 0; // circle
      break;
    case "2":
      currentBrush = 1; // square
      break;
    case "3":
      currentBrush = 2; // streak
      break;
  }
  
   //colours
  if (key === "W" || key === "w") {
    colorIndex = (colorIndex + 1) % palette.length;
  }
  if (key === "E" || key === "e") {
    colorIndex = (colorIndex + 3) % palette.length;
  }
  
  //sizes
  if (keyCode === UP_ARROW) {
    sizeVal += 4;
  } else if (keyCode === DOWN_ARROW) {
    sizeVal = max(4, sizeVal - 4);
  }
  
  //clear canvas
  if (key === "S" || key === "s") {
    background(240);
  }
}