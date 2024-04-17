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
