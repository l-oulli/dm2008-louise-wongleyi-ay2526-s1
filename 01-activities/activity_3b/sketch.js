function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  // TODO 2:
  myShape(200, 200, 80, color(255, 0, 0, 50));
  myShape(200, 200, 120, color(0, 255, 0, 50));
  myShape(200, 200, 160, color(0, 0, 255, 50));

  // TODO 3:
  for (let i = 0; i < 5; i++) {
    let size = random(40, 200);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let alpha = random(30, 80); //opacity
    myShape(200, 200, size, color(r, g, b, alpha));
  }
}

  // TODO 1:
  function myShape(x, y, size, col) {
    fill(col);
    ellipse(x, y, size);
}