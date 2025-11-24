// DM2008 — Activity 4b
// Objects in Motion (60 min)

let agents = [];
const NUM_START = 32;

function setup() {
  createCanvas(600, 400);
  noStroke();

  for (let i = 0; i < NUM_START; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(12, 56);
    let speedX = random(-2, 5);
    let speedY = random(-2, 2);
    agents.push(new Agent(x, y, size, speedX, speedY));
  }
}

function draw() {
  background(230);

  for (let i = 0; i < agents.length; i++) {
    agents[i].update();
    agents[i].show();
  }

  for (let i = agents.length - 1; i >= 0; i--) {
    if (agents[i].life <= 0) {
      agents.splice(i, 1);
    }
  }
}

function mousePressed() {
  let size = random(16, 40);
  let speedX = random(-2, 2);
  let speedY = random(-2, 2);
  agents.push(new Agent(mouseX, mouseY, size, speedX, speedY));
}

function keyPressed() {
  if (key === "c" || key === "C") {
    agents = [];
  }
  if (key === "m" || key === "M") {
    for (let agent of agents) {
      agent.hue = random(360);
    }
  }
}

class Agent {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.originalSize = size;

    this.dx = speedX;
    this.dy = speedY;

    this.hue = random(360);
    this.alpha = 200;

    this.pulseSpeed = random(0.05, 0.1);
    this.pulseOffset = random(0, TWO_PI);

    this.life = 255;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0 || this.x > width) {
      this.dx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.dy *= -1;
    }

    //for pulsing effect
    let pulse = sin(frameCount * this.pulseSpeed + this.pulseOffset);
    this.size = this.originalSize * (0.8 + 0.2 * pulse);
  }

  show() {
    fill(50 + (this.hue % 200), 120, 200, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}