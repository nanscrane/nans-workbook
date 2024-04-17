let dice6, dice8;
let result;
let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  dice6 = new Dice(6);
  dice8 = new Dice(8);
}

function draw() {
  background(220);

  // 显示投掷结果
  fill(0);
  textSize(20);
  textAlign(RIGHT, TOP);
  text("Result: " + result, width - 10, 10);

  // 显示生成的图形
  for (let shape of shapes) {
    shape.show();
  }
}

function mousePressed() {
  let roll6 = dice6.roll();
  let roll8 = dice8.roll();

  result = "6-sided: " + roll6 + ", 8-sided: " + roll8;

  if (roll6 !== roll8) {
    let shape6Color = getRandomColor("gold"); // 生成除金色以外的随机颜色
    let shape6 = new Circle(shape6Color); // 六面骰生成随机颜色的圆形
    shapes.push(shape6);

    let shape8Color = getRandomColor("gold"); // 生成除金色以外的随机颜色
    let shape8 = new Square(shape8Color); // 八面骰生成随机颜色的正方形
    shapes.push(shape8);
  } else {
    let shapeColor = "gold"; // 相同数字生成金色正方形
    let shape = new Square(shapeColor);
    shapes.push(shape);
  }
}

function getRandomColor(excludeColor) {
  let colors = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black"];
  let randomColor = excludeColor;
  while (randomColor === excludeColor) {
    randomColor = colors[Math.floor(random(colors.length))];
  }
  return randomColor;
}

function getRandomColor() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  return color(r, g, b);
}

class Dice {
  constructor(sides) {
    this.sides = sides;
  }

  roll() {
    return Math.floor(random(1, this.sides + 1));
  }
}

class Shape {
  constructor(color) {
    this.x = random(20, width - 20);
    this.y = random(20, height - 20);
    this.color = color;
  }

  show() {
    fill(this.color);
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
    this.radius = 20;
  }

  show() {
    super.show();
    ellipse(this.x, this.y, this.radius * 2);
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
    this.side = 40;
  }

  show() {
    super.show();
    rectMode(CENTER);
    rect(this.x, this.y, this.side, this.side);
  }
}

class Diamond extends Shape {
  constructor(number, color) {
    super(color);
    this.number = number;
    this.size = 30;
  }

  show() {
    super.show();
    beginShape();
    vertex(this.x, this.y - this.size);
    vertex(this.x + this.size, this.y);
    vertex(this.x, this.y + this.size);
    vertex(this.x - this.size, this.y);
    endShape(CLOSE);
  }
}
