let posX;
let posY;
let diametro;
let radio;
let vel;

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetBall();
}

function draw() {
  background(25, 100, 50);

  posX -= vel;
  if (posX < -radio) {
    resetBall();
  }

  fill(0);
  circle(posX, posY, diametro);
}

function resetBall() {
  diametro = random(20, 100);
  radio = diametro / 2;
  vel = random(2, 10);
  posX = windowWidth + radio;
  posY = random(height);
}