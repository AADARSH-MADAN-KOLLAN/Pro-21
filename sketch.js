var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";

  wall = createSprite(700, 200, 50, 200);
  wall.shapeColor = "brown";

  speed = random(55, 90);
  weigth = random(400, 1500);
}

function draw() {
  background("black");
  
  car.velocityX = speed;

  if(wall.x-car.x < (car.width+wall.width/2)){
    car.velocityX=0;
    var deformation = 0.5 * weigth * speed * speed/22500;
    if(deformation>180){
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    if(deformation<100){
      car.shapeColor = "green";
    }
  }

  drawSprites();
}