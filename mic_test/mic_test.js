var mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(230, 254, 162);
    getAudioContext().suspend();
    mic = new p5.AudioIn();
    mic.start();
    micLevel = mic.getLevel();
    
}

function mousePressed() {
   userStartAudio();
}

function draw(){
  background(230, 254, 162,50);
  micLevel=mic.getLevel();
  scale=map(micLevel,0, 1.0,20, width);
  fill(random(256),random(256),random(256),100);
  circle(width/2, height/2,scale);
}
