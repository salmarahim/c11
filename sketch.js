var trex ,trex_running;
var ground,ground_img;
var invisibleGround;

function preload(){

  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_img=loadImage("ground2.png")

}

function setup(){

  createCanvas(600,200) 

  //create a trex sprite
  trex=createSprite(300,150,50,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  trex.x=50;

  ground=createSprite(300,150,600,20)
  ground.addImage("land",ground_img);
  ground.velocityX=-3;
  console.log(ground.width);

  invisibleGround=createSprite(300,160,600,20)
  invisibleGround.visible=false;


}

function draw(){

  background("white")
  console.log(trex.y)

  if(keyDown("space")&& trex.y>126){
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.5;

  trex.collide(invisibleGround);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  drawSprites();

}
