var bullet, wall;
var speed,thickness, weight;

function setup() {
  createCanvas(1500,400);
  bullet=createSprite(50, 200, 50, 15);
  bullet.shapeColor = "yellow";

  wall=createSprite(1450, 200, thickness, height/2);
  wall.shapeColor = "brown";

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,42);

  bullet.velocityX = speed; 
}

function draw() {
  background("black"); 

if (wall.x-bullet.x<(bullet.width+wall.width)/2) {
  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if (deformation>180) {
bullet.shapeColor = "white";
  }
if (deformation<180 && deformation>100) {
  bullet.shapeColor = "white";
}
if (deformation<100) {
bullet.shapeColor = "white";
}
}

if (hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
if (damage>10) {
  wall.shapeColor = "yellow";
}
 
if (damage<10){
  wall.shapeColor = "red";
}
}
  drawSprites();
}

function hasCollided (lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}









