let circleColor, squareColor, triangleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  circleColor = color(random(256), random(256), random(256));
  squareColor = color(random(256), random(256), random(256));
  triangleColor = color(random(256), random(256), random(256));
  frameRate(3);
}

function draw() {
  background(random(256), random(256), random(256),100);
  noStroke();
  fill(circleColor);
  circle(width / 2, height / 1.5, 500);
  
  fill(squareColor);
  square(width / 11, height / 3.5, 500); 
  
  fill(triangleColor);
  triangle(0.8 * width, height / 9, 0.95 * width, 0.55 * height, 0.65 * width, 0.55 * height);
  
  textSize(40);
  fill(255); // 设置文本颜色为白色
  textAlign(CENTER, CENTER);
  
  text("WEEK 5",width / 2, height / 1.5);
  text("WEEK 4",width / 5 , height / 2);
  text("WEEK 6",0.8 * width, height / 2.5);
}



function mousePressed() {
  
  circleColor = color(random(256), random(256), random(256));
  squareColor = color(random(256), random(256), random(256));
  triangleColor = color(random(256), random(256), random(256));
}