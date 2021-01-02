var car, wall;
var speed, weight,lamboImage, slight, heavy;

function preload() {
  lamboImage = loadImage("download.jpg");
  slight = loadImage("nani.jpg");
  heavy = loadImage("junk.jpg");
}

function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400, 1500)

  car = createSprite(50,200,30,30);
  wall = createSprite(700, 200, 20, 500)
  wall.shapeColor = "orange";
}

function draw() {
  background(0); 

  car.velocityX = speed;

  textSize = 50;

  if (car.isTouching(wall)) {
    car.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22500

    if (deformation > 180) {
      car.addImage(heavy);
      car.scale = 0.3;
      text("Lethal", 400, 200)
    }

    if (deformation < 80) {
      car.addImage(lamboImage);
      car.scale = 0.3;
      text("Amazing", 400, 200)
    }

    if (deformation > 80 && deformation < 180) {
      car.addImage(slight);
      car.scale = 0.3;
      text("Average", 400, 200)
    }
  }
  
  drawSprites();
}