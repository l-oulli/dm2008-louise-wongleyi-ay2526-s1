function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  // Horizontal row of shapes
  for (let i = 0; i < width; i += 50) {
    // Alternate colors using % (modulo)
    if (i % 100 == 0) {
      fill(0);   // black
    ellipse(i + 25, height/2, 40);
      
    } else {
      
      if (keyIsPressed && key === 'c') {
        fill(random(255), random(255), random(255));
        
      } else {
        fill(180);
      }

      triangle(
        i + 25, height/2 - 20,
        i + 5, height/2 + 20,
        i + 45, height/2 + 20
      );
    }
  }
}