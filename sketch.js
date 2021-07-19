var ship;
var sea;
function preload(){
seaimg = loadImage("sea.png");
shipimg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}
function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaimg);
  sea.scale=0.3;
  ship = createSprite(100,200,20,50);
  ship.addAnimation("shipimg",shipimg1);
  ship.scale=0.3;
}
function draw() {
  background("blue");
  sea.velocityX=-2;
  //infinite scrolling effect
  if(sea.x < 0){
    sea.x = sea.width/2;
      }
 drawSprites();
}