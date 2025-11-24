// DDM2008 — Activity 2a
// (Mode Switch, 20 min)

let x = 0;        // ellipse x-position
let size = 50;    // ellipse size (you can change this in your if/else)
let bgColor;      // background color set by switch(key)
let circleColor;

function setup() {
  createCanvas(400, 400);
  bgColor = color(0);
  circleColor = color(255);
}

function draw() {
  background(bgColor);

  if (mouseX > width / 2) {
    x += 4; // faster on right half
  } else {
    x += 2; // slower on left half
  }

  // Wrap around when it exits the right edge
  if (x > width + size / 2) {
    x = 0;
  }
  
 // --- Draw the ellipse ---
  fill(circleColor); // Use the circleColor variable set by key presses
  ellipse(x, height / 2, size);
}

// --- Mode switching with number keys: 1, 2, 3 ---
function keyPressed() {
  switch (key) {
    case '1':
      circleColor = color(153, 0, 76);
      break;
    case '2':
      circleColor = color(255, 0, 127);
      break;
    case '3':
      circleColor = color(255, 153, 204);
      break;
    default:
      circleColor = color(255);
  }
}