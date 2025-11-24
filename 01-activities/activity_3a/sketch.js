// DM2008 — Activity 3a
// (Array Sampler, 25 min)

// 1. Create an array of colors (or other values)
//    You can make more than one array if you'd like
let palette = ["#E6FF00", "#FD0000", "#000000", "#FFFFFF"];

// 2. A variable to track the current index
let currentIndex = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  picked = random(palette);
  picked2 = random(palette);
  // 3. Use the array value at currentIndex
  fill(picked);
  //ellipse(width/2, height/2, 200);

  textSize(80);
  stroke(picked2);
  strokeWeight(4);
  text("hi", 200, 100);
  text("i want to", 60, 200);
  text("sleep", 100, 300);

  describe('The text "hi" written in white with a black outline.');
  describe('The text "i want to" written in white with a black outline.');
  describe('The text "sleep" written in white with a black outline.');
}

// 4. Change the index when a key is pressed
// Create a new array with some colors

// Try changing the array while the loop keeps adapting
function mousePressed() {
  if (mouseX <50) {
    // Add a new random color to the end
    palette.push(color(random(255), random(255), random(255)));
  }
  if (mouseX >300) {
    // Remove the last color (if any)
    if (palette.length > 0) {
      palette.splice(palette.length - 1, 1);
    }}
  // Log in the console to check
  console.log("Current index:", currentIndex, "→", palette[currentIndex]);
}

/* 
TODOs for students:
1. Replace colors with your own data (positions, text, sizes, etc).
2. Try mousePressed() instead of keyPressed().
3. Use push() to add new items, or splice() to remove them, then check how the sketch adapts.
4. Try looping through an array to visualize all the items within it instead of accessing one item at a time.
*/
