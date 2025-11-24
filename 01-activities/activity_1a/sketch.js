function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('#C6EFEA');
  noStroke()
  fill(0,500,150)
  ellipse(350,250,300,200)
  ellipse(300,170,100,100)
  ellipse(400,170,100,100)
  fill(0,0,0)
  ellipse(300,170,30,30)
  ellipse(400,170,30,30)
  fill(255,255,255)
  ellipse(300,170,10,10)
  ellipse(400,170,10,10)
  stroke(0,0,0)
  noFill()
  arc(350,220,50,80,PI,0)
  arc(350,200,15,30,PI,0)
}