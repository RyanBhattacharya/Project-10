var ship ,ship1
var sea ,sea1
function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea1=loadAnimation("png")
}
function setup(){


  createCanvas(600,500);
  sea=createSprite(600,300);
  sea.addAnimation("running",sea1)
sea.scale=0.5;
sea.velocityX=-1;
ship=createSprites(50,200,20,50)
ship.addAnimation("running",ship1);
edges=createEdgeSprites

ship.scale=0.25;
ship.x=90;
ship.y=300;
}


function draw() {
background("blue");
 if(KeyDown("enter")){
  ship.velocityX=5;
 }
 if(KeyDown("left")){
  ship.velocityX=-5;
 }
 if(KeyDown("space")){
  ship.velocityX=0;
 }
 if(sea.x <0) {
  sea.x=sea.width/2;
 }

 ship.collide(edges[3])
 drawSprites();
}
