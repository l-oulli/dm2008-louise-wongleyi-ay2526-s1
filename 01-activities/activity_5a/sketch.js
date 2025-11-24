// DM2008 – Activity 5a
// Colliding Circles (30 min)
let balls = [];

function setup() {
  createCanvas(400, 400);

  // Step 1: create two Ball objects
  balls.push(new Ball(30, 370));
  balls.push(new Ball(300, 370));
  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
}

function draw() {
  background(0);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.show();
    balls[i].checkCollision(balls);
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = 30;
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  move() {
    this.pos.add(this.vel);
    
    // Wrap around edges
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    }
    if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  show() {
    fill(153, 0, 76);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  // Step 4: Add a method to checkCollision(others)
  // Use dist() and respond visually
  checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      // Make sure we do not compare the ball to itself
      if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) {
          push();
          fill(random(255), random(255), random(255));
          ellipse(this.pos.x, this.pos.y, this.r * 2); // highlight on collision
          pop();
        }
      }
    }
  }
}